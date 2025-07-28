import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

// Navigation links array for easy modification
const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => navigate("/dashboard");

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-black/65
        border-b border-gray-900/20
        backdrop-blur-md
        shadow-[0_2px_16px_rgba(30,30,36,0.20)]
        transition
        supports-[backdrop-filter]:bg-black/70
      "
      aria-label="Site navigation"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
          className="
            font-extrabold text-2xl text-red-500 select-none tracking-tight
            hover:text-red-700 transition-colors
            bg-transparent border-none p-0 m-0 outline-none cursor-pointer
          "
          tabIndex={0}
        >
          UniNotes
        </button>
        {/* Navigation Links and CTA */}
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-gray-200 font-medium
                hover:text-red-400
                hover:underline underline-offset-4
                transition-colors
                focus:outline-none focus:underline
              "
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={goToDashboard}
            className="
              font-semibold rounded-md px-5 py-2 ml-1
              bg-red-500 text-white
              hover:bg-red-700
              focus:ring-2 focus:ring-red-400 focus:ring-offset-2
              shadow
              transition-colors
            "
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;