import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TrackingPage from "./pages/Tracking";

const queryClient = new QueryClient();

// JSON-LD Schema for LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Logistics North West",
  "description": "Your trusted partner for transportation, warehousing, and comprehensive logistics solutions in the North West region.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 6, Neville, Neville St",
    "addressLocality": "Oldham",
    "postalCode": "OL9 6LD",
    "addressCountry": "UK"
  },
  "telephone": ["+44 333 049 7891", "+44 7441 357041"],
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com"
  ],
  "image": "https://logisticsnorthwest.com/logo.png",
  "priceRange": "$$"
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Logistics North West | 24/7 Transportation & Warehousing Services in Oldham</title>
          <meta name="description" content="Logistics North West offers reliable transportation, warehousing, waste removal, and packing services in the North West region. Available 24/7. Get a free quote today!" />
          <meta name="keywords" content="logistics, transportation, warehousing, waste removal, packer movers, Oldham, North West, delivery services" />
          <meta property="og:title" content="Logistics North West | 24/7 Transportation & Warehousing Services" />
          <meta property="og:description" content="Your trusted partner for comprehensive logistics solutions in the North West region. Available 24/7." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <link rel="canonical" href="https://logisticsnorthwest.com" />
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/track/:code" element={<TrackingPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
