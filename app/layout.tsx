
import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
      <Link href="/" id="home">Home</Link>
      <Link href="/about" id="about">About</Link>
      <Link href="/contacts" id="contact">Contact</Link>
      </nav>
        {children}
      </body>
    </html>
  );
}
