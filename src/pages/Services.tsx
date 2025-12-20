import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Warehouse, Users, Trash2, PackageCheck, Phone, Mail } from "lucide-react";
const servicesHeroImage = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766240919/trash_reports/asij5ti81p1xowsm3hz5.jpg";

const services = [
  {
    id: "transportation",
    icon: Truck,
    title: "Transportation",
    shortDescription: "Reliable freight and delivery services across the region",
    description: "Our transportation services cover everything from local deliveries in Greater Manchester to regional distribution across the North West. With a modern fleet and experienced drivers, we ensure your goods arrive safely and on time. Whether you need same-day delivery, scheduled runs, or full-load transport, we've got you covered.",
    features: [
      "Local and regional delivery",
      "Same-day and next-day options",
      "Full-load and part-load services",
      "Real-time tracking",
      "Temperature-controlled options",
    ],
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    shortDescription: "Secure storage solutions with inventory management",
    description: "Our secure warehousing facilities provide flexible storage solutions for businesses of all sizes. From short-term storage during busy periods to long-term inventory management, we offer the space and systems you need to keep your supply chain running smoothly.",
    features: [
      "Secure, monitored facilities",
      "Inventory management systems",
      "Pick and pack services",
      "Cross-docking available",
      "Flexible contract terms",
    ],
  },
  {
    id: "customer-solutions",
    icon: Users,
    title: "Customer Solutions",
    shortDescription: "Tailored logistics strategies for your business",
    description: "Every business is unique, which is why we offer customized logistics solutions designed around your specific needs. Our team works closely with you to understand your operations, challenges, and goals, then develops a tailored strategy that optimizes efficiency and reduces costs.",
    features: [
      "Dedicated account management",
      "Supply chain consulting",
      "Process optimization",
      "Scalable solutions",
      "Performance reporting",
    ],
  },
  {
    id: "waste-removal",
    icon: Trash2,
    title: "Waste Removal",
    shortDescription: "Efficient waste management and disposal services",
    description: "Our waste removal services help businesses manage their waste responsibly and efficiently. From construction site clearances to regular commercial waste collection, we handle all aspects of waste management with full compliance and environmental consideration.",
    features: [
      "Commercial waste collection",
      "Construction site clearance",
      "Recycling services",
      "Licensed disposal",
      "Documentation provided",
    ],
  },
  {
    id: "packer-movers",
    icon: PackageCheck,
    title: "Packer and Movers",
    shortDescription: "Professional packing and relocation services",
    description: "Moving office or relocating stock? Our professional packing and moving team ensures your items are carefully handled from start to finish. We provide all packing materials, trained personnel, and transport — making your move as stress-free as possible.",
    features: [
      "Professional packing materials",
      "Trained handling team",
      "Office relocations",
      "Stock transfers",
      "Furniture assembly/disassembly",
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Breadcrumb */}
      <section className="bg-muted py-4 border-b border-border">
        <div className="container-logistics">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Our Services</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>

        <div className="container-logistics relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-heading font-medium text-sm mb-6 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
              Comprehensive <span className="text-primary">Logistics Solutions</span>
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              From transportation to warehousing, we offer a complete range of logistics services designed to keep your business moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-logistics">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-button">
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button variant="cta" size="lg" className="gap-2">
                        Get a Quote <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                    <a href="tel:+443330497891">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Phone className="h-5 w-5" /> Call Us
                      </Button>
                    </a>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-muted to-background rounded-2xl p-8 md:p-12 shadow-card">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="h-32 w-32 text-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-muted">
        <div className="container-logistics">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific requirements. Our team is available 24/7 to help you find the perfect logistics solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white" size="xl" className="gap-2">
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:info@logisticsnorthwest.com">
                <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  <Mail className="h-5 w-5" /> Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
