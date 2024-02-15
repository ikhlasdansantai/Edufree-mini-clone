import Image from "next/image";
import Link from "next/link";
import BlogThumb from "/public/assets/blog__thumb.png";
import clockIcon from "/public/icons/clock__ico.svg";
import playIcon from "/public/icons/play__ico.svg";
import usersIcon from "/public/icons/users__ico.svg";
import { Star } from "lucide-react";

interface DataProps {
  title: string;
  desc: string;
}

export default function CourseCard({ data }: { data: DataProps }) {
  return (
    <Link href={"/kursus/under-development"} key={data.title} className="card rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300">
      <figure className="relative">
        <Image src={BlogThumb} alt="blog thumb" style={{ width: "100%", height: "100%" }} className="block max-w-full" />
        <figcaption className="absolute right-4 -bottom-4 flex items-center bg-[#1C1E53] text-white py-1 px-3 rounded-lg gap-2">
          <Star className="text-[#FCD980] w-4 text-xs" />
          <p className="course__rating text-xs">4.9</p>
        </figcaption>
      </figure>
      <div className="card__main p-4">
        <h2 className="text-2xl font-semibold mt-4 mb-2">{data.title}</h2>
        <p>{data.desc}</p>
        <div className="card__footer text-[#282938] flex items-center justify-between mt-8">
          <figure className="flex items-center gap-2">
            <Image src={clockIcon} alt="clock icon" style={{ width: "100%", height: "100%" }} className="block max-w-4" />
            <figcaption>4,5 Jam</figcaption>
          </figure>
          <figure className="flex items-center gap-2">
            <Image src={playIcon} alt="clock icon" style={{ width: "100%", height: "100%" }} className="block max-w-4" />
            <figcaption>20 Video</figcaption>
          </figure>
          <figure className="flex items-center gap-2">
            <Image src={usersIcon} alt="clock icon" style={{ width: "100%", height: "100%" }} className="block max-w-4" />
            <figcaption>1,900 Siswa</figcaption>
          </figure>
        </div>
      </div>
    </Link>
  );
}
