import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle, AlertCircle, Target } from 'lucide-react';

export function ConclusionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl mb-3 text-gray-900">
            The Verdict
          </h2>
          <p className="text-lg text-gray-600">
            Are Swedes getting care on time? The answer is nuanced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
          >
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Strengths</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 85% immediate contact rate</li>
              <li>• Strong treatment-phase performance (80%)</li>
              <li>• Several regions achieve +85% compliance</li>
              <li>• Overcrowding shows improvement vs last year</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
          >
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Challenges</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 69% assessment compliance</li>
              <li>• Low bed capacity (1.92/1000)</li>
              <li>• Regional disparities</li>
              <li>• Younger women experience the longest waiting times</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Opportunities</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Improve 3-day assessment compliance</li>
              <li>• Increase hospital bed availability</li>
              <li>• Reduce variation through shared best practices</li>
              <li>• Target interventions for younger women facing longer waits</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-rose-700 to-rose-900 rounded-3xl p-8 text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl mb-3">Overall Assessment</h3>
          <p className="text-base mb-5 leading-relaxed opacity-90">
            Sweden's healthcare system shows <span className="underline decoration-2">strong performance</span> in 
            initial contact and treatment phases, but faces challenges in assessment timing and 
            regional equity. With 78% average compliance across all stages, there's room for 
            improvement to ensure all Swedes receive timely care.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2">
            <div className="text-3xl">78%</div>
            <div className="text-left text-sm">
              <div>Overall</div>
              <div>Compliance</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          <div className="mb-2">2025 Snapshot</div>
          <div>Data represents aggregate performance across Sweden's 21 healthcare regions</div>
        </motion.div>
      </div>
    </section>
  );
}