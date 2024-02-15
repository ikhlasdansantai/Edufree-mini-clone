import CourseCard from "@/components/layouts/course-card";
import { Button } from "@/components/ui/button";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CourseRecommendations() {
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
  ];
  return (
    <section id="course__recommendations" className="max-w-[90rem] mx-auto my-40">
      <div className="course__reco__header flex justify-between items-center">
        <h2 className="text-[#282938] text-4xl w-[20ch] font-semibold leading-relaxed space-y-10">Rekomendasi Kursus Untukmu</h2>
        <div className="right__contents flex gap-4 items-center">
          <Select>
            <SelectTrigger className="w-[180px] outline-none">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Programming</SelectItem>
              <SelectItem value="dark">Astronomy</SelectItem>
              <SelectItem value="system">Fisika Quantum</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="primary" size="lg">
            Lihat Semua
          </Button>
        </div>
      </div>
      <div className="cards grid grid-cols-3 mt-20 gap-20">
        {cardDatas.map((data, index) => (
          <CourseCard data={data} key={index} />
        ))}
      </div>
    </section>
  );
}
