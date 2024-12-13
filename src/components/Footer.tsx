export default function Footer() {
  const primaryLinks = [
    { name: "NYTCo", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Work with us", href: "#" },
    { name: "Advertise", href: "#" },
    { name: "T Brand Studio", href: "#" },
    { name: "Your Ad Choices", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Terms of Sale", href: "#" },
    { name: "Site Map", href: "#" },
    { name: "Help", href: "#" },
  ];

  const secondaryLinks = [
    { name: "Subscriptions", href: "#" },
    { name: "Manage Privacy Preferences", href: "#" },
  ];

  return (
    <footer className="w-full px-4 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} New York Times clone created by{" "}
            <span className="text-gray-800 underline">Giacomo Pirani</span> for
            Start2Impact University
          </p>
        </div>

        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {primaryLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {secondaryLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
