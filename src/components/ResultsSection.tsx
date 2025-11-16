import { CheckCircle2 } from "lucide-react";

const results = [
  "Wake up early with fresh energy",
  "Peaceful mornings",
  "Calm mind, less overthinking",
  "Stronger bonds with kids & family",
  "Better health, improved sleep",
  "Create time for yourself without guilt",
  "Let go of past hurt, develop clear focused mind",
  "Become a happy, peaceful and inspiring mother",
];

const ResultsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Your Transformation Awaits
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Here's what you'll achieve through this masterclass
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer scroll-reveal group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-tertiary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-foreground leading-relaxed">{result}</p>
              </div>
            ))}
          </div>

          {/* Why attend section */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-tertiary/10 border border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 scroll-reveal">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Why Attend This Masterclass?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Practical & Proven:</strong> Practices I follow daily; simple, practical, proven methods that work.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Telugu Language:</strong> Masterclass taught clearly in Telugu.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  <strong>Life-changing Habit:</strong> Build inner strength & create a better family atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
