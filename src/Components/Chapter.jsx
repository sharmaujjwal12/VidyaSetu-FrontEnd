function Chapter({ item ,setLectureType,setVideosPage}) {
  const items = Array.isArray(item) ? item : [item];

  return (
      <div className="">
        <div className="mr-5">
          {items.map((lectureItem, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24 sm:h-28 md:h-32 flex items-center justify-center">
                <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                  📚
                </span>
              </div>
              <div className="p-6 sm:p-7 md:p-8 pr-4 sm:pr-5 md:pr-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {lectureItem.lectureType}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 line-clamp-2">
                  Watch comprehensive video lectures on this subject
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base" onClick={()=>{
                  setLectureType(lectureItem.lectureType)
                  setVideosPage(true)}}>
                  View Lectures
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Chapter;
