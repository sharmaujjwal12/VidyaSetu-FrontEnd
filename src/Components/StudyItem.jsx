
import Banner from "../Components/Banner.jpeg";

function StudyItem({ item ,setSubmitClick,setPageType}) {
  return (
    <>
    <div className="w-[18rem] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 mr-9">

        <img
          src={Banner}
          alt="study banner"
          className="w-full h-40 object-cover"
        />

        <div className="p-5 flex flex-col gap-3">

          <h5 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h5>

          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>

          <a
            href="#"
            className="mt-2 bg-indigo-500 text-white text-center py-2 rounded-lg font-medium hover:bg-indigo-600 transition duration-300" onClick={()=>{
              setPageType(item.title)
              setSubmitClick(true)}}
          >
            Start
          </a>

        </div>
      </div>
    </>
  );
}

export default StudyItem;