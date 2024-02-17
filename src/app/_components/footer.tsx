"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const EnableNavbar = ["/", "/kursus", "/kursus/under-development"];
  const pathName = usePathname();

  return (
    <footer className={`bg-[#1C1E53] pt-10 ${EnableNavbar.includes(pathName) ? "block" : "hidden"}`}>
      <section id="footer__contents" className="max-w-[90rem] mx-auto flex flex-wrap justify-between items-start text-white relative max-md:p-4">
        <div className="foot__left md:w-[40%] space-y-20">
          <div className="foot__left__top ">
            <h2 className="text-2xl font-semibold mb-3">[EDUFREE]</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis voluptatem quas praesentium, quibusdam iste.</p>
          </div>
          <div className="footer__left__btm text-[#282938] bg-[#FCD980] flex w-[25rem] px-4 py-4 rounded-tl-xl rounded-tr-xl gap-8 overflow-hidden max-md:absolute max-md:bottom-0 max-md:left-0 max-md:right-0">
            <div className="box">
              <h5>Email</h5>
              <p>contact@website.com</p>
            </div>
            <div className="box">
              <h5>Telephone</h5>
              <p>+6288 999 222 333</p>
            </div>
          </div>
        </div>
        <div className="foot__right grid md:grid-cols-3 gap-10 max-sm:my-10">
          <div className="box space-y-2 md:space-y-5">
            <h2 className="text-lg">Social Media</h2>
            <ul className="space-y-3">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="box space-y-2 md:space-y-5">
            <h2 className="text-lg">Program</h2>
            <ul className="space-y-3">
              <li>Merdeka Belajar</li>
              <li>Finterpreneur</li>
            </ul>
          </div>
          <div className="box space-y-2 md:space-y-5">
            <h2 className="text-lg">Dukungan</h2>
            <ul className="space-y-3">
              <li>Tentang Kami</li>
              <li>Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-4 text-[#282938] font-medium">
        <div className="foot__btm max-w-[90rem] mx-auto flex flex-wrap justify-between items-center p-4">
          <p className="font-semibold">© Copyright EDUFREE 2021 - 2022</p>
          <ul className="flex flex-wrap md:justify-between items-center gap-4 mr-10 space-x-4 max-sm:mt-4">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Kursus</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
