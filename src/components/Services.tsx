import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import serviceAssemblies from '@/assets/service-assemblies.jpg';
import serviceMilitary from '@/assets/service-military.jpg';
import serviceEngineering from '@/assets/service-engineering.jpg';

const services = [
  {
    title: 'Precision Fiber Cable Assemblies',
    description: 'Custom-built fiber optic cable assemblies engineered to your exact specifications. From single-mode to multi-mode, simplex to complex multi-fiber configurations.',
    image: serviceAssemblies,
    accent: 'cyan',
  },
  {
    title: 'Military & Defense Fiber Systems',
    description: 'Ruggedized fiber optic solutions built to MIL-SPEC standards. ITAR compliant manufacturing for classified and mission-critical defense applications.',
    image: serviceMilitary,
    accent: 'red',
  },
  {
    title: 'Custom Cable Engineering & Design',
    description: 'Full-service engineering support from concept to production. Our team works with you to design optimized fiber solutions for your unique requirements.',
    image: serviceEngineering,
    accent: 'cyan',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-background dark:bg-navy" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cyan text-sm font-medium tracking-wider uppercase mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy dark:text-white mb-6">
            Comprehensive Fiber Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From rapid prototyping to full-scale production, we deliver precision fiber optic 
            solutions for the world's most demanding applications.
          </p>
        </motion.div>

        {/* Services - Alternating Layout */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative group ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Accent border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${
                      service.accent === 'red' ? 'bg-signal-red' : 'bg-cyan'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`w-12 h-1 mb-6 ${
                    service.accent === 'red' ? 'bg-signal-red' : 'bg-cyan'
                  }`} />
                  
                  <h3 className="text-2xl md:text-3xl font-semibold text-navy dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-cyan font-medium hover:gap-3 transition-all underline-animate"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-32"
        >
          <h3 className="text-2xl font-semibold text-navy dark:text-white text-center mb-12">
            Additional Capabilities
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Extreme Environment Solutions',
                description: 'Fiber systems rated for extreme temperatures, radiation, and harsh conditions.',
              },
              {
                title: 'Fiber Optic Consulting',
                description: 'Expert guidance on fiber selection, network design, and system validation.',
              },
              {
                title: 'Rapid Prototyping',
                description: 'Quick-turn prototypes and low-volume builds for R&D and testing.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-xl border border-border hover:border-cyan/30 bg-card transition-all duration-300 card-hover"
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-1 bg-cyan mb-4 group-hover:w-16 transition-all duration-300" />
                <h4 className="text-lg font-semibold text-navy dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
