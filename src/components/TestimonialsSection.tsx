import { Star } from "lucide-react";
import madhuriPhoto from "@/assets/testimonial-madhuri.jpg";
import monicaPhoto from "@/assets/testimonial-monica.jpg";
import deepikaPhoto from "@/assets/testimonial-deepika.jpg";
import daraniPhoto from "@/assets/testimonial-darani.jpg";
import padmaPhoto from "@/assets/testimonial-padma.jpg";

const testimonials = [
  {
    name: "Madhuri",
    role: "Working Mother",
    quote: "Brahma Muhurtha practice has transformed my life. Now I feel more energetic and happy.",
    rating: 5,
    image: madhuriPhoto,
  },
  {
    name: "Dr Monica",
    role: "Medical Professional & Mother",
    quote: "My stress levels have reduced dramatically. I'm more patient with my children and focused at work.",
    rating: 5,
    image: monicaPhoto,
  },
  {
    name: "Deepika",
    role: "Homemaker",
    quote: "I am now more patient and loving. My relationship with my children has improved.",
    rating: 5,
    image: deepikaPhoto,
  },
  {
    name: "Darani Garu",
    role: "Entrepreneur & Mother",
    quote: "The early morning practice has given me clarity and energy to manage both business and family beautifully.",
    rating: 5,
    image: daraniPhoto,
  },
  {
    name: "Padma",
    role: "Mother of Two",
    quote: "I was able to let go of past hurts. Now I live freely and happily.",
    rating: 5,
    image: padmaPhoto,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Success Stories from Real Mothers
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Hear from mothers who transformed their lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 scroll-reveal border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Profile section */}
              <div className="flex items-center space-x-4 mb-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-base truncate">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Additional social proof */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl px-8 py-5 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <p className="text-primary font-bold text-lg md:text-xl">
              ✨ Join 300+ mothers who transformed their lives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
