import "./globals.css";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Brendan Weitz",
  description:
    "Founder, investor, and GM / Head of Business Development in consumer internet, AdTech, and SaaS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}