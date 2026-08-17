const isDevelopment = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      'autoplay=(self "https://www.youtube-nocookie.com"), browsing-topics=(), camera=(), fullscreen=(self "https://www.youtube-nocookie.com"), geolocation=(), microphone=(), payment=(), usb=()',
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}`,
      "frame-src https://www.youtube-nocookie.com",
      "media-src 'self'",
      "manifest-src 'self'",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/webp"],
    qualities: [70, 75, 82],
    minimumCacheTTL: 2_678_400,
    maximumResponseBody: 6_000_000,
    localPatterns: [
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sito-giorgio.vercel.app",
          },
        ],
        destination: "https://giorgiofioravanti.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
