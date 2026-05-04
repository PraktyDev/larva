const features = [
  {
    title: "Experienced Trainers and Accreditation",
    description:
      "Our full-time trainers bring over 10 years of experience in website design and software programming. They are world-renowned developers dedicated to passing on their knowledge. Larva Coding Academy is also accredited by the National Information Technology Development Agency (NITDA) and the Skills Development Council of Canada, ensuring globally recognised programs in your achievement.",
  },
  {
    title: "Industry-Focused Curriculum and Hands-On Learning",
    description:
      "Larva Coding Academy offers an innovative, industry-focused curriculum designed to meet current project demands. Students work on live, real-world projects and build portfolios that demonstrate their practical skills in a hands-on learning environment that mirrors industry challenges.",
  },
  {
    title: "Innovation, Support, and Career Success",
    description:
      "We are committed to driving innovation and problem-solving, preparing graduates for success. Our supportive community, cutting-edge resources, and career features guarantee that you attain your potential and are equipped to build a successful career in tech.",
  },
];

const page = () => {
  return (
    <main className="w-full bg-white">

      {/* ── HERO SECTION ── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — Image */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.png"
                  alt="Larva Coding Academy Team"
                  className="w-full h-full object-cover"
                />
                {/* Decorative blobs */}
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#F5A623] opacity-20 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#9B59B6] opacity-20 blur-2xl pointer-events-none" />
              </div>
            </div>

            {/* Right — Content */}
            <div className="w-full lg:w-[55%]">
              {/* About Us label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#1e1e1e] font-bold text-lg sm:text-xl">About</span>
                <span
                  className="font-bold text-lg sm:text-xl"
                  style={{ color: "#F5A623" }}
                >
                  Us
                </span>
                {/* Triangle decoration */}
                <svg width="22" height="22" viewBox="0 0 22 22" className="ml-1">
                  <polygon points="11,2 20,19 2,19" fill="#9B59B6" opacity="0.85" />
                </svg>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-8">
                We're proud to offer{" "}
                <span className="block">top-quality training</span>
              </h1>

              {/* Feature List */}
              <div className="space-y-6">
                {features.map((feature, i) => (
                  <div key={i} className="group">
                    <h3 className="text-[#1a1a1a] font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#F5A623] transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-[#666] text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    {i < features.length - 1 && (
                      <div className="mt-5 border-b border-gray-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BECOME AN INSTRUCTOR SECTION ── */}
      <section className="w-full bg-[#f8f8f8] py-16 sm:py-20 overflow-hidden relative">

        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#F5A623] opacity-15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#9B59B6] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-[#F5A623] opacity-10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

            {/* Left — Text */}
            <div className="w-full lg:w-[50%] z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4">
                Do You Want To{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #F5A623 0%, #9B59B6 100%)",
                  }}
                >
                  Become An
                </span>
                <br />
                <span className="text-[#1a1a1a]">Instructor?</span>
              </h2>

              <p className="text-[#777] text-sm sm:text-base mb-8">
                We Can Do It Together.
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)",
                }}
              >
                Contact Us
              </a>
            </div>

            {/* Right — Illustration */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #9B59B6 0%, #F5A623 100%)",
                  }}
                />
                <img
                  src="/images/instructor-illustration.png"
                  alt="Become an Instructor"
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default page


