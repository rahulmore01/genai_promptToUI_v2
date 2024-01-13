import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HzSidebar = () => {
  const [isSidebarOpenHz, setIsSidebarOpenHz] = useState(true);

  const toggleSidebarHz = () => {
    setIsSidebarOpenHz(!isSidebarOpenHz);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-20 w-screen-4 border border-input !h-[78px]  flex justify-center items-center gap-2 overflow-x-auto px-8 bg-muted dark:bg-genDarkPrimary "
    >
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
      <div className="w-full max-w-24 bg-black/20 h-16 rounded-md border border-input py-2"></div>
    </motion.aside>
  );
};

const VSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={` sidebar border border-input ${
        isSidebarOpen ? "w-[200px]" : "w-[36px]"
      }  `}
    >
      {isSidebarOpen ? (
        <>
          <div className="w-full flex justify-between items-center text-secondary_color">
            <h6 className="text-xs font-medium text-opacity-90">History</h6>
            <ChevronsLeft
              className="cursor-pointer w-5 h-5"
              onClick={toggleSidebar}
            />
          </div>
          <div className="w-full bg-muted h-24 rounded-md border border-primary_color mt-5"></div>
        </>
      ) : (
        <ChevronsRight
          className="cursor-pointer w-5 h-5"
          onClick={toggleSidebar}
        />
      )}
    </motion.aside>
  );
};

export { HzSidebar, VSidebar };
