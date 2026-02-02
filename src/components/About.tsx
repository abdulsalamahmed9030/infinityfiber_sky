import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImage from '@/assets/about-facility.jpg';

const features = [
  'Over two decades of fiber optic engineering expertise',
  'Custom cable assemblies for mission-critical environments',
  'Designed, tested, and built to aerospace and defense standards',
  'From prototype to full-scale production',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-light-gray dark:bg-navy-light" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Infinity Fiber manufacturing facility"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-cyan/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-cyan text-sm font-medium tracking-wider uppercase mb-4">
              About Infinity Fiber
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy dark:text-white leading-tight mb-6">
              Engineered in the USA.{' '}
              <span className="text-cyan">Trusted Worldwide.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Infinity Fiber is a premier manufacturer of precision fiber optic cable assemblies, 
              serving the world's most demanding industries. Our commitment to quality, innovation, 
              and American manufacturing sets us apart.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-navy dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              className="btn-secondary inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
