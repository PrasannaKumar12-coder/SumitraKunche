import { Heart, Sparkles, Home } from "lucide-react";

const WhyMothersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 scroll-reveal">
            <div className="inline-block text-5xl mb-4 animate-pulse">💖</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Mothers Need This
            </h2>
            <p className="text-lg text-muted-foreground">
              Your well-being is the key to your family's happiness
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer scroll-reveal group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    Your mental health is the foundation of your family's happiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-tertiary/5 to-accent/5 border-2 border-tertiary/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer scroll-reveal group" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-tertiary/10 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-tertiary" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    When you are peaceful, your children grow with that same positivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 border-2 border-accent/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer scroll-reveal group" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent/10 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    This is not just about waking up early—it's about becoming the role model and anchor of peace in your home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emphasis Box */}
          <div className="mt-12 text-center scroll-reveal" style={{ animationDelay: "300ms" }}>
            <div className="bg-gradient-to-r from-primary via-accent to-tertiary p-1 rounded-2xl inline-block hover:scale-105 transition-transform duration-300">
              <div className="bg-card rounded-2xl px-8 py-6">
                <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                  Transform yourself, transform your family
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMothersSection;
