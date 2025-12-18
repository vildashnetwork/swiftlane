import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, MapPin, Calendar, User, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Transportation",
  "Warehousing",
  "Customer Solutions",
  "Waste Removal",
  "Packer and Movers",
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    pickupLocation: "",
    deliveryLocation: "",
    date: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      pickupLocation: "",
      deliveryLocation: "",
      date: "",
      details: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-muted" id="quote">
      <div className="container-logistics">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Get a Free Quote
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Fill out the form with your delivery details and we'll get back to you with a competitive quote within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Call Us Directly</h4>
                  <a href="tel:+443330497891" className="text-primary hover:underline">
                    +44 333 049 7891
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email Us</h4>
                  <a href="mailto:info@logisticsnorthwest.com" className="text-primary hover:underline">
                    info@logisticsnorthwest.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 XXX XXX XXXX"
                      required
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="form-label">Service Required</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field pl-10 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickupLocation" className="form-label">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="City or postcode"
                      required
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="deliveryLocation" className="form-label">Delivery Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      placeholder="City or postcode"
                      required
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="form-label">Additional Details (Optional)</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  rows={3}
                  className="input-field resize-none"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;