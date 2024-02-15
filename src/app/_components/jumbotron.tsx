import { Button } from "@/components/ui/button";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="mt-40 text-center text-[#282938]">
      <h2 className="text-5xl text-center leading-relaxed w-[26ch] mx-auto font-semibold ">Jangan Lewatkan Kesempatan Mari Ciptakan Sesuatu!</h2>
      <p>Yu akses kelas gratisnya, dengan cara klik button dibawah ini</p>
      <Button variant="primary" className="mt-10 text-2xl py-8 px-40 tracking-widest font-semibold uppercase">
        ikuti kursus
      </Button>
    </section>
  );
}
