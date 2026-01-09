import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

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
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-logistics text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote. Our team is available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-heading font-semibold hover:bg-muted transition-all duration-300 hover:scale-105"
            >
              Get a Quote! <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+1 719-629-5764"
              className="inline-flex items-center gap-2 text-primary-foreground font-heading font-semibold hover:underline"
            >
              <Phone className="h-5 w-5" />
              +1 719-629-5764
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-logistics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold">SL</span>
                </div>
                <span className="font-heading font-bold text-xl">SwiftLane Logistics</span>
              </div>
              <p className="text-background/70 mb-6 leading-relaxed">
                Your trusted partner for comprehensive logistics solutions across the North West region. Available 24/7.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">

                {/* <li>
                  <a href="tel:+1 719-629-5764" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    +1 719-629-5764
                  </a>
                </li> */}
            
                <li>
                  <a href="mailto:swiftlanelogisticsagency@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                 swiftlanelogisticsagency@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-background/70">Mon–Sun: Open 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container-logistics">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} SwiftLane Logistics. All rights reserved.
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
