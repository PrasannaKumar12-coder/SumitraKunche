import secretBrahma from "@/assets/secret-brahma.jpg";
import secretMeditation from "@/assets/secret-meditation.jpg";
import secretMindset from "@/assets/secret-mindset.jpg";

const secrets = [
  {
    image: secretBrahma,
    title: "Brahma Muhurtha Power",
    description: "Learn the ancient science of waking up at the divine time (4-6 AM) when nature's energy is at its peak",
    gradient: "from-primary/40 to-background/90",
  },
  {
    image: secretMeditation,
    title: "Mind Cleansing Techniques",
    description: "Master powerful practices to release stress, anger, and past emotional baggage permanently",
    gradient: "from-accent/40 to-background/90",
  },
  {
    image: secretMindset,
    title: "Positive Mindset Rewiring",
    description: "Transform your thought patterns to create lasting happiness, patience, and inner peace",
    gradient: "from-tertiary/40 to-background/90",
  },
];

const SecretsSection = () => {
  return (
    <section id="secrets" className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            3 Powerful Keys You'll Discover
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Transform your life with these proven ancient practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {secrets.map((secret, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image with overlay */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={secret.image} 
                  alt={secret.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${secret.gradient}`} />
                
                {/* Number badge */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {secret.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {secret.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretsSection;
