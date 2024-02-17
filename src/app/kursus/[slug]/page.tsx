import Image from "next/image";
import BlogMedium from "/public/assets/blog__medium.png";
import BlogMainImg from "/public/assets/blog__main__img.png";
import { Button } from "@/components/ui/button";
import Jumbotron from "@/app/_components/jumbotron";

export default function CourseDetail() {
  return (
    <main className="md:mb-40 mt-[7.1rem] text-xl min-h-[100dvh]">
      <section className="breadcrumb bg-[#EEF4FA] px-4 py-10 md:p-10">
        <span className="max-w-[90rem] mx-auto block text-base">
          Home {">"} Kursus {">"} Detail kursus
        </span>
      </section>

      <section className="max-w-[90rem] mt-10 md:mt-20 mx-auto max-sm:p-4">
        <p className="text-[#282938] text-base">web design dan development</p>
        <h1 className="text-[#282938] font-semibold text-2xl md:text-4xl my-1 md:my-4">Dasar Pemrograman Web</h1>
        <p className="text-[#282938] text-base md:text-xl ">Mengenal hal-hal dasar pembuatan website</p>

        <figure className=" mx-auto my-6 md:my-10 ">
          <Image src={BlogMainImg} alt="blog thumb" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
        </figure>

        <div className="blog__contents space-y-4 md:space-y-8 text-[#282938] max-w-5xl mx-auto mt-10 md:mt-20 text-base">
          <h2 className="font-semibold text-2xl">Tentang Kursus</h2>
          <p>
            Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya
            disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena bagaimanapun adalah layanan internet paling populer saat ini.
          </p>

          <p>Dalam kursus ini kamu akan diajarkan cara mebuat web dengan standar industri. Disini kamu akan diajarkan tentang Html, Css dan Javascript yang merupakan pondasi dasar dalam pembuatan website</p>

          <p>Manfaat belajar pemograman website adalah ;</p>
          <ol type="1">
            <li>Mampu menjalankan bisnis aplikasi dan software</li>
            <li>Dapat membangun website sendiri</li>
            <li>Menunjang karir</li>
          </ol>

          <figure className="mx-auto">
            <Image src={BlogMedium} alt="blog thumb" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
          </figure>

          <h2 className="font-semibold text-2xl">Target dan Sasaran Siswa</h2>
          <ol type="1">
            <li>Kelas ditujukan untuk siswa dengan rasa keingin tahuan tinggi dalam bidang pemrograman website</li>
            <li>Kelas ini memberikan sertifikat ketika siswa bisa menyelesaikan setiap kursus yang ia pelajari</li>
            <li>Diharapkan siswa bisa menyelesaikan semua tugas yang telah diberikan di akhir kursus</li>
            <li>Kelas ini didesain untuk pemula sehingga tidak ada prasyarat dalam pemahaman pemrograman sebelumnya.</li>
          </ol>
        </div>

        <Jumbotron />
      </section>
    </main>
  );
}
