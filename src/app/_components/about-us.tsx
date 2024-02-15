import Image from "next/image";
import AboutUsImg from "/public/assets/about-us.png";

export default function AboutUs() {
  return (
    <section className="max-w-[90rem] mx-auto grid grid-cols-2 items-center gap-10 my-40">
      <div className="titles">
        <span className="text-[#232536]">Tentang Kami</span>
        <h2 className="text-[#282938] text-4xl w-[27ch] font-semibold leading-relaxed space-y-10">EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h2>
        <p className="w-[60ch] text-[#282938]">Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
      </div>
      <figure>
        <Image src={AboutUsImg} alt="benefit icon" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
      </figure>
    </section>
  );
}
