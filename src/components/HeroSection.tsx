"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Mobile video (portrait) */}
      <video
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="https://aurumrest.com/cdn/shop/files/preview_images/f1d9b4957b7441b5bdd91cb69f30823b.thumbnail.0000000000_400x.jpg?v=1769477854"
      >
        <source
          src="https://aurumrest.com/cdn/shop/videos/c/vp/f1d9b4957b7441b5bdd91cb69f30823b/f1d9b4957b7441b5bdd91cb69f30823b.HD-1080p-2.5Mbps-67903349.mp4?v=0"
          type="video/mp4"
        />
      </video>

      {/* Desktop video (landscape) */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        autoPlay
        muted
        loop
        playsInline
        poster="https://aurumrest.com/cdn/shop/files/preview_images/afdb7ff0038342cc8c03248f06cf57f8.thumbnail.0000000000_400x.jpg?v=1772094270"
      >
        <source
            src="https://aurumrest.com/cdn/shop/videos/c/vp/afdb7ff0038342cc8c03248f06cf57f8/afdb7ff0038342cc8c03248f06cf57f8.SD-480p-0.9Mbps-76631562.mp4?v=0"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
