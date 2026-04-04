import { useState } from "react";
import { getRoadMapFromServer } from "../services/Backend";

function RoadMap({ item }) {
  const [loading, setLoading] = useState(false);
  const [roadMaps, setRoadMaps] = useState([]);

  const openRoadmap = (fileUrl) => {
    if (!fileUrl) {
      alert("No roadmap file available.");
      return;
    }

    let fullUrl = fileUrl;
    if (!fullUrl.startsWith("http")) {
      fullUrl = `${window.location.origin}/${fullUrl.replace(/^\/+/, "")}`;
    }

    const link = document.createElement("a");
    link.href = fullUrl;
    link.target = "_blank";
    link.download = fullUrl.split("/").pop().split("?")[0];
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const onViewDetailClicked = async (event, roadMapType) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await getRoadMapFromServer(roadMapType);

      if (!data || data.length === 0) {
        alert("No roadmap found!");
        return;
      }

      const validRoadMaps = data.filter((entry) => entry?.roadMapPdf);
      if (validRoadMaps.length === 0) {
        alert("No roadmap found!");
        return;
      }

      setRoadMaps(validRoadMaps);
    } catch (err) {
      console.error("Error fetching roadmaps:", err);
      alert("Something went wrong while loading the roadmaps.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-h-[calc(100vh-2rem)]">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-[28px] border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="p-6 sm:p-7">
            <span className="inline-flex rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-3 py-1 text-xs font-semibold mb-3">
              {item} RoadMap
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
              Download Your {item} Learning Path
            </h2>
            <p className="text-sm text-slate-600 leading-6 mb-5">
              A compact modular roadmap card for fast access. Load available roadmaps and open them instantly.
            </p>

            {roadMaps.length > 0 && (
              <div className="space-y-4 mb-6">
                {roadMaps.map((roadMap, index) => {
                  const pdfUrl = roadMap.roadMapPdf;
                  const fileName =
                    pdfUrl.split("/").pop().split("?")[0] ||
                    `roadmap-${index + 1}.pdf`;
                  const label = roadMap.title || roadMap.name || fileName;

                  return (
                    <div
                      key={`${fileName}-${index}`}
                      className="rounded-3xl bg-slate-50 p-4 border border-slate-200 flex flex-col gap-3"
                    >
                      <div>
                        <p className="text-sm text-slate-500">
                          Roadmap {index + 1}
                        </p>
                        <p className="text-slate-800 font-medium">{label}</p>
                      </div>
                      <button
                        className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
                        type="button"
                        onClick={() => openRoadmap(pdfUrl)}
                      >
                        Open
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <button
              className="w-full inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-xl transition disabled:cursor-not-allowed disabled:opacity-70"
              onClick={(event) => onViewDetailClicked(event, item)}
              disabled={loading}
            >
              {loading ? "Loading roadmaps..." : "View Roadmaps"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
