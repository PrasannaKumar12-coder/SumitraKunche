import problemStress from "@/assets/problem-stress.jpg";
import problemAnger from "@/assets/problem-anger-new.jpg";
import problemPast from "@/assets/problem-past.jpg";

const problems = [
  {
    image: problemStress,
    title: "Daily Stress & Anxiety",
    description: "Waking up feeling overwhelmed before the day even begins",
    gradient: "from-primary/20 to-transparent",
  },
  {
    image: problemAnger,
    title: "Anger & Impatience",
    description: "Losing your temper with your children and feeling guilty afterwards",
    gradient: "from-accent/20 to-transparent",
  },
  {
    image: problemPast,
    title: "Past Hurts & Regrets",
    description: "Unable to forget past negative experiences and move forward",
    gradient: "from-tertiary/20 to-transparent",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Are You Facing These Issues?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Every mother struggles with these challenges. You're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${problem.gradient}`} />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center scroll-reveal">
          <p className="text-xl md:text-2xl text-primary font-bold">
            ✨ Discover the powerful solution that transforms all of these challenges...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
