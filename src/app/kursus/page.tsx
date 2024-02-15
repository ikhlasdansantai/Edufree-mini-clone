import CourseCard from "@/components/layouts/course-card";

export default function KursusPage() {
  const cardDatas = [
    {
      title: "Dasar Pemrograman Web",
      desc: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
    },
    {
      title: "Digital Marketing 101",
      desc: "Materi mengenai strategi dan konsep marketing  pemula",
    },
    {
      title: "Data Science Dasar",
      desc: "Materi pembelajaran mengenai dasar-dasar data science",
    },
    {
      title: "UI/UX Pemula",
      desc: "Dasar-dasar teori dan praktik tentang dunia ui/ux design",
    },
    {
      title: "Bahasa Inggris Dasar",
      desc: "Mudah dalam berbicara dengan bahasa inggris dengan menguasai grammar",
    },
    {
      title: "Teknologi Cocok Tanaman",
      desc: "Teknik penanaman dengan bantuan teknologi yang terbukti",
    },
  ];
  const workCategories = ["Semua", "UI Design", "Programming", "Marketing", "Soft Skill", "Network"];

  return (
    <main className="my-40 min-h-[100dvh]">
      <div className="breadcrump">
        <span>Home Kursus</span>
      </div>

      <section id="main-section" className="max-w-[90rem] mx-auto my-20">
        <div className="main__header w-full mx-auto flex justify-center flex-col items-center gap-10">
          <input type="search" placeholder="Cari Kursus..." className="rounded-md border-2 w-[40rem] py-4 px-4 mx-auto border-[#282938]/60 text-[#282938]" />
          <ul className="flex items-center gap-10 mx-auto font-medium">
            {workCategories.map((category, index) => (
              <li key={index} className={`text-[${category === "Semua" ? "#2405F2" : "#282938"}]`}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="cards grid grid-cols-3 mt-20 gap-20">
          {cardDatas.map((data, index) => (
            <CourseCard data={data} key={index} />
          ))}
        </div>
      </section>

      <section className="box max-w-7xl mx-auto flex justify-center items-center gap-10">
        <span className="cursor-pointer text-4xl p-4 px-6 bg-[#FCD980] text-white">1</span>
        <span className="cursor-pointer text-4xl p-4 px-6 text-[#656565] bg-[#F5F5F5]">2</span>
        <span className="cursor-pointer text-4xl p-4 px-6 text-[#656565] bg-[#F5F5F5]">3</span>
        <span className="cursor-pointer text-4xl p-4 px-6 text-[#656565]">...</span>
        <span className="cursor-pointer text-4xl p-4 px-6 text-[#656565] bg-[#F5F5F5]">8</span>
      </section>
    </main>
  );
}
