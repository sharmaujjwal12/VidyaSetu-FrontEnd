function Loader() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Outer Circle */}
      <div className="relative">
        {/* Spinning Ring */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Inner Pulse Dot */}
        <div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full 
        transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
        ></div>
      </div>
    </div>
  );
}

export default Loader;
