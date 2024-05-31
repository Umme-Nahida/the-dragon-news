import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber/page";
import { Container } from "@mui/material";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber></Navber>
        <Container className="min-h-screen">
        {children}
        </Container>
        <Footer></Footer>
        </body>
    </html>
  );
}
