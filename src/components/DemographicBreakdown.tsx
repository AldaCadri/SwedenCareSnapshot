import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const waitingTimeData = [
  { age: '19-34', women: 68.44, men: 61.48, highlight: true },
  { age: '35-49', women: 67.65, men: 61.87, highlight: true },
  { age: '50-64', women: 63.89, men: 58.98, highlight: false },
  { age: '65-79', women: 58.94, men: 55.73, highlight: false },
  { age: '80+', women: 52.32, men: 51.58, highlight: false }
];

export function DemographicBreakdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const maxValue = 75; // For scaling the bars

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
    >
      <h3 className="text-2xl text-gray-900 mb-2">
        ED Waiting Times
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Average waiting time by gender and age group (minutes)
      </p>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-2.5 bg-gradient-to-r from-rose-400 to-rose-600 rounded-sm"></div>
          <span className="text-xs text-gray-700">Women</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-2.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-sm"></div>
          <span className="text-xs text-gray-700">Men</span>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="space-y-3 mb-4">
        {waitingTimeData.map((item, index) => (
          <motion.div
            key={item.age}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className={`p-3 rounded-xl border ${
              item.highlight 
                ? 'border-amber-300 bg-gradient-to-br from-amber-50/50 to-orange-50/50 shadow-md shadow-amber-100' 
                : 'border-gray-100 bg-gray-50/50'
            }`}
          >
            {/* Age Group Label */}
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-900 min-w-[50px]">
                {item.age}
              </div>
              {item.highlight && (
                <div className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full">
                  Longest waits
                </div>
              )}
            </div>

            {/* Women Bar */}
            <div className="mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-600 w-12">Women</span>
                <div className="flex-1 relative h-5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(item.women / maxValue) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-end pr-2"
                  >
                    <span className="text-white text-[10px] font-medium drop-shadow">{item.women}</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Men Bar */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-600 w-12">Men</span>
                <div className="flex-1 relative h-5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(item.men / maxValue) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-end pr-2"
                  >
                    <span className="text-white text-[10px] font-medium drop-shadow">{item.men}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Insights */}
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-3 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl border border-rose-200"
        >
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <AlertTriangle className="w-3 h-3" />
            </div>
            <div>
              <h4 className="text-xs text-gray-900 mb-1">Younger Women Face Longest Waits</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                <span className="text-rose-700">Women aged 19-34</span> experience the longest ED waits at <span className="text-rose-700">68.44 minutes</span>, 
                nearly 7 minutes longer than men in the same age group. Women aged 35-49 also face extended waits at 67.65 minutes.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
        >
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              📊
            </div>
            <div>
              <h4 className="text-xs text-gray-900 mb-1">Consistent Gender Gap</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                Women wait longer than men across all age groups. The gender gap is most pronounced among younger patients, 
                with waiting times decreasing progressively with age for both genders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}