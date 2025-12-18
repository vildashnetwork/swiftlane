import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Transportation",
    "Warehousing",
    "Customer Solutions",
    "Waste Removal",
    "Packer and Movers",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const policies = [
    { name: "Terms and Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-corporate-dark text-background">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container-logistics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">LN</span>
                </div>
                <span className="font-heading font-semibold text-lg">Logistics North West</span>
              </div>
              <p className="text-background/70 mb-6 text-sm leading-relaxed">
                Your trusted partner for comprehensive logistics solutions across the North West region. Available 24/7.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-base mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-base mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-background/70">Unit 6, Neville, Neville St, Oldham OL9 6LD</span>
                </li>
                <li>
                  <a href="tel:+443330497891" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    +44 333 049 7891
                  </a>
                </li>
                <li>
                  <a href="tel:+447441357041" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    +44 7441 357041
                  </a>
                </li>
                <li>
                  <a href="mailto:info@logisticsnorthwest.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    info@logisticsnorthwest.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-background/70">Mon–Sun: Open 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-5">
        <div className="container-logistics">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Logistics North West. All rights reserved.
            </p>
            <div className="flex gap-6">
              {policies.map((policy) => (
                <Link
                  key={policy.name}
                  to={policy.path}
                  className="text-background/60 text-sm hover:text-primary transition-colors"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;