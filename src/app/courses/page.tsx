'use client'
import { useState } from "react";
import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

const courses = [
  {
    icon: <ShieldIcon />,
    title: "Cybersecurity",
    description: "Learn to protect systems, networks, and programs from digital attacks. Master ethical hacking, network security, and risk management.",
    duration: "6 Months",
    level: "Intermediate",
  },
  {
    icon: <ChartBarIcon />,
    title: "Data Analysis",
    description: "Transform raw data into meaningful insights. Master Excel, SQL, Tableau, and Python for data-driven decision making.",
    duration: "4 Months",
    level: "Beginner",
  },
  {
    icon: <MonitorIcon />,
    title: "Frontend Development",
    description: "Build stunning user interfaces. Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js.",
    duration: "4 Months",
    level: "Beginner",
  },
  {
    icon: <ServerIcon />,
    title: "Backend Development",
    description: "Power the logic behind web apps. Master Node.js, Express, Databases (SQL/NoSQL), and API development.",
    duration: "4 Months",
    level: "Beginner",
  },
  {
    icon: <CodeIcon />,
    title: "Fullstack Development",
    description: "The complete package. Master both frontend and backend technologies to build end-to-end web applications.",
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  {
    icon: <PaletteIcon />,
    title: "UI/UX Design",
    description: "Design intuitive and beautiful digital experiences. Master user research, wireframing, prototyping, and industry-standard tools like Figma.",
    duration: "3 Months",
    level: "Beginner",
  },
];

const page = () => {
  const [isRegFormOpen, setIsRegFormOpen] = useState(false);
  return (
    <main className="w-full bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#f9c89b] opacity-30 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-[#9B59B6] opacity-10 blur-3xl pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-24 sm:pt-20 sm:pb-32">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-4">
            Our <span className="text-[#F5A623]">Courses</span>
          </h1>
          <p className="text-[#666] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover our comprehensive range of tech programs designed to equip you with the skills needed to succeed in today's digital world.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)",
                  }}
                >
                  {course.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-[#1a1a1a] font-bold text-xl sm:text-2xl mb-2">
                      {course.title}
                    </h2>
                    <p className="text-[#555] text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-[#9B59B6]">
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-[#F5A623]">
                      {course.level}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setIsRegFormOpen(true)}
                      className="inline-flex items-center text-sm font-semibold text-[#9B59B6] hover:text-[#7B3FA8] transition-colors"
                    >
                      Enroll Now
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <section className="relative w-full overflow-hidden">
        <div
          className="w-full py-16 px-4 sm:px-6 lg:px-12 text-center relative"
          style={{
            background: "linear-gradient(135deg, #7B3FA8 0%, #9B59B6 50%, #8B44A8 100%)",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)", opacity: 0.25, borderRadius: "0 50% 50% 0" }}
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 relative z-10">
            Not sure which path to choose?
          </h2>
          <p className="text-purple-200 text-sm max-w-lg mx-auto mb-8 leading-relaxed relative z-10">
            Our career advisors are here to help you find the perfect program that aligns with your goals and interests.
          </p>
          <button
            onClick={() => setIsRegFormOpen(true)}
            className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-white text-[#7B3FA8] font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Talk to an Advisor
          </button>
        </div>
      </section>
      <RegistrationForm 
        isOpen={isRegFormOpen} 
        onClose={() => setIsRegFormOpen(false)} 
      />
    </main>
  );
};

export default page;
