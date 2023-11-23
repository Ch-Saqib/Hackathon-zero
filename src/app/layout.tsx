"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import HamburgerMenuButton from "@/components/Hamburg/HamburgerMenuButton";
import SideMenu from "@/components/Hamburg/SideMenu";


const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <div className="flex gap-2 items-center justify-center">
              <Link href="/">
                <Image src="/album.png" alt="icon" width="50" height="50" />
              </Link>
              <h1 className="text-2xl font-semibold">Saqib App</h1>
              
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <HamburgerMenuButton onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className="flex flex-wrap">
          {(!menuOpen || menuOpen) && (
            <div
              className={`w-full md:w-1/5 md:flex-shrink-0 lg:block ${
                !menuOpen ? "block" : "hidden"
              }`}
            >
              <SideMenu folders={[]} />
            </div>
          )}

          <div className="w-full md:w-4/5 px-4 pt-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
