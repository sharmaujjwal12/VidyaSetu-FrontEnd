import { useState } from "react";
import styles from "./SideBar.module.css";

function SideBar({
  homePage,
  homePageHandler,
  liveClass,
  liveClassHandler,
  freeTest,
  freeTestHandler,
  paidTest,
  paidTestHandler,
  recordedClass,
  RecordedClassHandler,
  customerCare,
  customerCareHandler,
  freeTestHost,
  freeTestHostHandler,
  role,
}) {
  const [open, setOpen] = useState(false);

  // Reusable Nav Item
  const SideNavItem = ({ active, onClick, icon, label }) => (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
          setOpen(false); // mobile me auto close
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
        transition-all duration-300 group
        ${
          active
            ? "bg-white text-black shadow-md scale-105"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <svg
          width="18"
          height="18"
          className="transition-transform group-hover:scale-110"
        >
          <use xlinkHref={icon}></use>
        </svg>
        <span className="text-sm font-medium">{label}</span>
      </a>
    </li>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
  className="
  lg:hidden fixed top-4 left-4 z-[60]
  bg-gray-900 text-white 
  p-2 rounded-lg shadow-lg
  transition-all duration-300
  hover:bg-gray-800
  hover:scale-110
  hover:shadow-xl
"
  onClick={() => setOpen(!open)}
>
  ☰
</button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className="
            absolute left-0 top-0
            h-full w-64
            p-5 flex flex-col
            bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950
            border-r border-gray-700 shadow-2xl
            z-50
          "
          >
            <SidebarContent />
          </div>
        </div>
      )}

     {/* Desktop Sidebar */}
<div
  className="
  hidden lg:flex
  fixed top-0 left-0
  h-screen
  w-[220px] md:w-[250px] xl:w-[280px]
  flex-shrink-0
  p-5 flex-col
  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950
  border-r border-gray-700 shadow-2xl
  z-40
"
>
  <SidebarContent />
</div>
    </>
  );

  // Sidebar Content
  function SidebarContent() {
    return (
      <>
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 mb-6 text-white text-xl font-bold tracking-wide hover:scale-105 transition-transform"
        >
          <svg width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span>Vidya Setu</span>
        </a>

        <div className="border-t border-gray-700 mb-6"></div>

        {/* Navigation */}
        <ul className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {role === "user" && (
            <>
              <SideNavItem
                active={homePage === true}
                onClick={homePageHandler}
                icon="#home"
                label="Home"
              />

              <SideNavItem
                active={liveClass === true}
                onClick={liveClassHandler}
                icon="#speedometer2"
                label="Live Class"
              />

              <SideNavItem
                active={paidTest === true}
                onClick={paidTestHandler}
                icon="#table"
                label="Weekly Paid Mock Test"
              />

              <SideNavItem
                active={freeTest === true}
                onClick={freeTestHandler}
                icon="#grid"
                label="Weekly Free Mock Test"
              />

              <SideNavItem
                active={recordedClass === true}
                onClick={RecordedClassHandler}
                icon="#grid"
                label="Recorded Class"
              />

              <SideNavItem
                active={customerCare === true}
                onClick={customerCareHandler}
                icon="#people-circle"
                label="Customers"
              />
            </>
          )}

          <SideNavItem
            active={freeTestHost === true}
            onClick={freeTestHostHandler}
            icon="#grid"
            label="Host Free Mock Test"
          />
        </ul>

        <div className="border-t border-gray-700 mt-6"></div>

        {/* Footer */}
        <div className="pt-4 text-xs text-gray-500 text-center">
          © 2026 Prep Setu
        </div>
      </>
    );
  }
}

export default SideBar;