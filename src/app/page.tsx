import MainLayoout from "@/components/MainLayout";
import AiCharacter from "@/containers/landpage/AiCharacter";
import HeroFemaleCardSection from "@/containers/landpage/herofemaleSection";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayoout>
      <div className="pt-12">
        <HeroFemaleCardSection />
        <AiCharacter />
      </div>
    </MainLayoout>
  );
}
