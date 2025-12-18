import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Warehouse, Users, Trash2, PackageCheck, Star, Quote, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import QuoteForm from "@/components/QuoteForm";
import heroImage from "@/assets/hero-logistics.jpg";

const services = [
  {
    icon: Truck,
    title: "Transportation",
    description: "Reliable freight and delivery services across the region",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management",
  },
  {
    icon: Users,
    title: "Customer Solutions",
    description: "Tailored logistics strategies for your business",
  },
  {
    icon: Trash2,
    title: "Waste Removal",
    description: "Efficient waste management and disposal services",
  },
  {
    icon: PackageCheck,
    title: "Packer and Movers",
    description: "Professional packing and relocation services",
  },
];

const testimonials = [
  {
    quote: "Excellent local logistics support. They know the region well, are always on time, and manage deliveries professionally.",
    author: "Rajesh K",
    rating: 5,
  },
  {
    quote: "From booking to delivery, the process was seamless. Highly recommended for dependable logistics services.",
    author: "Michael C",
    rating: 5,
  },
  {
    quote: "Quick, dependable, and hassle-free service. Their team handled everything flawlessly.",
    author: "Emily T",
    rating: 5,
  },
];

const features = [
  "24/7 Customer Support",
  "Real-time Tracking",
  "Competitive Pricing",
  "Local Expertise",
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-corporate-dark/80" />
        </div>
        
        <div className="container-logistics relative z-10 py-20">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-background mb-6 leading-tight">
              Reliable Logistics Solutions for the{" "}
              <span className="text-primary">North West</span>
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-xl">
              Your trusted partner for transportation, warehousing, and comprehensive logistics services. Available 24/7 to serve your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="#quote">
                <Button size="lg" className="gap-2">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                  Our Services
                </Button>
              </Link>
            </div>
            
            {/* Quick Features */}
            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-background/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-logistics">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-service group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-logistics">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've helped
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-muted rounded-lg p-8 md:p-10 relative">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/20" />
              
              <div className="relative z-10">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-center text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <p className="text-center font-medium text-primary">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-corporate-dark text-background">
        <div className="container-logistics text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. Our team is available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+443330497891">
              <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                Call +44 333 049 7891
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;