"use client";
import Nav from "@/components/Nav";

import { HzSidebar, VSidebar } from "@/components/SideBar";
import GenerateUi from "@/sections/GenerateUi";

import React, { useState } from "react";

const Page = () => {
  const [isToggleCode, setIsToggleCode] = useState(true);
  const [isHzSidebarVisible, setIsHzSidebarVisible] = useState(false);

  const handleToggleCode = (newToggleCodeValue: boolean) => {
    setIsToggleCode(newToggleCodeValue);
  };

  const handleToggleHzSidebar = () => {
    setIsHzSidebarVisible(!isHzSidebarVisible);
  };
  return (
    <main className="w-screen h-screen pb-4">
      <Nav />

      <div className="flex flex-col w-full h-[90%] items-center gap-6 justify-between">
        <div className="relative flex flex-col lg:flex-row w-screen h-full gap-3 justify-around items-center px-4 pt-4">
          <GenerateUi
            onToggleCode={handleToggleCode}
            onToggleHzSidebar={handleToggleHzSidebar}
            isHzSidebarVisible={isHzSidebarVisible}
          />
          {/* <GenerateUi onToggleSidebar={handleToggleSidebar} /> */}
          <div className=" h-full hidden lg:block">
            <VSidebar />
          </div>
          {isHzSidebarVisible ? (
            <div className="absolute top-[85%] xFlex w-screen-4  lg:hidden ">
              <HzSidebar />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
