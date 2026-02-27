import { NextRequest, NextResponse } from "next/server";

const SHOP = "c21j4h-a6.myshopify.com";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const itemsStr = slug.join("/");

  // Parse variantId:qty pairs (e.g. "45007932293354:1,45007932326122:2")
  const items = itemsStr
    .split(",")
    .map((part) => {
      const [id, qty] = part.split(":");
      return { id: parseInt(id), quantity: parseInt(qty) || 1 };
    })
    .filter((item) => !isNaN(item.id) && item.id > 0);

  if (items.length === 0) {
    return NextResponse.redirect(`https://${SHOP}`);
  }

  try {
    // Step 1: Add items to Shopify cart server-side
    const addRes = await fetch(`https://${SHOP}/cart/add.js`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    if (!addRes.ok) throw new Error("Cart add failed");

    // Collect all Set-Cookie headers to use as session cookies
    const rawSetCookie: string[] = [];
    addRes.headers.forEach((value, key) => {
      if (key.toLowerCase() === "set-cookie") rawSetCookie.push(value);
    });
    const cookieStr = rawSetCookie.map((c) => c.split(";")[0]).join("; ");

    // Step 2: Get the cart token
    const cartRes = await fetch(`https://${SHOP}/cart.json`, {
      headers: { Cookie: cookieStr },
    });

    if (!cartRes.ok) throw new Error("cart.json failed");

    const cart = await cartRes.json();
    const token: string = cart.token ?? "";
    if (!token) throw new Error("No cart token");

    // Step 3: Fetch the Shopify checkout page (with cookies so Shopify serves it)
    const tokenBase = token.split("?")[0];
    const checkoutUrl = `https://${SHOP}/checkouts/c/${tokenBase}`;

    const checkoutRes = await fetch(checkoutUrl, {
      headers: { Cookie: cookieStr },
      redirect: "follow",
    });

    if (checkoutRes.ok) {
      const html = await checkoutRes.text();

      // Rewrite absolute URLs pointing to myshopify to use the same domain,
      // and return the checkout HTML directly to the browser
      const rewritten = html
        .replace(
          new RegExp(`https://${SHOP.replace(".", "\\.")}`, "g"),
          `https://aurumrest.com`
        );

      const response = new NextResponse(rewritten, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });

      // Forward Shopify cookies to the browser so checkout interactions work
      for (const sc of rawSetCookie) {
        response.headers.append("Set-Cookie", sc);
      }

      return response;
    }
  } catch (e) {
    console.error("Checkout error:", e);
  }

  // Fallback: go to Shopify homepage
  return NextResponse.redirect(`https://${SHOP}`);
}
