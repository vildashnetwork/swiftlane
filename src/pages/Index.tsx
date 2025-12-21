import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Warehouse, Users, Trash2, PackageCheck, Star, Quote, Shield, Clock, Award, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";



const heroImage = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766240766/trash_reports/mf22kqsctv9igff3h6mq.jpg";
const secondimg = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297070/trash_reports/nduijk8jfeiiv4mv9m1y.jpg"
const thirdimg = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297147/trash_reports/mmvpsrpfeuknhjywtek3.jpg"
const fourthimg = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297201/trash_reports/tjsdqtzcbjyu5viochd8.jpg"
const fifthimg = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297257/trash_reports/wbq1wk1gewuaqzuovqhy.jpg"
const logo = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297301/trash_reports/kycxjskvgzteh9mlqgse.jpg"
const sixthimg = "https://res.cloudinary.com/dw78mqtz3/image/upload/v1766297347/trash_reports/lxrnieqziahhcc2dbd7e.jpg"

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

const valueProps = [
  {
    icon: Shield,
    title: "Dedicated Local Service",
    description: "Deep knowledge of the North West region ensures efficient routes and timely deliveries",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous standards and professional handling for all your logistics needs",
  },
  {
    icon: Clock,
    title: "Flexible Options",
    description: "24/7 availability with customizable solutions to match your schedule",
  },
  {
    icon: HeartHandshake,
    title: "Exceptional Customer Care",
    description: "Dedicated support team committed to your complete satisfaction",
  },
];


const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [code, setcode] = useState<string>("");
  const navigate = useNavigate()
  const sendcode = () => {
    navigate("/track/1212");
  }
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-primary/40" />
        </div>

        <div className="container-logistics relative z-10 py-20">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-heading font-medium text-sm mb-6 backdrop-blur-sm">
              Trusted Logistics Partner Since Day One
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Delivering Excellence Across the{" "}
              <span className="text-primary">North West</span>
            </h1>

            <div onClick={() => navigate("/track/e232")} className="flex flex-row md:flex-row items-center justify-center gap-4 max-w-lg mx-auto mt-10">

              <input
                type="text"
                value={code}
                onChange={(e) => setcode(e.target.value)}
                placeholder="Enter tracking code"
                className="flex-1 px-5 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400 text-gray-800"
              />

              <button onClick={sendcode} className="px-5 py-4 bg-primary text-white font-semibold rounded-r-md hover:bg-primary/12 focus:outline-none focus:ring-2 focus:bg-primary transition duration-200">
                Track
              </button>
            </div>






            <p className="text-lg sm:text-xl text-background/80 mb-8 max-w-2xl leading-relaxed">
              Your reliable partner for transportation, warehousing, and comprehensive logistics solutions. Available 24/7 to serve your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="gap-2">
                  Get a Quote! <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-background/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-logistics">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-heading font-medium text-sm mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Key Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service bg-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <img
        src={logo}
        alt="Logistics North West professional team in warehouse"
        className="rounded-2xl shadow-hero w-full h-auto"
      />
      <div className="animate-slide-in-right">
        <div className="relative">
          <img
            src={secondimg}
            alt="Logistics North West professional team in warehouse"
            className="rounded-2xl shadow-hero w-full h-auto"
          />
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground p-6 rounded-xl shadow-card">
            <p className="font-heading font-bold text-3xl">24/7</p>
            <p className="text-primary-foreground/80">Always Available</p>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-logistics">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-heading font-medium text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Logistics North West Difference
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We go above and beyond to ensure your logistics needs are met with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-button">
                  <prop.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>








      <div className="animate-slide-in-right">
        <div className="relative">
          <img
            src={heroImage}
            alt="Logistics North West professional team in warehouse"
            className="rounded-2xl shadow-hero w-full h-auto"
          />
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground p-6 rounded-xl shadow-card">
            <p className="font-heading font-bold text-3xl">24/7</p>
            <p className="text-primary-foreground/80">Always Available</p>
          </div>
        </div>
      </div>



      {/* Testimonials Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-logistics">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-heading font-medium text-sm mb-4">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've helped
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-background/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-background/10">
              <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/30" />

              <div className="relative z-10">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <p className="text-center font-heading font-semibold text-primary text-lg">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-background/30 hover:bg-background/50"
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container-logistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Availability" },
              { value: "10K+", label: "Deliveries" },
              { value: "99%", label: "On-Time Rate" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
