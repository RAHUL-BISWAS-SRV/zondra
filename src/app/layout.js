import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/Container/Navbar/Navbar";
import ContextProvider from "@/ContextAPI/ContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zondra",
  description: "To Do List App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
