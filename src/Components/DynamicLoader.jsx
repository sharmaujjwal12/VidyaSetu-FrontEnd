import { motion } from "framer-motion";

function DynamicLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center 
    bg-black/70 backdrop-blur-md px-4">

      <div className="flex flex-col items-center 
      gap-5 sm:gap-6 
      p-6 sm:p-8 
      rounded-2xl 
      bg-gray-900/80 
      shadow-2xl
      w-full 
      max-w-xs sm:max-w-sm md:max-w-md">

        {/* Animated Spinner */}
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          border-4 border-blue-500 
          border-t-transparent 
          rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
          className="text-white 
          text-base sm:text-lg md:text-xl 
          font-semibold 
          tracking-wide 
          text-center"
        >
          Processing Request...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-blue-500 h-2"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>

      </div>
    </div>
  );
}

export default DynamicLoader;