import "./globals.css";

export const metadata = {
  title: "Brendan Weitz",
  description:
    "Founder, investor, and GM / Head of Business Development in consumer internet, AdTech, and B2B SaaS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}