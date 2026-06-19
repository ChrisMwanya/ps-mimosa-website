import HeroSection from "@/components/sections/HeroSection";
import JesusSection from "@/components/sections/JesusSection";
import CommunitySection from "@/components/sections/CommunitySection";
import WorshipInfo from "@/components/sections/WorshipInfo";
import SermonsSection from "@/components/sections/SermonsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MinistriesSection from "@/components/sections/MinistriesSection";
import EventsSection from "@/components/sections/EventsSection";
import FinalCall from "@/components/sections/FinalCall";

export default function Home() {
  return (
    <>
      <HeroSection />
      <JesusSection />
      <CommunitySection />
      <WorshipInfo />
      <SermonsSection />
      <TestimonialsSection />
      <MinistriesSection />
      <EventsSection />
      <FinalCall />
    </>
  );
}
