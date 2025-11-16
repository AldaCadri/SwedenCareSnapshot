import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { RegionalPerformance } from './components/RegionalPerformance';
import { CapacityInsights } from './components/CapacityInsights';
import { DemographicBreakdown } from './components/DemographicBreakdown';
import { ConclusionSection } from './components/ConclusionSection';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50">
      {/* Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <HeroSection opacity={opacity} />

      {/* Journey Section */}
      <JourneySection />

      {/* Regional Performance */}
      <RegionalPerformance />

      {/* Capacity & Demographics */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <CapacityInsights />
          <DemographicBreakdown />
        </div>
      </div>

      {/* Conclusion */}
      <ConclusionSection />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-rose-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-rose-700 transition-colors z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
    </div>
  );
}