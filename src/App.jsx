import React from 'react';
import Hero from './components/Hero';
import PreSaleBenefits from './components/PreSaleBenefits';
import UnitSlideshow from './components/UnitSlideshow';
import MediaSection from './components/MediaSection';
import LeadCaptureForm from './components/LeadCaptureForm';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-['Open_Sans']">
      <Hero />
      <PreSaleBenefits />
      <UnitSlideshow />
      <MediaSection />
      <LeadCaptureForm />
      <WhatsAppButton />
    </div>
  );
}

export default App;