import Link from "next/link";

export default function Footer() {
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
      <p className="text-center text-gray-400">© 2024 Vasu Kandagatla</p>
    </footer>
  );
}
