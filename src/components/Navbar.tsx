'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import RegistrationForm from "./RegistrationForm";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "Cybersecurity", href: "/courses" },
      { label: "Data Analysis", href: "/courses" },
      { label: "Frontend Development", href: "/courses" },
      { label: "Backend Development", href: "/courses" },
      { label: "Fullstack Development", href: "/courses" },
      { label: "UI/UX Design", href: "/courses" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isRegFormOpen, setIsRegFormOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-[#f39821] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/larvalogo.svg"
              alt="Larva Coding Academy"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-white hover:text-white/90 font-medium text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                    {/* Chevron */}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-[#444] hover:bg-orange-50 hover:text-[#F5A623] transition-colors duration-150"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-white/90 font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Join Now Button + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Join Now Button (always visible) */}
            <button
              onClick={() => setIsRegFormOpen(true)}
              className="border border-white hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold text-sm text-white shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
              style={{ background: "linear-gradient(45deg, #9B59B6 0%, #F5A623 100%)" }}
            >
              Join now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#333] rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#333] rounded mt-1 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#333] rounded mt-1 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#444] hover:bg-gray-50 font-medium text-sm transition-colors duration-150"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-300 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm text-[#555] hover:text-[#F5A623] transition-colors duration-150"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-[#444] font-medium text-sm transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile Join Now Button */}
          <div className="pt-4">
            <button
              className="bg-[#f39821] flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-md transition-all duration-200 hover:opacity-90 active:scale-95"
              onClick={() => {
                setMobileOpen(false);
                setIsRegFormOpen(true);
              }}
            >
              Join now
            </button>
          </div>
        </div>
      </div>
      
      <RegistrationForm 
        isOpen={isRegFormOpen} 
        onClose={() => setIsRegFormOpen(false)} 
      />
    </nav>
  );
}


export default Navbar