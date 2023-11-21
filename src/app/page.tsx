import Image from "next/image";
import Header from "../components/ui/Header";
import MainSection from "@/components/ui/MainSection";

export default function Home() {
  return (
    <div className="bg-image-1 flex h-screen flex-col">
      <Header />
      <MainSection />
    </div>
  );
}
