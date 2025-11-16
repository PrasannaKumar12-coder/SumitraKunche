import { Award, Heart, Target, Sparkles, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className=" py-12 sm:py-16 md:py-20 lg:py-24 xl:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-10">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Meet Your Coach</span>
          </div>
          
          <p className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-semibold" style={{ fontFamily: 'Yesteryear', fontWeight: '300', color: 'rgb(212, 175, 55)' }}>
            Sumithra Kunche
            </p>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 sm:space-y-8 scroll-reveal">
          {/* Photo */}
          <div className="relative mx-auto max-w-sm sm:max-w-md px-2 sm:px-0">
            <div className="relative group">
              <div className="absolute transition duration-500"></div>
              <div className="">
                <img 
                  src='https://sumithrakunche.com/wp-content/uploads/2025/09/Sumithra-Image-min.png' 
                  alt="Sumithra Kunche - Brahma Muhurtha Coach"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto px-2 sm:px-0">
            <div className="group relative bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="relative text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">2+</p>
              <p className="relative text-xs sm:text-sm text-white/90 font-medium">Years Experience</p>
            </div>
            <div className="group relative bg-gradient-to-br from-accent to-accent/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="relative text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">300+</p>
              <p className="relative text-xs sm:text-sm text-white/90 font-medium">Mothers Transformed</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 sm:space-y-6 px-2 sm:px-0">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am a mother of two children. In my life, I faced the same problems as you - stress, anger, and past hurts. But Brahma Muhurtha practice completely transformed my life.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am a Brahma Muhurtha & Parenting Coach dedicated to helping mothers find peace and happiness. As a mother of two, I understand the daily challenges you face. My personal transformation through Brahma Muhurtha practices inspired me to guide other mothers on this journey.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 px-2 sm:px-0">
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/40 hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Professional Training</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Life Skills, NLP, Child Psychology</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-accent/5 border-2 border-accent/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-accent/40 hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Art of Visualization</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Advanced Certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 px-2 sm:px-0">
              <div className="group relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 hover:shadow-xl hover:from-primary/20 transform hover:translate-x-2 transition-all duration-500 cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">Mission</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      To help 1,00,000 Telugu mothers find peace, happiness, and purpose through Brahma Muhurtha practice.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border-l-4 border-accent rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 hover:shadow-xl hover:from-accent/20 transform hover:translate-x-2 transition-all duration-500 cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">Vision</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Every mother starts her day with clarity, calmness, and joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 xl:gap-16 2xl:gap-20 items-start scroll-reveal">
          {/* Left Column - Photo and Stats */}
          <div className="space-y-6 xl:space-y-8 sticky top-8">
            <div className="relative">
              <div className="relative group">
                <div className="absolute transition duration-500"></div>
                <div className="">
                  <img 
                    src='https://sumithrakunche.com/wp-content/uploads/2025/09/Sumithra-Image-min.png' 
                    alt="Sumithra Kunche - Brahma Muhurtha Coach"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:gap-6">
              <div className="group relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 xl:p-8 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full -mr-10 -mt-10 xl:-mr-12 xl:-mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="relative text-4xl xl:text-5xl font-bold text-white mb-2">2+</p>
                <p className="relative text-sm text-white/90 font-medium">Years Experience</p>
              </div>
              <div className="group relative bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 xl:p-8 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full -mr-10 -mt-10 xl:-mr-12 xl:-mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="relative text-4xl xl:text-5xl font-bold text-white mb-2">300+</p>
                <p className="relative text-sm text-white/90 font-medium">Mothers Transformed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 xl:space-y-8">
            <div className="space-y-5 xl:space-y-6">
              <p className="text-base xl:text-lg text-muted-foreground leading-relaxed">
                I am a mother of two children. In my life, I faced the same problems as you - stress, anger, and past hurts. But Brahma Muhurtha practice completely transformed my life.
              </p>
              <p className="text-base xl:text-lg text-muted-foreground leading-relaxed">
                I am a Brahma Muhurtha & Parenting Coach dedicated to helping mothers find peace and happiness. As a mother of two, I understand the daily challenges you face. My personal transformation through Brahma Muhurtha practices inspired me to guide other mothers on this journey.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-5 xl:gap-6">
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 rounded-2xl p-5 xl:p-6 hover:border-primary/40 hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 xl:w-24 xl:h-24 bg-primary/5 rounded-full -mr-10 -mt-10 xl:-mr-12 xl:-mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative flex flex-col items-center text-center space-y-3 xl:space-y-4">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-7 w-7 xl:h-8 xl:w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm xl:text-base mb-1">Professional Training</p>
                    <p className="text-xs xl:text-sm text-muted-foreground">Life Skills, NLP, Child Psychology</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-accent/5 border-2 border-accent/20 rounded-2xl p-5 xl:p-6 hover:border-accent/40 hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 xl:w-24 xl:h-24 bg-accent/5 rounded-full -mr-10 -mt-10 xl:-mr-12 xl:-mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative flex flex-col items-center text-center space-y-3 xl:space-y-4">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-7 w-7 xl:h-8 xl:w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm xl:text-base mb-1">Art of Visualization</p>
                    <p className="text-xs xl:text-sm text-muted-foreground">Advanced Certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-5 xl:space-y-6 pt-3 xl:pt-4">
              <div className="group relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-6 xl:p-8 hover:shadow-xl hover:from-primary/20 transform hover:translate-x-2 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-24 h-24 xl:w-32 xl:h-32 bg-primary/5 rounded-full -mr-12 -mt-12 xl:-mr-16 xl:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative flex items-start space-x-4 xl:space-x-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 xl:h-7 xl:w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg xl:text-xl mb-2 xl:mb-3">Mission</p>
                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                      To help 1,00,000 Telugu mothers find peace, happiness, and purpose through Brahma Muhurtha practice.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border-l-4 border-accent rounded-r-2xl p-6 xl:p-8 hover:shadow-xl hover:from-accent/20 transform hover:translate-x-2 transition-all duration-500 cursor-pointer">
                <div className="absolute top-0 right-0 w-24 h-24 xl:w-32 xl:h-32 bg-accent/5 rounded-full -mr-12 -mt-12 xl:-mr-16 xl:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative flex items-start space-x-4 xl:space-x-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 xl:h-7 xl:w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg xl:text-xl mb-2 xl:mb-3">Vision</p>
                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                      Every mother starts her day with clarity, calmness, and joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
