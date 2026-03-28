import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate JSON-LD schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            {title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
