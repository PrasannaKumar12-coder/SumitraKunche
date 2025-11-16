import audienceHomemaker from "@/assets/audience-homemaker.jpg";
import audienceWorking from "@/assets/audience-working.jpg";
import audienceSpiritual from "@/assets/audience-spiritual.jpg";
import audienceChildren from "@/assets/audience-young-children.jpg";

const audiences = [
  {
    image: audienceHomemaker,
    title: "Homemakers",
    description: "Fill your home and life with peace and tranquility",
    gradient: "from-primary/30 to-transparent",
  },
  {
    image: audienceWorking,
    title: "Working Mothers",
    description: "Balance both career and family with grace and energy",
    gradient: "from-accent/30 to-transparent",
  },
  {
    image: audienceSpiritual,
    title: "Mothers Seeking Inner Growth",
    description: "Mothers looking for spiritual and personal development",
    gradient: "from-tertiary/30 to-transparent",
  },
  {
    image: audienceChildren,
    title: "Mothers of Young Children",
    description: "Become more patient and loving with your little ones",
    gradient: "from-primary-gold/30 to-transparent",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Who Is This Masterclass For?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            This transformative journey is specially designed for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${audience.gradient}`} />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
