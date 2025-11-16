import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    before: "Waking up stressed, anxious, and overthinking the whole day ahead",
    after: "Starting each day with a calm mind and peaceful morning routine",
  },
  {
    before: "Feeling drained, restless, and short on patience",
    after: "Feeling energised, joyful, and ready to face your responsibilities",
  },
  {
    before: "Disconnecting from your children because of constant frustration",
    after: "Building deeper love, patience, and bonding with your kids",
  },
  {
    before: "Neglecting your own mental and emotional health",
    after: "Valuing your mental health as the foundation of your family's happiness",
  },
  {
    before: "Carrying unhealed past hurts and regrets that affect your present",
    after: "Learning to let go of past negativity and forgive with ease",
  },
  {
    before: "Living every day in auto-pilot mode without clarity or purpose",
    after: "Living each day with clarity, purpose, and inner strength",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="pt-5 pb-10 md:py-5 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <div className="inline-block text-5xl mb-4 animate-bounce">🌸</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Before vs After This Masterclass
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the life-changing transformation
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 md:gap-8 items-center scroll-reveal group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Before Card */}
                <div className="bg-card border-2 border-destructive/30 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-destructive/10 text-destructive text-xs font-bold px-3 py-1 rounded-br-lg">
                    Before
                  </div>
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    {comparison.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>

                {/* After Card */}
                <div className="bg-gradient-to-br from-tertiary/10 to-accent/10 border-2 border-tertiary/40 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-tertiary/20 text-tertiary text-xs font-bold px-3 py-1 rounded-br-lg">
                    After
                  </div>
                  <p className="text-foreground font-medium mt-6 leading-relaxed">
                    {comparison.after}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center scroll-reveal">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-tertiary/10 border border-primary/20 rounded-2xl p-8 inline-block hover:scale-105 transition-transform duration-300">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Ready to experience this transformation?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
