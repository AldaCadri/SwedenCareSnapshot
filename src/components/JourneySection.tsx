import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Phone, ClipboardCheck, Stethoscope, Activity } from 'lucide-react';

const journeySteps = [
  {
    stage: 'Contact',
    days: 0,
    target: 0,
    percentage: 85,
    icon: Phone,
    color: 'rose',
    description: 'Initial contact with healthcare provider'
  },
  {
    stage: 'Assessment',
    days: 3,
    target: 3,
    percentage: 69,
    icon: ClipboardCheck,
    color: 'orange',
    description: 'Medical assessment and evaluation'
  },
  {
    stage: 'Specialist',
    days: 90,
    target: 90,
    percentage: 78,
    icon: Stethoscope,
    color: 'amber',
    description: 'Specialist consultation'
  },
  {
    stage: 'Treatment',
    days: 90,
    target: 90,
    percentage: 80,
    icon: Activity,
    color: 'emerald',
    description: 'Treatment or operation'
  }
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-3 text-gray-900">
            The Patient Journey
          </h2>
          <p className="text-lg text-gray-600">
            Four critical stages from first contact to treatment
          </p>
          <p className="text-sm text-gray-500 mt-1">
            % of patients meeting each time target
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-orange-200 via-amber-200 to-emerald-200 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {journeySteps.map((step, index) => (
              <JourneyCard
                key={step.stage}
                step={step}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 bg-gradient-to-br from-rose-50 to-blue-50 rounded-3xl p-6 border border-rose-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              💡
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Key Insight</h3>
              <p className="text-sm text-gray-700">
                While 85% of patients achieve immediate contact, only 69% receive assessment within 3 days - 
                the weakest link in the care chain. Specialist consultations and treatments show better performance 
                at 78% and 80% respectively.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyCard({ step, index, isInView }: { step: typeof journeySteps[0]; index: number; isInView: boolean }) {
  const Icon = step.icon;
  const colorClasses = {
    rose: 'from-rose-500 to-rose-700',
    orange: 'from-orange-500 to-orange-700',
    amber: 'from-amber-500 to-amber-700',
    emerald: 'from-emerald-500 to-emerald-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        {/* Circle Progress */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke={`url(#gradient-${index})`}
              strokeWidth="10"
              strokeLinecap="round"
              initial={{ strokeDasharray: "351.68 351.68", strokeDashoffset: 351.68 }}
              animate={isInView ? {
                strokeDashoffset: 351.68 - (351.68 * step.percentage / 100)
              } : {}}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`text-${step.color}-500`} stopColor="currentColor" />
                <stop offset="100%" className={`text-${step.color}-700`} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              className={`w-12 h-12 bg-gradient-to-br ${colorClasses[step.color]} rounded-full flex items-center justify-center mb-1 text-white`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
              className="text-2xl text-gray-900"
            >
              {step.percentage}%
            </motion.div>
          </div>
        </div>

        {/* Stage Info */}
        <div className="text-center">
          <h3 className="text-lg text-gray-900 mb-1">{step.stage}</h3>
          <div className="text-xl text-rose-700 mb-1">
            {step.days} {step.days === 1 ? 'Day' : 'Days'}
          </div>
          <p className="text-xs text-gray-600">{step.description}</p>
        </div>

        {/* Arrow connector for desktop */}
        {index < journeySteps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
            className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-2xl"
          >
            →
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}