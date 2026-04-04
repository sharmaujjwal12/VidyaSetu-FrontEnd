function Motivation({ items }) {
  console.log("Quotes Bhai : ", items);

  return (
    <article
      className="
      group
      relative 
      bg-white 
      border border-gray-200 
      rounded-3xl 
      p-6 
      shadow-sm 
      hover:shadow-2xl 
      transition-all 
      duration-300 
      hover:-translate-y-2
      overflow-hidden
      "
    >
      {/* Gradient Background Hover */}
      <div className="
      absolute 
      inset-0 
      bg-gradient-to-br 
      from-blue-50 
      to-indigo-50 
      opacity-0 
      group-hover:opacity-100 
      transition 
      duration-300
      "></div>

      {/* Quote Icon */}
      <div className="
      absolute 
      -top-3 
      left-5 
      text-5xl 
      text-blue-500 
      opacity-20 
      group-hover:opacity-40
      transition
      ">
        "
      </div>

      {/* Content */}
      <div className="relative z-10">
        
        <p className="
        text-gray-700 
        text-base 
        sm:text-lg 
        leading-relaxed 
        italic 
        mt-4
        ">
          {items.quote}
        </p>

        {/* Divider */}
        <div className="
        w-16 
        h-[3px] 
        bg-gradient-to-r 
        from-blue-500 
        to-indigo-500 
        rounded-full 
        mt-6
        "></div>

        {/* Author */}
        <div className="mt-4 flex justify-end">
          <p className="
          text-gray-900 
          font-semibold 
          text-sm 
          sm:text-base
          ">
            — {items.author}
          </p>
        </div>

      </div>
    </article>
  );
}

export default Motivation;