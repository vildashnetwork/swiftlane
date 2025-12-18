import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";

const services = [
  { name: "Transportation", path: "/services#transportation" },
  { name: "Warehousing", path: "/services#warehousing" },
  { name: "Customer Solutions", path: "/services#customer-solutions" },
  { name: "Waste Removal", path: "/services#waste-removal" },
  { name: "Packer and Movers", path: "/services#packer-movers" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-corporate-dark text-background py-2 hidden md:block">
        <div className="container-logistics">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Unit 6, Neville, Neville St, Oldham OL9 6LD</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Open 24/7</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+443330497891" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span>+44 333 049 7891</span>
              </a>
              <a href="mailto:info@logisticsnorthwest.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@logisticsnorthwest.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container-logistics">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">LN</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-semibold text-lg text-foreground">Logistics</span>
                <span className="font-heading font-semibold text-lg text-primary"> North West</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                    isActive(link.path) 
                      ? "text-primary bg-primary/5" 
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-1 ${
                    location.pathname === "/services" 
                      ? "text-primary bg-primary/5" 
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  Our Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-background border border-border rounded-md shadow-lg py-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                  isActive("/contact") 
                    ? "text-primary bg-primary/5" 
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden sm:block">
                <Button size="default">
                  Get a Quote
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container-logistics py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 px-3 rounded-md transition-colors ${
                      isActive(link.path)
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Services in Mobile */}
                <div className="py-2 px-3">
                  <span className="font-medium text-foreground">Our Services</span>
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    <Link
                      to="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm text-muted-foreground hover:text-primary py-1"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive("/contact")
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  Contact
                </Link>

                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-3">
                  <Button className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Unit 6, Neville St, Oldham OL9 6LD</span>
                </div>
                <a href="tel:+443330497891" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+44 333 049 7891</span>
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Open 24/7</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;