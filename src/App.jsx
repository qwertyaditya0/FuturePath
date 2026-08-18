import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import Services from "./components/Services";
import CollegePredictor from "./components/CollegePredictor";
import Counseling from "./components/Counseling";
import CollegeFinder from "./components/CollegeFinder";
import ScholarshipFinder from "./components/ScholarshipFinder";
import CollegeComparison from "./components/CollegeComparison";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";
import LeadPopup from "./components/LeadPopup";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <CollegePredictor />
      <Counseling />
      <CollegeFinder />
      <ScholarshipFinder />
      <CollegeComparison />
      <Testimonials />
      
      <WhatsAppButton />
      <Chatbot />
      <LeadPopup />
    </>
  );
}

export default App;