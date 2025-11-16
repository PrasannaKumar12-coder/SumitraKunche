import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Brahma Muhurtha?",
    answer: "Brahma Muhurtha is the divine time between 4 AM – 6 AM. Nature's energy is at its highest, and your mind becomes calm, clear, and powerful during this time.",
  },
  {
    question: "I have never meditated before. Can I still join?",
    answer: "Yes 🌸. This session is specially designed for beginners, especially mothers. I will guide you step by step. You just need an open heart.",
  },
  {
    question: "I am a working professional mother. Is this practical for me?",
    answer: "Absolutely! Even 30–45 minutes in Brahma Muhurtha can give you energy, peace, and clarity that will help you throughout your busy day.",
  },
  {
    question: "I sleep late. How can I wake up at 4 AM?",
    answer: "Don't worry. In this session, I will show you simple tips to wake up early without feeling tired. Once you experience the power of Brahma Muhurtha, your body and mind will naturally support you.",
  },
  {
    question: "Do I need any special equipment or place?",
    answer: "No equipment needed 🌸. Just a quiet corner in your home and a mat or chair to sit comfortably.",
  },
  {
    question: "What exactly will I learn in this free session?",
    answer: "You will learn: What is Brahma Muhurtha & why it is important for mothers, How to clean your past and release stress, How to rewire your mind to be a happy, healthy, peaceful mother.",
  },
  {
    question: "What if I cannot attend live?",
    answer: "This is a live experience session, so attending live gives the best results. If you miss, you can always join the next Sunday batch.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-5 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-block text-4xl mb-4">❓</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about the masterclass
            </p>
          </div>

          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Have more questions? Register now and get all your doubts cleared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
