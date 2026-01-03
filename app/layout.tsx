import { Poppins } from "next/font/google";
// @ts-ignore
import "./globals.css";

const poppins = Poppins({weight: ["400", "500", "600", "700"],});

  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
