import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const services = [
  "Transportation",
  "Warehousing",
  "Customer Solutions",
  "Waste Removal",
  "Packer and Movers",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    gdprConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the privacy policy to submit the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      gdprConsent: false,
    });
    setIsSubmitting(false);
  };

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
            <span className="text-foreground font-medium">Contact</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-logistics">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-heading font-medium text-sm mb-6">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Logistics North West</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question or need a quote? Fill out the form below or reach out directly. We're available 24/7 to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us about your logistics needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdpr"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, gdprConsent: checked as boolean })
                      }
                    />
                    <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </Link>
                      . By submitting this form, I consent to Logistics North West contacting me regarding my enquiry.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-foreground text-background rounded-2xl p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold mb-1">Address</p>
                      <p className="text-background/70">
                        Unit 6, Neville, Neville St,<br />Oldham OL9 6LD
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+443330497891"
                        className="text-background/70 hover:text-primary transition-colors block"
                      >
                        +44 333 049 7891
                      </a>
                      <a
                        href="tel:+447441357041"
                        className="text-background/70 hover:text-primary transition-colors block"
                      >
                        +44 7441 357041
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold mb-1">Email</p>
                      <a
                        href="mailto:info@logisticsnorthwest.com"
                        className="text-background/70 hover:text-primary transition-colors"
                      >
                        info@logisticsnorthwest.com
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
              </div>

              {/* Quick Benefits */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free, no-obligation quotes",
                    "Response within 24 hours",
                    "Expert advice on logistics",
                    "Competitive pricing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8447073553775!2d-2.1097!3d53.5446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7b9c6a98389%3A0x1c8c9e44e6f7a45e!2sNeville%20St%2C%20Oldham%20OL9%206LD%2C%20UK!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Logistics North West Location"
        />
        <div className="absolute bottom-6 left-6 bg-card rounded-xl p-4 shadow-card max-w-xs">
          <p className="font-heading font-bold text-foreground mb-1">Logistics North West</p>
          <p className="text-sm text-muted-foreground">
            Unit 6, Neville, Neville St, Oldham OL9 6LD
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
