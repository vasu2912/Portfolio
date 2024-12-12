import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechnicalSkills from "@/components/TechnicalSkills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF]">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-0">
        <Header />
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
      </main>
      <Footer />
    </div>
  );
}
