import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Clock, Target, Eye, Award, CheckCircle2 } from "lucide-react";
// import aboutTeamImage from "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766240534/trash_reports/cty2zjbjbwmd6ejejaxw.jpg";

const About = () => {
  const aboutTeamImage = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766240534/trash_reports/cty2zjbjbwmd6ejejaxw.jpg";

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional logistics services that exceed our clients' expectations while maintaining the highest standards of reliability and professionalism.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted logistics partner in the North West, known for our dedication to customer satisfaction and operational excellence.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, reliability, and customer-first approach drive everything we do. We believe in building lasting relationships based on trust and results.",
    },
  ];

  const quickFacts = [
    "Available 24/7, 365 days a year",
    "Serving businesses across the North West",
    "Professional, trained logistics team",
    "Comprehensive insurance coverage",
    "Real-time tracking and updates",
    "Competitive and transparent pricing",
  ];

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
            <span className="text-foreground font-medium">About Us</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-logistics">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-heading font-medium text-sm mb-6">
                About SwiftLane Logistics
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted <span className="text-primary">SwiftLane Logistics Partner</span>
              </h1>
              <div className="prose prose-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  SwiftLane Logistics is a locally owned and operated logistics company based in Oldham, serving businesses and individuals across the Greater Manchester area and beyond. We pride ourselves on understanding the unique needs of businesses in the North West, from local deliveries in Oldham to regional distribution across Yorkshire and Lancashire.
                </p>
                <p>
                  Our team brings years of hands-on experience in transport, warehousing, and supply chain management. Whether you're moving a single pallet or require a full-scale logistics solution, we treat every job with the same commitment to quality and reliability.
                </p>
                <p>
                  At SwiftLane Logistics, we believe great logistics is about more than just moving goods — it's about building relationships, understanding your business, and delivering peace of mind. That's why we offer 24/7 support, transparent pricing, and tailored solutions that grow with you.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src={aboutTeamImage}
                  alt="Logistics North West professional team in warehouse"
                  className="rounded-2xl shadow-hero w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground p-6 rounded-xl shadow-card">
                  <p className="font-heading font-bold text-3xl">24/7</p>
                  <p className="text-primary-foreground/80">Always Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-background">
        <div className="container-logistics">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-heading font-medium text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="card-service bg-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-button">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-logistics">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-heading font-medium text-sm mb-6">
                Quick Facts
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Why Businesses Choose Us
              </h2>
              <ul className="space-y-4">
                {quickFacts.map((fact) => (
                  <li key={fact} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-background/80">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background/5 rounded-2xl p-8 backdrop-blur-sm border border-background/10">
              <h3 className="font-heading font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>

                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">Phone</p>
                    <a href="tel:+1 719-629-5764" className="text-background/70 hover:text-primary transition-colors block">
                      +1 719-629-5764
                    </a>
                    <a href="tel:+1 719-629-5764" className="text-background/70 hover:text-primary transition-colors block">
                      +1 719-629-5764
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">Hours</p>
                    <p className="text-background/70">Mon–Sun: Open 24 hours</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="block mt-8">
                <Button variant="cta" size="lg" className="w-full gap-2">
                  Get a Quote! <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
