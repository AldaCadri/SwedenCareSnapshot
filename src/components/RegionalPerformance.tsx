import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import swedenMap from 'figma:asset/a71db013eb07ccce1b61036a106b73f986f3fe18.png';

const regions = [
  { name: 'Stockholm', percentage: 91.3, rank: 1 },
  { name: 'Gotland', percentage: 90.5, rank: 2 },
  { name: 'Jönköping', percentage: 87.9, rank: 3 },
  { name: 'Kronoberg', percentage: 84.1, rank: 4 },
  { name: 'Halland', percentage: 77.5, rank: 5 }
];

export function RegionalPerformance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-b from-transparent via-white to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-3 text-gray-900">
            Regional Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Performance varies significantly across Sweden's 21 regions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl text-gray-900 mb-4 text-center">
                Healthcare Access Nationwide
              </h3>
              <div className="relative flex-1 flex items-center justify-center">
                <img 
                  src={swedenMap} 
                  alt="Sweden regions map" 
                  className="w-full h-auto max-h-[380px] object-contain"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm shadow-lg"
                >
                  21 Regions
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-4 p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
              >
                <p className="text-xs text-gray-700">
                  Southern and central regions show stronger performance, with 4 of the top 5 
                  performers located in Sweden's southern half.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Top Performers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-6 shadow-2xl border border-rose-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl text-gray-900">
                  Top Performing Regions
                </h3>
              </div>

              <div className="space-y-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                          index === 0 
                            ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {region.rank}
                        </div>
                        <span className="text-gray-700">{region.name}</span>
                      </div>
                      <span className="text-lg text-gray-900">
                        {region.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${region.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          index === 0
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-700'
                            : index === 1
                            ? 'bg-gradient-to-r from-emerald-400 to-emerald-600'
                            : 'bg-gradient-to-r from-blue-400 to-blue-600'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-6 p-4 bg-white rounded-xl border border-emerald-100"
              >
                <p className="text-sm text-gray-600">
                  <span className="text-emerald-700">Stockholm</span> leads with 91.3% 
                  of patients meeting care targets, while the national average sits at around 78%.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}