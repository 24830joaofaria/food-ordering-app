import { Roboto } from "next/font/google";
import "./globals.css";
import Header from './components/layout/Header';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400','500','700']
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="max-w-4xl mx-auto border p-4">
            <Header/>
            {children}
            <footer className=' text-center border-t p-8 text-gray-800'>
              &copy; 2025 All rights reserved
            </footer>
        </main>
        
      </body>
    </html>
  );
}
