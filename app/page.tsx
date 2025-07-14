"use client";

import Image from "next/image";
import WalletGenerator from "@/components/WalletGenerator";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <WalletGenerator/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://zaidejaz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Built by Zaid 
        </a>
      </footer>
    </div>
  );
}
