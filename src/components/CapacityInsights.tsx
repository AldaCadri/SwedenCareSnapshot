import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Bed, TrendingDown, TrendingUp, Clock } from 'lucide-react';

const metrics = [
  {
    label: 'Doctors per 1000',
    value: 3.47,
    trend: 'up',
    icon: Users,
    color: 'emerald',
    description: 'Increased from last year'
  },
  {
    label: 'Beds per 1000',
    value: 1.92,
    trend: 'down',
    icon: Bed,
    color: 'rose',
    description: 'Decreased from last year'
  },
  {
    label: 'Overcrowding rate',
    value: 1.43,
    trend: 'down',
    icon: TrendingDown,
    color: 'emerald',
    description: 'Improving vs last year'
  },
  {
    label: 'ED wait time (avg)',
    value: '58.57 min',
    trend: 'up',
    icon: Clock,
    color: 'rose',
    description: 'Increased from last year'
  }
];

export function CapacityInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
    >
      <h3 className="text-2xl text-gray-900 mb-2">
        Capacity Snapshot
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Key healthcare infrastructure metrics
      </p>

      <div className="space-y-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          const trendColor = 
            (metric.trend === 'up' && metric.color === 'emerald') || 
            (metric.trend === 'down' && metric.color === 'emerald')
              ? 'text-emerald-600'
              : 'text-rose-600';

          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${
                    metric.color === 'emerald' 
                      ? 'from-emerald-500 to-emerald-700' 
                      : 'from-rose-500 to-rose-700'
                  } rounded-full flex items-center justify-center text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                    <div className="text-xl text-gray-900">{metric.value}</div>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className={`${trendColor}`}
                >
                  <TrendIcon className="w-6 h-6" />
                </motion.div>
              </div>
              <p className="text-xs text-gray-600">{metric.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200"
      >
        <h4 className="text-sm text-gray-900 mb-2">Analysis</h4>
        <p className="text-xs text-gray-700">
          Physician availability improved year-over-year, but hospital bed capacity declined. 
          ED waiting times have increased to 58.57 minutes, indicating growing pressure on 
          emergency services despite improving overcrowding metrics.
        </p>
      </motion.div>
    </motion.div>
  );
}