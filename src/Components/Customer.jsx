function Customer() {
  return (
    <div className="min-h-screen py-12 flex flex-wrap px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Customer Support
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help your learning journey
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-blue-500 opacity-50">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-6">
              Get instant support from our team. Available 24/7 for your
              queries.
            </p>
            <button
              disabled
              className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold cursor-not-allowed"
            >
              Not Available
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-purple-500">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Email Support
            </h3>
            <p className="text-gray-600 mb-6">
              us3566650@gmail.com - Send us detailed questions. We'll respond
              within 24 hours.
            </p>
            <a
              href="mailto:us3566650@gmail.com"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
            >
              Send Email
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-indigo-500">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Mobile Support
            </h3>
            <p className="text-gray-600 mb-6">
              Call us directly for instant assistance. Quick and reliable
              support.
            </p>
            <a
              href="tel:9936097521"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Quick Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 9936097521</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600">Lucknow UttarPradesh , India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-4 rounded-full">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Hours</h4>
                <p className="text-gray-600">Mon - Fri, 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Question?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our support team is ready to assist you anytime
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customer;
