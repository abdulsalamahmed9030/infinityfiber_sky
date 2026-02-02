import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-fiber.jpg';

const trustBadges = [
  'AS9100 Certified',
  'ITAR Compliant',
  'SDVOSB / MBE',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        
        {/* Animated light particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left Content - 60% */}
          <motion.div 
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Industry tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-sm text-gray-300">Mission-Critical Fiber Solutions</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6">
              Precision Fiber Optic{' '}
              <span className="relative">
                Cable Assemblies
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-cyan rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto lg:mx-0">
              Built for Mission-Critical Systems
            </p>

            <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Aerospace • Defense • Telecom • Medical<br />
              <span className="text-cyan font-medium">Made in the USA.</span> Engineered to Perform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href="#contact"
                className="btn-primary-cta group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary text-white border-white/30 hover:bg-white hover:text-navy"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Capabilities
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {trustBadges.map((badge, index) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                  <span className="text-sm text-gray-400">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - 40% */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan/20 blur-3xl animate-pulse-glow" />
              
              {/* Stats cards */}
              <div className="relative space-y-4">
                <motion.div
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(195 100% 59% / 0.3)' }}
                >
                  <div className="text-4xl font-semibold text-white mb-1">20+</div>
                  <div className="text-sm text-gray-400">Years of Precision Engineering</div>
                </motion.div>
                
                <motion.div
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 ml-8"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(195 100% 59% / 0.3)' }}
                >
                  <div className="text-4xl font-semibold text-cyan mb-1">100%</div>
                  <div className="text-sm text-gray-400">Made in USA</div>
                </motion.div>
                
                <motion.div
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(195 100% 59% / 0.3)' }}
                >
                  <div className="text-4xl font-semibold text-white mb-1">6</div>
                  <div className="text-sm text-gray-400">Critical Industries Served</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-cyan" />
        </div>
      </motion.div>
    </section>
  );
}
