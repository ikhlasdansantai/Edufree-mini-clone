import { Button } from "@/components/ui/button";
import HeaderIcon from "/public/header__icon.svg";
import HeaderFootIcon1 from "/public/icons/header__ico__1.png";
import HeaderFootIcon2 from "/public/icons/header__ico__2.png";
import HeaderFootIcon3 from "/public/icons/header__ico__3.png";
import HeaderFootIcon4 from "/public/icons/header__ico__4.png";
import HeaderFootIcon5 from "/public/icons/header__ico__5.png";
import Image from "next/image";

function HeaderContentFooter() {
  return (
    <section className="bg-[#EEF4FA] min-h-[20dvh] flex justify-center items-center">
      <div className="max-w-[90rem] flex justify-between items-end w-full">
        <ul className="flex gap-10">
          <li>
            <p className="text-3xl font-semibold text-[#282938]">21.000+</p>
            <p>Siswa Terdaftar</p>
          </li>
          <li>
            <p className="text-3xl font-semibold text-[#282938]">100+</p>
            <p>Instruktur Ahli</p>
          </li>
          <li>
            <p className="text-3xl font-semibold text-[#282938]">150+</p>
            <p>Kursus Terfagtar</p>
          </li>
        </ul>

        <ul className="flex flex-wrap items-center gap-10">
          <li>
            <figure className="w-[8rem]">
              <Image src={HeaderFootIcon1} alt="header__ico__1" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
            </figure>
          </li>
          <li>
            <figure className="w-[8rem]">
              <Image src={HeaderFootIcon2} alt="header__ico__1" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
            </figure>
          </li>
          <li>
            <figure className="w-[8rem]">
              <Image src={HeaderFootIcon3} alt="header__ico__1" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
            </figure>
          </li>
          <li>
            <figure className="w-[8rem]">
              <Image src={HeaderFootIcon4} alt="header__ico__1" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
            </figure>
          </li>
          <li>
            <figure className="w-[8rem]">
              <Image src={HeaderFootIcon5} alt="header__ico__1" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function HeaderContent() {
  return (
    <>
      <section id="header__container" className="bg-[#1C1E53] min-h-[80dvh] flex items-center justify-center">
        <div className="header__contents max-w-[90rem] mx-auto grid grid-cols-2 items-center gap-20">
          <div className="header__titles text-white">
            <h1 className="w-[25ch] text-5xl leading-relaxed font-semibold">Bangun dan Wujudkan Cita Bersama EDUFREE</h1>
            <p className=" leading-loose my-10">EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>
            <div className="buttons space-x-8">
              <Button variant="primary" size="lg">
                Lihat Kursus
              </Button>
              <Button variant="ghost" size="lg">
                Lihat Alur Belajar
              </Button>
            </div>
          </div>
          <figure>
            <Image src={HeaderIcon} alt="Programming icon" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
          </figure>
        </div>
      </section>
      <HeaderContentFooter />
    </>
  );
}
