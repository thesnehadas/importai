import { HeroSection } from "@/components/home/HeroSection";
import { ValueStrip } from "@/components/home/ValueStrip";
import { WhatWeAutomate } from "@/components/home/WhatWeAutomate";
import { DemoGallery } from "@/components/home/DemoGallery";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueStrip />
      <WhatWeAutomate />
      <DemoGallery />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Index;
