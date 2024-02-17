import { Button } from "@/components/ui/button";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="mt-20 md:mt-40 text-center text-[#282938]">
      <h2 className="text-2xl lg:text-5xl text-center leading-relaxed lg:w-[26ch] mx-auto font-semibold ">Jangan Lewatkan Kesempatan Mari Ciptakan Sesuatu!</h2>
      <p className="text-base max-sm:mt-4">Yu akses kelas gratisnya, dengan cara klik button dibawah ini</p>
      <Button variant="primary" className="mt-4 max-sm:mb-10 md:mt-10 w-full md:text-2xl py-8 md:px-40 tracking-widest font-semibold uppercase">
        ikuti kursus
      </Button>
    </section>
  );
}
