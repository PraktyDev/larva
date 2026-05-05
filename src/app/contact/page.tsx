function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-white"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-white"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-white"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const cards = [
  {
    icon: <EnvelopeIcon />,
    title: "Contact Us",
    content: (
      <div className="space-y-2">
        <p className="text-[#555] text-sm">
          <span className="font-medium text-[#333]">Call/WhatsApp: </span>
          09158476665
        </p>
        <p className="text-[#555] text-sm">
          <span className="font-medium text-[#333]">Email: </span>
          Larvanigeria@gmail.com
        </p>
      </div>
    ),
  },
  {
    icon: <ClockIcon />,
    title: "Opening Hours",
    content: (
      <div className="space-y-2">
        <p className="text-[#555] text-sm">
          <span className="font-medium text-[#333]">Mon - Sat: </span>
          8am - 4pm
        </p>
        <p className="text-[#555] text-sm">
          <span className="font-medium text-[#333]">Sunday: </span>
          2pm - 4pm
        </p>
      </div>
    ),
  },
  {
    icon: <MapPinIcon />,
    title: "Our Office",
    content: (
      <div className="space-y-4">
        <p className="text-[#555] text-sm leading-relaxed">
          Ibadan Address: NO 5, Akinsehinwa Street, Beside Adis Hotel, Off
          Favos bus stop, New Bodija, Ibadan.
        </p>
        <p className="text-[#555] text-sm leading-relaxed">
          Abuja Address - Inside Rosa Mystica School, Plot 216 Ave Maria
          Cottage, Waterboard Road, Off Liberty Junction, Byazhin, Kubwa,
          Abuja
        </p>
      </div>
    ),
  },
];


const page = () => {
  return (
    <main className="w-full bg-white min-h-screen relative overflow-hidden">

      {/* ── Decorative Elements ── */}
      {/* Top purple triangle */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[38%] pointer-events-none z-0">
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60"
        >
          <defs>
            <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c8a8e9" />
              <stop offset="100%" stopColor="#9B59B6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <polygon points="45,5 85,80 5,80" fill="url(#triGrad)" />
        </svg>
      </div> */}

      {/* Bottom-left peach blob */}
      <div className="absolute bottom-24 left-8 sm:left-16 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#f9c89b] opacity-40 blur-sm pointer-events-none z-0" />

      {/* Bottom-right purple blob */}
      <div className="absolute bottom-10 right-8 w-16 h-16 rounded-full bg-[#9B59B6] opacity-10 blur-2xl pointer-events-none z-0" />

      {/* Top-right soft blob */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#F5A623] opacity-5 blur-3xl pointer-events-none z-0" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-24 sm:pt-20 sm:pb-32">

        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Contact{" "}
            <span className="text-[#F5A623]">Us</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col gap-4 group">

              {/* Icon bubble */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md transition-transform duration-200 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h2 className="text-[#1a1a1a] font-bold text-base sm:text-lg">
                {card.title}
              </h2>

              {/* Content */}
              <div>{card.content}</div>
            </div>
          ))}
        </div>

        {/* ── Map / CTA Strip ── */}
        {/* <div className="mt-20 sm:mt-28 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            title="Larva Coding Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3293040695657!2d3.8969!3d7.4113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0a983bd2a3%3A0x5b2e4e3d6f7d4d3a!2sNew%20Bodija%2C%20Ibadan%2C%20Oyo%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div> */}

        {/* ── Contact Form ── */}
        <div className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] text-center mb-10">
            Send Us a{" "}
            <span className="text-[#F5A623]">Message</span>
          </h2>

          <form className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#333]">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#333]">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#333]">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#333]">Phone Number</label>
              <input
                type="tel"
                placeholder="+234 000 0000 000"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#333]">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}

export default page