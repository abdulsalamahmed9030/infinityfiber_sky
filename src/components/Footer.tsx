import { Shield, Award, Star, Building2 } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Cable Assemblies", href: "#services" },
    { name: "Defense Systems", href: "#services" },
    { name: "Custom Engineering", href: "#services" },
    { name: "Rapid Prototyping", href: "#services" },
  ],
  industries: [
    { name: "Aerospace", href: "#industries" },
    { name: "Defense", href: "#industries" },
    { name: "Telecom", href: "#industries" },
    { name: "Medical", href: "#industries" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "ITAR Compliance", href: "#" },
  ],
};

const certBadges = [
  { name: "AS9100", icon: Shield },
  { name: "ITAR", icon: Award },
  { name: "SDVOSB", icon: Star },
  { name: "MBE", icon: Building2 },
];

export default function Footer() {
  return (
    <footer className="bg-[#62d1f6] tech-grid-bg">
      <div className="section-container pt-6 pb-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/infinity-fiber-logo.png"
                alt="Infinity Fiber – Precision Fiber Optics"
                className="h-10 w-auto"
              />
            </a>

            <p className="text-black text-sm mb-6 max-w-sm">
              Precision fiber optic cable assemblies for aerospace, defense,
              telecom, and critical infrastructure. Made in the USA.
            </p>

            {/* Certification badges */}
            <div className="flex gap-3">
              {certBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.name}
                    className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center border border-black/10 group hover:border-cyan/30 transition-colors"
                    title={badge.name}
                  >
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-cyan transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-black text-sm hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-black text-sm hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-black text-sm hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm">
              © {new Date().getFullYear()} Infinity Fiber. All rights reserved.
            </p>

            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black text-sm hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
