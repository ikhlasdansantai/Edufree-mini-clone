import HeaderContent from "@/app/_components/header";
import Benefits from "@/app/_components/benefits";
import AboutUs from "@/app/_components/about-us";
import CourseRecommendations from "@/app/_components/course-recommendations";

export default function Home() {
  return (
    <main>
      <HeaderContent />
      <Benefits />
      <AboutUs />
      <CourseRecommendations />
    </main>
  );
}
