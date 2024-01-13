"use client";
import React, { useState, useContext } from "react";
import InputPrompt from "@/components/InputPrompt";
import UiToggle from "@/components/UiToggle";

import CodeView from "@/components/CodeView";
import { AnimatePresence, motion } from "framer-motion";
import { rotateAroundY } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";
import UiView from "@/components/UiView";

interface GenerateUiProps {
  onToggleCode: (newToggleCodeValue: boolean) => void;
  onToggleHzSidebar: () => void;
  isHzSidebarVisible: boolean;
}
const GenerateUi: React.FC<GenerateUiProps> = ({
  onToggleCode,
  onToggleHzSidebar,
  isHzSidebarVisible,
}) => {
  const [isToggleCode, setIsToggleCode] = useState(true);

  const handleToggleCode = (newToggleCodeValue: boolean) => {
    setIsToggleCode(newToggleCodeValue);
    if (!newToggleCodeValue) {
      // setCode(code);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col  bg-opacity-15 h-full w-full rounded-lg border border-input"
    >
      <div className="flex justify-between items-center px-4 pt-2">
        <div className="flex justify-start items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <Badge className="bg-muted text-gray-600 font-normal py-1 hover:bg-muted  dark:text-gray-300 hidden s:block">
            Some sample prompt
          </Badge>
        </div>
        <UiToggle
          onToggleCode={onToggleCode}
          onToggleHzSidebar={onToggleHzSidebar}
        />
      </div>
      {/* Generate UI flip functionality */}
      <div className="w-full h-[78%] text-primary p-4 flex flex-col items-center justify-between gap-10">
        <AnimatePresence>
          {isToggleCode ? (
            <motion.div
              key="codeview"
              variants={rotateAroundY()}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="h-full w-full "
            >
              <CodeView />
            </motion.div>
          ) : (
            <motion.div
              key="uiview"
              variants={rotateAroundY()}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="h-full w-full "
            >
              <UiView />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full  flex flex-col justify-center items-center ">
          <InputPrompt />
        </div>
      </div>
    </motion.section>
  );
};

export default GenerateUi;
