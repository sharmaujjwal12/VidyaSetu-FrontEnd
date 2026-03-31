function Footer() {

  // 🔥 Dynamic Footer Data (Easily Expandable)
  const footerSections = [
    {
      title: "Section",
      links: ["Home", "Features", "Pricing", "FAQs", "About"],
    },
    {
      title: "Section",
      links: ["Home", "Features", "Pricing", "FAQs", "About"],
    },
    {
      title: "Section",
      links: ["Home", "Features", "Pricing", "FAQs", "About"],
    },
  ];

  // 🔥 Reusable Footer Column Component
  const FooterColumn = ({ title, links }) => (
    <div>
      <h5 className="text-lg font-semibold text-white mb-4">{title}</h5>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 pt-16 pb-8 px-6 w-full">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Dynamic Sections */}
        {footerSections.map((section, index) => (
          <FooterColumn
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}

        {/* Newsletter Section */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">
            Subscribe to our newsletter
          </h5>
          <p className="text-gray-400 text-sm mb-4">
            Monthly digest of what's new and exciting from us.
          </p>

          <form>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="newsletter1"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white 
                           placeholder-gray-500 focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700
                           text-white font-medium transition-all duration-300
                           shadow-lg hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-500">
          © 2025 Company, Inc. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <svg width="22" height="22">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <svg width="22" height="22">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;