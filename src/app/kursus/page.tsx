import CourseCard from "@/components/layouts/course-card";
import DummyPagination from "@/components/layouts/dummy-pagination";

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
    <main className="mt-[7.1rem] mb-40 min-h-[100dvh] max-sm:p-4">
      <section className="breadcrumb bg-[#EEF4FA] px-4 py-10 md:p-10">
        <span className="max-w-[90rem] mx-auto block text-base">Home {">"} Kursus</span>
      </section>

      <section id="main-section" className="max-w-[90rem] mx-auto my-10 md:my-20">
        <div className="main__header w-full mx-auto flex justify-center flex-col items-center gap-10">
          <input type="search" placeholder="Cari Kursus..." className="w-full rounded-md border-2 lg:w-[40rem] py-4 px-4 mx-auto border-[#282938]/60 text-[#282938]" />
          <ul className="flex items-center gap-x-10 gap-y-4 mx-auto font-medium flex-wrap">
            {workCategories.map((category, index) => (
              <li key={index} className={`${category === "Semua" ? "text-[#2405F2]" : "text-[#282938]"}`}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-20">
          {cardDatas.map((data, index) => (
            <CourseCard data={data} key={index} />
          ))}
        </div>
      </section>

      <section className="box max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-10">
        <DummyPagination />
      </section>
    </main>
  );
}
