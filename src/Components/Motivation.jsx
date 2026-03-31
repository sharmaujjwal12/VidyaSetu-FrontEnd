function Motivation({ item }) {
  return (
    <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 
    rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 
    hover:-translate-y-2">

      {/* Quote Icon */}
      <div className="text-5xl text-blue-400 absolute -top-4 left-4">
        “
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-lg leading-relaxed italic mt-4">
        {item.quote}
      </p>

      {/* Divider */}
      <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>

      {/* Author */}
      <div className="mt-4 flex justify-end">
        <p className="text-gray-900 font-semibold text-md">
          — {item.author}
        </p>
      </div>

    </div>
  );
}

export default Motivation;