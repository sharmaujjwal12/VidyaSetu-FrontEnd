function LatestNew({ news }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
      
      {/* Title */}
      <p className="text-gray-800 font-medium text-base leading-snug">
        {news.title}
      </p>

      {/* Link */}
      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-sm text-blue-600 hover:underline"
      >
        Read more →
      </a>

    </div>
  );
}

export default LatestNew;