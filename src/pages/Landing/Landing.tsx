import HeroSection from "./Landingcomponents/HeroSection";
import CallToActions from "./Landingcomponents/CallToActions";
import FeaturesSection from "./Landingcomponents/FeaturesSection";
import LandingFooter from "./Landingcomponents/LandingFooter";

function Landing() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-indigo-700 min-h-screen flex flex-col text-white">
      
      <div className="h-screen">
        {/* Hero Section */}
        <HeroSection></HeroSection>
        {/* Call-to-Actions */}
        <CallToActions></CallToActions>
      </div>

      {/* Features Section */}
      <FeaturesSection></FeaturesSection>

      {/* Footer */}
      <LandingFooter></LandingFooter>
    </div>
  );
}

export default Landing;
