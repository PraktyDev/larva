import Link from "next/link";

const companyLinks = [
  { label: "About Larva Coding Academy", href: "#" },
  { label: "News", href: "#" },
  { label: "Certification", href: "#" },
  { label: "Our Partners", href: "#" },
];

const courseLinks = [
  { label: "Full Stack Development", href: "#" },
  { label: "Front End Development", href: "#" },
  { label: "Back End Development", href: "#" },
  { label: "UI/UX Design", href: "#" },
  { label: "Cyber Security", href: "#" },
  { label: "See More...", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
];

// Social Icons as inline SVGs
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#aaa]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#aaa]">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#5a5a5a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

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
              <p className="text-white font-semibold text-sm mb-2">Join us at:</p>
              <p className="text-[#c8c8c8] text-sm leading-relaxed">
                Ibadan Address: NO 5, Akinsehinwa Street, Beside Adis Hotel, Off Favos bus stop, New Bodija, Ibadan.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <WhatsAppIcon />
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white font-medium">Call/WhatsApp:</span>
                <span className="text-[#c8c8c8]">09158476665</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <EmailIcon />
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white font-medium">Email</span>
                <span className="text-[#c8c8c8]">Larvanigeria@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="sm:pt-1">
            <h3 className="text-white font-bold text-base mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c8c8c8] text-sm hover:text-[#F5A623] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Courses */}
          <div className="sm:pt-1">
            <h3 className="text-white font-bold text-base mb-5">Courses</h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c8c8c8] text-sm hover:text-[#F5A623] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div className="sm:pt-1">
            <h3 className="text-white font-bold text-base mb-5">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c8c8c8] text-sm hover:text-[#F5A623] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#707070]" />

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#aaa] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Larva Coding Academy. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#888] flex items-center justify-center text-[#c8c8c8] hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
            >
              <InstagramIcon />
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full border border-[#888] flex items-center justify-center text-[#c8c8c8] hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
            >
              <XIcon />
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#888] flex items-center justify-center text-[#c8c8c8] hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
            >
              <FacebookIcon />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#888] flex items-center justify-center text-[#c8c8c8] hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}