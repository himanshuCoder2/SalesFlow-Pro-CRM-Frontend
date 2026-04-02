import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesFlow Pro",
  description: "Enterprise CRM Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-light text-slate-900 font-display">
        {children}
      </body>
    </html>
  );
}
