import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 bg-background dark:bg-navy relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(195 100% 59%) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-cyan text-sm font-medium tracking-wider uppercase mb-4">
              Get Started
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy dark:text-white mb-6">
              Ready to Build Your{' '}
              <span className="text-cyan">Fiber Solution?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a custom cable assembly, engineering consultation, or 
              full-scale production, our team is ready to help. Get in touch today 
              for a rapid response.
            </p>

            <motion.a
              href="mailto:info@infinityfiber.com"
              className="btn-primary-cta group inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                label: 'Call Us',
                value: '714.521.4815',
                href: 'tel:714.521.4815',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'sales@infinityfiber.com',
                href: 'mailto:sales@infinityfiber.com',
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                value: '17605 Fabrica Way Suite G Cerritos, CA 90703',
                href: '#',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-cyan/30 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                    <div className="text-navy dark:text-white font-medium">{contact.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
