import Link from "next/link";

const courseLinks = [
  { label: "Cybersecurity", href: "/courses" },
  { label: "Data Analysis", href: "/courses" },
  { label: "Frontend Development", href: "/courses" },
  { label: "Backend Development", href: "/courses" },
  { label: "Fullstack Development", href: "/courses" },
  { label: "UI/UX Design", href: "/courses" },
];

const supportLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

// Social Icons as inline SVGs
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-[#aaa]"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-[#aaa]"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-linear-to-r from-transparent via-[#F5A623]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Column 1 — Logo + Info */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0 w-fit block">
              <img
                src="/larvalogo.svg"
                alt="Larva Coding Academy"
                className="h-10 w-auto"
              />
            </Link>

            {/* Join us at */}
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-4 opacity-90">
                Join us at:
              </p>
              <div className="space-y-5">
                <div className="group">
                  <p className="text-[#888] text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">
                    <span className="text-white/60 block text-[11px] font-semibold uppercase tracking-wider mb-1">Dugbe Office</span>
                    8th floor, Cocoa House, Dugbe, Ibadan.
                  </p>
                </div>
                <div className="group">
                  <p className="text-[#888] text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">
                    <span className="text-white/60 block text-[11px] font-semibold uppercase tracking-wider mb-1">Bodija Office</span>
                    NO 5, Akinsehinwa Street, Beside Adis Hotel, Off Favos bus stop, New Bodija, Ibadan.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              {/* WhatsApp */}
              <Link
                href={"https://wa.me/2349158476665"}
                target="_blank"
                className="flex items-center gap-3 text-[#888] hover:text-[#F5A623] transition-all duration-300 group w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#F5A623]/10 transition-colors">
                  <WhatsAppIcon />
                </div>
                <span className="text-sm font-medium">09158476665</span>
              </Link>

              {/* Email */}
              <Link
                href={"mailto:larvanigeria@gmail.com"}
                className="flex items-center gap-3 text-[#888] hover:text-[#F5A623] transition-all duration-300 group w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#F5A623]/10 transition-colors">
                  <EmailIcon />
                </div>
                <span className="text-sm font-medium lowercase">larvanigeria@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Column 4 — Support */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8 opacity-90">Support</h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#888] text-[13px] hover:text-[#F5A623] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#F5A623] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Courses */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8 opacity-90">Courses</h3>
            <ul className="space-y-4">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#888] text-[13px] hover:text-[#F5A623] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#F5A623] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-white/5" />

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#666] text-[11px] font-medium tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} LARVA CODING ACADEMY. ALL RIGHTS RESERVED.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#888] hover:bg-[#F5A623]/10 hover:text-[#F5A623] hover:scale-110 transition-all duration-300 border border-white/5 hover:border-[#F5A623]/20"
            >
              <InstagramIcon />
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://x.com/"
              aria-label="X (Twitter)"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#888] hover:bg-[#F5A623]/10 hover:text-[#F5A623] hover:scale-110 transition-all duration-300 border border-white/5 hover:border-[#F5A623]/20"
            >
              <XIcon />
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com/"
              aria-label="Facebook"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#888] hover:bg-[#F5A623]/10 hover:text-[#F5A623] hover:scale-110 transition-all duration-300 border border-white/5 hover:border-[#F5A623]/20"
            >
              <FacebookIcon />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#888] hover:bg-[#F5A623]/10 hover:text-[#F5A623] hover:scale-110 transition-all duration-300 border border-white/5 hover:border-[#F5A623]/20"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
