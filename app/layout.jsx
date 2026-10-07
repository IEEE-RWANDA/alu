import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://alu.ieeerwanda.org"),
  title: "IEEE ALU Student Branch — Ideas into impact",
  description:
    "Meet the newly created IEEE ALU Student Branch. A space to explore technology, share ideas, and build alongside other students.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IEEE ALU Student Branch — Ideas into impact",
    description:
      "A new home for curious minds at ALU. Explore technology, learn together, and build a student community.",
    type: "website",
    url: "/",
  },
};
export const viewport = { themeColor: "#005e93" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
