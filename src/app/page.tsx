import ServiceSection from "@/components/ui/ServiceSection";
import Header from "../components/ui/Header";
import MainSection from "@/components/ui/MainSection";

export default function Home() {
  return (
    <div className="bg-image-1 flex flex-col">
      <Header />
      <MainSection />
      <ServiceSection />
    </div>
  );
}
