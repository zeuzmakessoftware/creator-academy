import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import DashboardTabs from "@/components/shared/DashboardTabs";
import "../../globals.css";
import { Suspense } from "react";
import Loader from "@/components/shared/Loader";
import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loader />}>
      <>
        <DashboardTabs />
          {children}
        </>
    </Suspense>
  );
}
