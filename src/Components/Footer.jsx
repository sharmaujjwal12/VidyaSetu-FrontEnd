function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-black text-gray-300">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand Section */}
          <div className="flex flex-col justify-start h-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              VidyaSetu
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Elevate your learning experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div ClassName="flex flex-col h-auto">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Home</span></li>
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">About</span></li>
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Services</span></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col h-auto">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Guides</span></li>
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Tutorials</span></li>
              <li><span className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">FAQ</span></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col h-auto justify-start">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              Get updates delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              />
              <button
                type="submit"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © 2025 VidyaSetu. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              Terms
            </span>
            <span className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;