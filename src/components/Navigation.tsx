"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the '#' from the id to get the section name
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      }
    );

    // Observe all sections
    document.querySelectorAll("section, header").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#about", label: "about" },
    { href: "#education", label: "education" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm bg-background/80 ${
        isScrolled ? "border-b border-gray-800" : ""
      }`}
    >
      <div className="max-w-2xl mx-auto px-2 sm:px-4">
        <div className="flex justify-center space-x-2 sm:space-x-6 py-2 sm:py-4 text-sm sm:text-base">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-gray-400 transition-colors border-b-2 ${
                activeSection === item.href.slice(1)
                  ? "border-gray-400"
                  : "border-transparent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
