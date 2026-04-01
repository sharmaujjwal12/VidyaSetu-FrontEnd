function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Python Basics",
      price: "Free",
      image: "🐍",
      description: "Learn Python programming fundamentals",
    },
    {
      id: 2,
      name: "Web Development",
      price: "$49.99",
      image: "💻",
      description: "Master HTML, CSS, and JavaScript",
    },
    {
      id: 3,
      name: "React Mastery",
      price: "$59.99",
      image: "⚛️",
      description: "Advanced React and modern web development",
    },
    {
      id: 4,
      name: "Data Science",
      price: "$69.99",
      image: "📊",
      description: "Learn data analysis and machine learning",
    },
    {
      id: 5,
      name: "Mobile Development",
      price: "$54.99",
      image: "📱",
      description: "Build iOS and Android applications",
    },
    {
      id: 6,
      name: "Full Stack Bundle",
      price: "$99.99",
      image: "📚",
      description: "Complete full-stack development course",
    },
  ];

  return (
    <div className="min-h-screen flex flex-wrap py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-red-600 bg-red-100 px-4 py-2 rounded font-bold">Page Is Not Working Currently</h1>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our exquisite collection of premium products crafted with
            elegance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Product Image Container */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-48 flex items-center justify-center text-6xl group-hover:from-pink-200 group-hover:to-purple-200 transition-colors duration-300">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    {product.price}
                  </span>
                  <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-md transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
