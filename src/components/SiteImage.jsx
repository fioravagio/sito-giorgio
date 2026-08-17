import Image from "next/image";
import { imageAssets } from "../data/image-assets";

export default function SiteImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  preload = false,
  quality = 75,
  ...props
}) {
  const filename = String(src).split("/").at(-1);
  const metadata = imageAssets[filename];

  if (!metadata) {
    throw new Error(`Metadati immagine mancanti per ${src}`);
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={metadata.width}
      height={metadata.height}
      sizes={sizes}
      preload={preload}
      quality={quality}
      {...props}
    />
  );
}
