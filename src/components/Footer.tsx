"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [pageViews, setPageViews] = useState<number | null>(null);

  useEffect(() => {
    // Increment page views when component mounts
    const incrementViews = async () => {
      try {
        const response = await fetch("/api/views");
        const data = await response.json();
        setPageViews(data.views);
      } catch (error) {
        console.error("Error fetching page views:", error);
      }
    };

    incrementViews();
  }, []);

  const socialLinks = [
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/vasukandagatla/",
    },
    {
      label: "x",
      href: "https://x.com/vasukandagatla",
    },
    {
      label: "github",
      href: "https://github.com/vasu2912",
    },
    {
      label: "view source",
      href: "https://github.com/vasu2912/portfolio",
    },
  ];

  return (
    <footer className="max-w-2xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors border-b-2 border-transparent hover:border-gray-400"
          >
            ↗ {link.label}
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center text-gray-400 gap-4">
        <p>© 2024 Vasu K</p>
        <span className="text-gray-500">•</span>
        <p className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
          {pageViews !== null
            ? `${pageViews.toLocaleString()} page views`
            : "Loading..."}
        </p>
      </div>
    </footer>
  );
}
