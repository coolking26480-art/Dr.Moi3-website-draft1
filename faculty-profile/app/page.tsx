import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AcademicQualifications } from "@/components/AcademicQualifications";
import { WorkExperience } from "@/components/WorkExperience";
import { ResearchPublications } from "@/components/ResearchPublications";
import { Conferences } from "@/components/Conferences";
import { Awards } from "@/components/Awards";
import { InvitedTalks } from "@/components/InvitedTalks";
import { ImageGallery } from "@/components/ImageGallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navigation />
      <HeroSection />
      <AcademicQualifications />
      <WorkExperience />
      <ResearchPublications />
      <Conferences />
      <Awards />
      <InvitedTalks />
      <ImageGallery />
      <Footer />
    </main>
  );
}
