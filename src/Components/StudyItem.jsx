import Banner from "../Components/Banner.jpeg";

function StudyItem({ item, setSubmitClick, setPageType }) {
  return (
    <>
      <div className="w-full sm:w-80 md:w-72 lg:w-80 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform border border-gray-100 m-2">
        <div className="relative overflow-hidden h-40 sm:h-48">
          <img
            src={Banner}
            alt="study banner"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <h5 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent line-clamp-2">
            {item.title}
          </h5>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 font-medium">
            {item.description}
          </p>

          <button
            onClick={() => {
              setPageType(item.title);
              setSubmitClick(true);
            }}
            className="mt-auto w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
          >
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
}

export default StudyItem;
