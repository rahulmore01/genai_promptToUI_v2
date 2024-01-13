"use client";
import Hero from "@/sections/Hero";

import React from "react";

const page = () => {
  return (
    <>
      <div className="relative h-screen w-screen bg-background">
        {/* First radial gradient */}
        <div className="fixed  top-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_0.8px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#222223_1px,transparent_0.8px)]"></div>

        <Hero />
      </div>
    </>
  );
};

export default page;
