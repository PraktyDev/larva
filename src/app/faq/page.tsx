'use client'
import { useState } from "react";
import RegistrationForm from "@/components/RegistrationForm";

const faqs = [
  {
    question: "What programming languages do you teach?",
    answer:
      "We teach a wide range of programming languages including HTML, CSS, JavaScript, Python, React, Node.js, and more. Our curriculum is designed to give students both frontend and backend development skills.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Our courses range from 3 months to 12 months depending on the program. We offer flexible schedules including part-time and full-time tracks to suit your lifestyle and learning pace.",
  },
  {
    question: "Are your certifications recognized internationally?",
    answer:
      "Yes! Larva Coding Academy is accredited by the National Information Technology Development Agency (NITDA) and the Skills Development Council of Canada, ensuring your certificate is recognized both locally and internationally.",
  },
  {
    question: "Are there any discounts or scholarships available?",
    answer:
      "Yes, we offer scholarship opportunities and installment payment plans for eligible students. Please reach out to our admissions team to learn more about available financial support options.",
  },
  {
    question: "What teaching materials do you provide?",
    answer:
      "Students receive access to our learning management system (LMS), video lectures, project files, e-books, and coding exercises. All materials remain accessible throughout your learning journey.",
  },
  {
    question: "Do you offer career support or job placement assistance?",
    answer:
      "Absolutely. We provide career coaching, resume reviews, portfolio building support, and connect graduates with hiring partners. Our goal is to ensure every student lands a role in tech after completing their program.",
  },
  {
    question: "Is there an age or educational qualification requirement?",
    answer:
      "No minimum educational qualification is required. Our programs are open to anyone passionate about learning technology, regardless of academic background. Students as young as 16 are welcome.",
  },
];

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-200 cursor-pointer select-none
        ${isOpen
          ? "border-[#9B59B6] shadow-sm shadow-purple-100"
          : "border-gray-200 hover:border-gray-300"
        }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-4 py-3.5 gap-3">
        <span
          className={`text-sm font-medium transition-colors duration-200 ${isOpen ? "text-[#9B59B6]" : "text-[#222]"
            }`}
        >
          {question}
        </span>
        <span
          className={`transition-colors duration-200 ${isOpen ? "text-[#9B59B6]" : "text-[#999]"
            }`}
        >
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </span>
      </div>

      {/* Answer */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pb-4 pt-1 border-t border-purple-100">
          <p className="text-[#666] text-xs sm:text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isRegFormOpen, setIsRegFormOpen] = useState(false);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <main className="w-full bg-white overflow-hidden">

      {/* ── FAQ SECTION ── */}
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-12">

        {/* Decorative top-left blob */}
        <div className="absolute -top-6 -left-6 w-28 h-28 sm:w-36 sm:h-36 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, #c8a0e8 0%, #e8d5f5 60%, transparent 100%)", opacity: 0.55 }}
        />

        {/* Decorative bottom-right blob */}
        <div className="absolute bottom-20 -right-8 w-24 h-24 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, #c8a0e8 0%, #e8d5f5 70%, transparent 100%)", opacity: 0.35 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Title */}
          <div className="text-center mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              Frequently{" "}
              <span className="text-[#F5A623]">Asked Questions?</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-center text-[#888] text-xs sm:text-sm mb-10 sm:mb-14 max-w-md mx-auto leading-relaxed">
            Checkout answers for your questions from the listed categories.
            Please contact us if you are not getting what you are looking for.
          </p>

          {/* Two-column layout: FAQ list + Illustration */}
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">

            {/* Left — Accordion */}
            <div className="w-full lg:w-[58%] space-y-2.5">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>

            {/* Right — Illustration */}
            <div className="w-full lg:w-[42%] flex justify-center lg:justify-end lg:sticky lg:top-24">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                {/* Soft purple circle behind illustration */}
                <div
                  className="absolute inset-4 rounded-full pointer-events-none blur-2xl opacity-30"
                  style={{ background: "radial-gradient(circle, #9B59B6 0%, #c8a0e8 100%)" }}
                />
                <img
                  src="/faq1.svg"
                  alt="FAQ Illustration"
                  className="relative w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── READY TO GET STARTED BANNER ── */}
      <section className="relative w-full overflow-hidden">
        {/* Purple gradient banner */}
        <div
          className="w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-12 text-center relative"
          style={{
            background: "linear-gradient(135deg, #7B3FA8 0%, #9B59B6 50%, #8B44A8 100%)",
          }}
        >
          {/* Decorative left blob on banner */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-32 sm:w-28 sm:h-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)", opacity: 0.25, borderRadius: "0 50% 50% 0" }}
          />

          {/* Decorative right shape */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none opacity-10">
            <svg viewBox="0 0 60 60" fill="none">
              <polygon points="30,2 58,55 2,55" fill="white" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 relative z-10">
            Ready to get started?
          </h2>
          <p className="text-purple-200 text-xs sm:text-sm max-w-sm mx-auto mb-7 leading-relaxed relative z-10">
            Join us at Larva Tech Academy to be one of tech expert. Make your
            tech dreams come true. A trial will convince you.
          </p>
          <button
            onClick={() => setIsRegFormOpen(true)}
            className="relative z-10 inline-flex items-center justify-center px-8 py-2.5 bg-white text-[#7B3FA8] font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Apply now
          </button>
        </div>
      </section>

      <RegistrationForm 
        isOpen={isRegFormOpen} 
        onClose={() => setIsRegFormOpen(false)} 
      />
    </main>
  );
}

export default page