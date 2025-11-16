import { ArrowRight, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import sumithraPhoto from "@/assets/sumitra-kunche-main.jpg";
import "../css/Hero.css";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative  py-3 sm:py-5 md:py-7 lg:py-9 xl:py-5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-secondary-yellow/30" />
      {/* border-8 border-red-500 */}
      <div className="container mx-auto  relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pre-headline Badge */}
        <div className="w-full flex justify-center mb-8 ">
          <span
            className="
                bg-gradient-to-r from-tertiary to-tertiary/80 
                inline-flex items-center text-center 
                px-4 sm:px-5 md:px-6 
                text-white 
                rounded-full 
                py-2 sm:py-2.5 md:py-3 
                font-semibold 
                text-xs sm:text-sm md:text-base 
                leading-snug 
                shadow-lg 
                break-words
                whitespace-normal
                max-w-[90%] sm:max-w-[80%] md:max-w-[60%]
                "
          >
            Attention: Homemakers, Working Mothers & Women Entrepreneurs
          </span>
        </div>
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
              Discover the 4:30 AM Secret That Transforms Your{" "}
              <span className="text-primary">
                <Typewriter
                  words={["Energy", "Patience", "Inner Strength"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1200}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Even with demanding schedules and daily stress—wake up at 4:30 AM
              feeling refreshed and start each day with powerful positivity.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
            >
              Join the Bramha Muhurtha Masterclass
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            {/* Info Pills */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-muted-foreground">
              <span className="bg-secondary-yellow/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                🔥 Limited Seats Available
              </span>
              <span className="bg-tertiary-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                📚 Masterclass Language: Telugu Only
              </span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src='https://sumithrakunche.com/wp-content/uploads/2025/09/Sumithra-Image-min.png'
                alt="Sumithra Kunche - Brahma Muhurtha Coach"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
              />
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-card border-2 border-primary rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl whitespace-nowrap">
                <p className="text-base sm:text-lg md:text-xl font-bold text-primary">
                  Sumithra Kunche
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Brahma Muhurtha Coach
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cards Grid - Below Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-5xl mx-auto">
          {/* 4:30 AM Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 shrink-0">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  4:30 AM
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Your New Beginning
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 shrink-0">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  2+
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Mothers Trained Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 shrink-0">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  300+
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Mothers Transformed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
