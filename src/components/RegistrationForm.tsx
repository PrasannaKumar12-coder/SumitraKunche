import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Sparkles } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please enter required details",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      toast({
        title: "Please enter a valid phone number",
        description: "Phone number must be at least 10 digits",
        variant: "destructive",
      });
      return;
    }

    // Email validation (if provided)
    if (formData.email && !formData.email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // TODO: Connect to your backend API or Google Forms here
    // Example: await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Registration successful! 🎉",
      description: "We will contact you soon",
    });
  };

  if (isSubmitted) {
    // Redirect to WhatsApp group
    const whatsappGroupLink = "https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK";
    
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <CheckCircle2 className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Welcome! 🎉
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          Your registration was successful!
        </p>
        <div className="bg-gradient-to-r from-tertiary/10 to-accent/10 border-2 border-tertiary/30 rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-foreground font-semibold mb-4">
            Join our WhatsApp group to get updates and connect with other mothers!
          </p>
          <Button
            onClick={() => window.open(whatsappGroupLink, "_blank")}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join WhatsApp Group
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Seats Available</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Reserve Your Seat Now
          </h3>
          <p className="text-muted-foreground">
            Register now and transform your life
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Your Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-border focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email - Optional
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email (optional)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-border focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Bramha Muhurtha Masterclass
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By registering, you agree to receive information about the masterclass via phone/email
          </p>
        </form>
      </div>

      {/* Additional trust elements */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          ✨ 100% Free Registration • No Credit Card Required
        </p>
        <p className="text-sm font-semibold text-tertiary">
          Limited to first 50 registrations only!
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
