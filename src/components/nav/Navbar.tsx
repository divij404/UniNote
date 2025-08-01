import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToDashboard = () => {
    setMobileOpen(false);
    navigate("/dashboard");
  };
  const goHome = () => {
    setMobileOpen(false);
    navigate("/");
  };

  return (
    // Outer wrapper controls sticky/fixed, margin, and rounding
    <header
      className={`
        w-full z-50
        fixed top-0 
        sm:fixed sm:w-auto sm:mx-auto sm:mt-4
        sm:rounded-2xl
        sm:max-w-3xl md:max-w-5xl lg:max-w-7xl
        sm:left-0 sm:right-0
        transition-all
        ${mobileOpen ? "bg-gray-800/95" : "bg-gray-800/90"}
        border-b border-black/20
        ${
          // Only round/margin from sm up, square/flush on xs
          "rounded-none sm:rounded-3xl"
        }
        ${
          // Only margin-top from sm up, 0 on xs
          "mt-0 sm:mt-4"
        }
        backdrop-blur-md shadow-[0_2px_16px_rgba(30,30,36,0.20)]
        supports-[backdrop-filter]:bg-gray-600/80
      `}
      aria-label="Site navigation"
    >
      <nav className="flex items-center justify-between px-4 sm:px-8 py-3 relative">
        {/* Logo */}
        <button
          onClick={goHome}
          aria-label="Go to homepage"
          className="font-extrabold text-2xl text-red-500 select-none tracking-tight hover:text-red-400 transition-colors bg-transparent border-none p-0 m-0 outline-none cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          UniNotes
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 font-medium hover:text-red-500 hover:underline underline-offset-4 transition-colors focus:outline-none focus:underline"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={goToDashboard}
            className="font-semibold rounded-md px-5 py-2 ml-1 bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 shadow transition-colors"
          >
            Get Started
          </Button>
        </div>

        {/* Hamburger Button - only on mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-700/40"
          aria-label="Open mobile menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="text-gray-100"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-14 left-0 w-full
            bg-gray-800/95
            rounded-b-xl
            shadow-[0_2px_16px_rgba(30,30,36,0.20)]
            flex flex-col items-start gap-2 px-6 py-4
            transition-all duration-300 z-50
            ${mobileOpen ? "block" : "hidden"}
            sm:hidden
          `}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="w-full text-left py-2 px-4 text-gray-200 font-medium hover:text-red-500 hover:bg-gray-700/30 rounded-md transition"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={goToDashboard}
            className="w-full font-semibold rounded-md px-5 py-2 mt-2 bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 shadow transition-colors"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
