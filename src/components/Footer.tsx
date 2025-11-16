import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">BM</span>
              </div>
              <span className="text-xl font-bold">Bramha Muhurtha</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming lives of Telugu mothers through the power of Brahma Muhurtha practice. Wake up to a life of peace, energy, and happiness.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a
                href="mailto:sumithra@bramhamuhurtha.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">sumithra@bramhamuhurtha.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => document.getElementById("secrets")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                3 Secrets
              </button>
              <button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-accent text-accent animate-pulse" />
            <span>for Mothers</span>
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            © 2025 Bramha Muhurtha Masterclass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
