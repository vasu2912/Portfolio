export default function Navigation() {
  const navItems = [
    { href: "#about", label: "about" },
    { href: "#education", label: "education" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-gray-800">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center space-x-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
