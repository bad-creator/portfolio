import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Serghei Pascal - Portfolio",
  description: "Einseitiges Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${inter.variable} bg-background-dark text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
