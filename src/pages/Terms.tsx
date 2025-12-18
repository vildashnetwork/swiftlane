import { Link } from "react-router-dom";

const Terms = () => {
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
            <span className="text-foreground font-medium">Terms and Conditions</span>
          </nav>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-logistics max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg text-foreground space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions govern your use of the Logistics North West website and services. By using our services, you accept these terms in full. If you disagree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Logistics North West provides transportation, warehousing, waste removal, packing, and moving services. All services are subject to availability and our standard operating procedures. We reserve the right to refuse service at our discretion.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Quotes and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All quotes provided are estimates based on the information provided by the client. Final pricing may vary based on actual service requirements, weight, dimensions, and other factors. Quotes are valid for 30 days unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we take all reasonable care to protect your goods, Logistics North West's liability is limited to the value declared at the time of booking or as covered by our standard insurance policy. Additional insurance may be arranged upon request.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellations made more than 24 hours before the scheduled service will receive a full refund. Cancellations made within 24 hours may be subject to a cancellation fee. Please contact us as soon as possible if you need to reschedule.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms, please contact us at info@logisticsnorthwest.com or call +44 333 049 7891.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
