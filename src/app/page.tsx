import ServiceSection from "@/components/ui/ServiceSection";
import Header from "../components/ui/Header";
import MainSection from "@/components/ui/MainSection";
import AboutSection from "@/components/ui/AboutSection";
import QuestionSection from "@/components/ui/QuestionSection";

export default function Home() {
  return (
    <div className="bg-image-1 flex flex-col">
      <Header />
      <MainSection />
      <ServiceSection />
      <AboutSection />
      <QuestionSection />
    </div>
  );
}
