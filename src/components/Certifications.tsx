import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Star, Building2 } from 'lucide-react';

const certifications = [
  {
    name: 'AS9100',
    description: 'Aerospace Quality Management',
    icon: Shield,
  },
  {
    name: 'ITAR',
    description: 'Defense Compliance',
    icon: Award,
  },
  {
    name: 'SDVOSB',
    description: 'Service-Disabled Veteran Owned',
    icon: Star,
  },
  {
    name: 'MBE',
    description: 'Minority Business Enterprise',
    icon: Building2,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-navy" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan text-sm font-medium tracking-wider uppercase mb-4">
            Certifications & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Built to the Highest Standards
          </h2>
          <p className="text-lg text-gray-400">
            Our certifications reflect our unwavering commitment to quality, security, 
            and excellence in everything we manufacture.
          </p>
        </motion.div>

        {/* Certification Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cert-badge group"
              >
                {/* Light sweep effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(195 100% 59% / 0.15), transparent)',
                    animation: 'lightSweep 2s ease-in-out',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy flex items-center justify-center border border-cyan/30 group-hover:border-cyan/60 transition-colors">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional compliance note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All manufacturing processes adhere to strict quality control protocols 
            and are regularly audited for compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
