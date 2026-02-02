import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import industryAerospace from '@/assets/industry-aerospace.jpg';
import industryDefense from '@/assets/industry-defense.jpg';
import industryTelecom from '@/assets/industry-telecom.jpg';
import industryMedical from '@/assets/industry-medical.jpg';
import industryAutomation from '@/assets/industry-automation.jpg';
import industryResearch from '@/assets/industry-research.jpg';

const industries = [
  {
    name: 'Aerospace',
    description: 'Mission-critical fiber systems for aircraft, satellites, and space applications.',
    image: industryAerospace,
  },
  {
    name: 'Defense',
    description: 'ITAR-compliant solutions for military and defense systems.',
    image: industryDefense,
  },
  {
    name: 'Telecom',
    description: 'High-bandwidth fiber assemblies for telecommunications infrastructure.',
    image: industryTelecom,
  },
  {
    name: 'Medical',
    description: 'Precision fiber optics for medical devices and diagnostic equipment.',
    image: industryMedical,
  },
  {
    name: 'Automation',
    description: 'Industrial fiber solutions for manufacturing and robotics.',
    image: industryAutomation,
  },
  {
    name: 'Research Labs',
    description: 'Specialized fiber systems for scientific research and development.',
    image: industryResearch,
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="py-20 md:py-32 bg-light-gray dark:bg-navy-light" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan text-sm font-medium tracking-wider uppercase mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy dark:text-white mb-6">
            Trusted Across Critical Sectors
          </h2>
          <p className="text-lg text-muted-foreground">
            From the depths of the ocean to the edge of space, Infinity Fiber delivers 
            precision solutions where performance is non-negotiable.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20 group-hover:via-navy/40 group-hover:to-transparent transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  className="w-8 h-0.5 bg-cyan mb-3 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {industry.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/30 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
