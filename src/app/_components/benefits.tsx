import Image from "next/image";
import BenefitIcon from "/public/icons/benefit__icon.png";

export default function Benefits() {
  const cardDatas = [
    {
      title: "Kursus Gratis",
      desc: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Akses Selamanya",
      desc: "Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru",
    },
    {
      title: "Group Konsultasi",
      desc: "Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru",
    },
    {
      title: "Sertifikat dan Portfolio",
      desc: "Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan",
    },
    {
      title: "Belajar Terarah",
      desc: "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan",
    },
    {
      title: "Instruktur Berpengalaman",
      desc: "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya",
    },
  ];

  return (
    <section id="benefits" className="max-w-[90rem] mx-auto my-20 md:my-40">
      <h2 className="text-center text-[#282938] text-2xl md:text-4xl lg:w-[27ch] mx-auto font-semibold leading-relaxed">Keuntungan Bergabung Dengan E-Learning EDUFREE</h2>
      <div className="benefit__cards mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {cardDatas.map((data, index) => (
          <div key={data.title} className="benefit__card bg-[#F4F6FC] text-[#282938] p-8 rounded-lg">
            <figure className="w-8 relative">
              <Image src={BenefitIcon} alt="benefit icon" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
              <figcaption className="absolute left-0 right-40 bottom-0 top-1 font-semibold text-white translate-x-4">{index + 1}</figcaption>
            </figure>
            <h5 className="text-xl mt-6 mb-3 font-semibold">{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
