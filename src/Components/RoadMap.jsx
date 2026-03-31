import { useEffect ,useState} from "react";
import logo from "./images/VidyaSetuBanner.jpg";
import { getRoadMapFromServer } from "../services/Backend";

function RoadMap({item}) {
  const [loading, setLoading] = useState(false);
  const onViewDetailClicked=async(action,roadMapType)=>{
    action.preventDefault()
    try{
    let data = await getRoadMapFromServer(roadMapType)
    console.log("Data : ",data);
    let fileUrl = data[0]?.roadMapPdf;
    fileUrl = fileUrl.replace(/^\/+/, "");
    console.log(fileUrl)
     const link = document.createElement("a"); 
    link.href=`http://localhost:3000/${fileUrl}`;
    link.setAttribute("download","");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    }
  return (
    <div className="p-6 bg-gray-100">
      
      {/* Roadmaps Container */}
      <div className="">
        
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden">
          
          {/* Image */}
          <img
            src={logo}
            className="w-full h-40 object-cover"
            alt="RoadMaps"
          />

          {/* Content */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {item} RoadMap
            </h2>

            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={(action)=>onViewDetailClicked(action,item)}>
              View Roadmap
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RoadMap;