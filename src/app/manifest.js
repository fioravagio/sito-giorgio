import { SITE_NAME } from "../lib/site";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "Giorgio",
    description: "Territorio, eventi, comunicazione e passioni.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5EF",
    theme_color: "#C8A14A",
    lang: "it",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
