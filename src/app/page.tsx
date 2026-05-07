"use client";

import { useState } from "react";
import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

const featureCards = [
  {
    image: "/pic1.png",
    title: "Remote Learning",
    description: "We offer remote learning options that allow you to learn from anywhere.",
  },
  {
    image: "/pic2.svg",
    title: "After Class Access",
    description: "We want to make sure you have everything you need to succeed.",
  },
  {
    image: "/pic3.svg",
    title: "Expert Tutors",
    description: "Our tutors are highly experienced and knowledgeable in their fields.",
  },
  {
    image: "/pic4.svg",
    title: "Tested & Trusted",
    description: "We have our 100+ graduates who tested and trusted in us.",
  },
  {
    image: "/pic5.svg",
    title: "Conducive Environment",
    description: "We've created a conducive environment that helps you focus.",
  },
];

function OrangeDash() {
  return <div className="w-8 h-1 bg-[#F5A623] rounded-full mb-2" />;
}

function FeatureCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full  overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info card — overlapping bottom */}
      <div
        className="relative -mt-2 mx-0 rounded-b-2xl px-5 pt-4 pb-5"
        style={{ background: "rgba(107, 70, 193, 0.88)", backdropFilter: "blur(6px)" }}
      >
        <OrangeDash />
        <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
          {title}
        </h3>
        <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const Page = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <main className="w-full bg-white overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #e8d5f7 0%, transparent 70%)", opacity: 0.6 }} />
        <div className="absolute bottom-0 -left-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #fde8c0 0%, transparent 70%)", opacity: 0.5 }} />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
            <span className="text-[#7B3FA8] text-xs font-semibold tracking-wide uppercase">
              #1 Tech Academy in Nigeria
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-6 max-w-4xl mx-auto">
            Launch Your{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
            >
              Tech Career
            </span>{" "}
            With Confidence
          </h1>

          <p className="text-[#666] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Larva Coding Academy offers industry-focused, hands-on tech training for
            beginners and professionals. Join thousands of graduates building real careers in tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegistration(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white text-base shadow-lg hover:opacity-90 hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
            >
              Get Started Today
            </button>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-[#7B3FA8] text-base border-2 border-purple-300 hover:border-[#9B59B6] hover:bg-purple-50 transition-all duration-200 bg-white"
            >
              Explore Courses
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "100+", label: "Graduates" },
              { value: "5+", label: "Courses" },
              { value: "5+", label: "Years Experience" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#888] text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP FEATURE CARDS ROW (Remote Learning + After Class) ── */}
      <section className="relative w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {featureCards.slice(0, 2).map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LARVA SECTION ── */}
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
        {/* Left blob */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #c8a0e8 0%, transparent 70%)", opacity: 0.25 }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — Text */}
            <div className="w-full lg:w-[48%]">
              <p className="text-[#1a1a1a] font-extrabold text-xl sm:text-2xl mb-3">
                Why <span className="text-[#F5A623]">Larva?</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
                A place where Tech Experts Meet
              </h2>
              {/* Orange underline */}
              <div className="w-14 h-1.5 bg-[#F5A623] rounded-full mb-6" />
              <p className="text-[#666] text-sm sm:text-base leading-relaxed max-w-md">
                Larva Coding Academy stands out as one of the best institutions for
                anyone passionate about technology. With an industry-focused curriculum
                and expert instructors.
              </p>

              {/* Key points */}
              <div className="mt-8 space-y-3">
                {[
                  "100% hands-on project-based learning",
                  "Career support & job placement assistance",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#444] text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Expert Tutor card */}
            <div className="w-full lg:w-[52%]">
              <FeatureCard {...featureCards[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM FEATURE CARDS (Tested & Trusted + Conducive Environment) ── */}
      <section className="relative w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#fafafa] overflow-hidden">
        {/* Left peach blob */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #fbbf6a 0%, transparent 70%)", opacity: 0.35 }} />
        {/* Right orange blob */}
        <div className="absolute -right-10 bottom-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)", opacity: 0.2 }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {featureCards.slice(3, 5).map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>

          {/* See More */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7B3FA8 0%, #9B59B6 60%, #8B44A8 100%)" }}>
        {/* Decorative blobs */}
        <div className="absolute left-0 top-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }} />
        <div className="absolute right-0 bottom-0 w-52 h-52 rounded-full pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Start Your{" "}
            <span className="text-[#F5A623]">Tech Journey?</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Join Larva Coding Academy today and be part of a growing community of tech
            experts. A trial will convince you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegistration(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#7B3FA8] rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Apply Now
            </button>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white border-2 border-white/40 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      <RegistrationForm
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </main>
  );
}

export default Page