
import GeometricBackground from '@/components/GeometricBackground';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/section/HomeSection';
import WorkSection from '@/components/section/WorkSection';
import AboutSection from '@/components/section/AboutSection';
import SkillSection from '@/components/section/SkillSection';
import ContactSection from '@/components/section/ContactSection';
import Footer from '@/components/Footer';


export default function GeometricPortfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/*Geometric Background */}
      <GeometricBackground/>
      {/* Navigation */}
      <Navigation/>
      {/* Home Section */}
      <HomeSection/>
      {/* Projects Section */}
      <WorkSection/>
      {/* About Section */}
      <AboutSection/>
      {/* Skills Section */}
      <SkillSection/>
      {/* CTA Section */}
      <ContactSection/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}