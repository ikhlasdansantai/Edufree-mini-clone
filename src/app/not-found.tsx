import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[100dvh]">
      <h1 className="text-[9rem] text-[#FCD980]">
        4<span className="text-[#232536] font-bold">0</span>4
      </h1>
      <h2 className="text-3xl font-semibold text-[#232536]">Upss... Halaman Tidak Ditemukan</h2>
      <p className="text-[#535353] w-[50ch] my-4">Mohon maaf, halaman yang anda buka tidak ditemukan Pastikan url yang anda masukkan benar</p>
      <Button variant={"primary"} size="lg" asChild className="inline-flex mt-4">
        <Link href="/">HomePage</Link>
      </Button>
    </main>
  );
}
