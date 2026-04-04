function LatestNew({ news }) {
  return (
    <article className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white border border-gray-200 rounded-3xl p-5 shadow-sm hover:shadow-lg transition duration-300 ease-out flex flex-col justify-between min-h-[220px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Latest
          </span>
          {news.date && (
            <span className="text-xs text-gray-400">{news.date}</span>
          )}
        </div>

        <h3 className="text-gray-900 font-semibold text-lg sm:text-xl leading-snug">
          {news.title}
        </h3>

        {news.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
            {news.description}
          </p>
        )}
      </div>

      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-between rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <span>Read more</span>
        <span className="ml-2">→</span>
      </a>
    </article>
  );
}

export default LatestNew;
