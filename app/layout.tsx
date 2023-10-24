import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Providers } from "./providers/provider";
import AppProvider from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperCook recipe | recipe generator",
  description: "SuperCook recipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <QueryClientProvider client={queryClient}> */}
        <AppProvider>
          <Providers>
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[22rem,auto]">
              <Sidebar />
              {children}
            </div>
          </Providers>
        </AppProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
