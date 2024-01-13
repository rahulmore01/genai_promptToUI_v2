"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";

import { slideInFromTop } from "@/lib/motion";
import InputPrompt from "@/components/InputPrompt";

const Hero = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full  relative z-10"
      >
        <Nav />
        <div className="mt-[8%] yFlex gap-12">
          <motion.h1
            variants={slideInFromTop(0.1)}
            className="primary-font scroll-m-20 text-2xl s:text-4xl text-center font-extrabold  lg:text-5xl yFlex gap-2 px-8 "
          >
            Elevate Development Experience with
            <span>Prompt to UI Generator</span>
          </motion.h1>
          <InputPrompt />
        </div>
      </motion.main>
    </>
  );
};

export default Hero;
