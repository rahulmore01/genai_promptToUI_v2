"use client";
import React, { useState, useContext } from "react";
import InputPrompt from "@/components/InputPrompt";
import UiToggle from "@/components/UiToggle";

import CodeView from "@/components/CodeView";
import { AnimatePresence, motion } from "framer-motion";
import { rotateAroundY } from "@/lib/motion";
import { ChangeEvent, FormEvent } from "react";
import { Message } from "ai";

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
    // Update code when toggling
    if (!newToggleCodeValue) {
      // Fetch or update the code dynamically based on your requirements
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
      {/* Generate UI options */}
      <div className="flex justify-between items-center px-4 pt-2">
        <div className="flex justify-start items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <Badge className="bg-muted text-gray-600 font-normal py-1 hover:bg-muted  dark:text-gray-300 hidden s:block">
            Some sample prompt
          </Badge>
          {/* </h6> */}
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
              {/* <CodeView /> */}
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

// "use client";
// import React, { useState, useContext } from "react";
// import InputPrompt from "@/components/InputPrompt";
// import UiToggle from "@/components/UiToggle";
// import UiView from "@/components/UiView";
// import CodeView from "@/components/CodeView";
// import { AnimatePresence, motion } from "framer-motion";
// import { rotateAroundY } from "@/lib/motion";

// interface GenerateUiProps {
//   onToggleCode: (newToggleCodeValue: boolean) => void;
// }

// const GenerateUi: React.FC<GenerateUiProps> = ({ onToggleCode }) => {
//   const [isToggleCode, setIsToggleCode] = useState(true);

//   const [code, setCode] = useState<string>(
//     // Initial code or a placeholder
//     `import React from "react";\n\nconst Card = () => {\n  // Dummy data for the card\n  const title = "Example Card";\n  const description = "This is a simple card component in React with Tailwind CSS.";\n  const imageUrl = "https://example.com/example-image.jpg";\n\n  return (\n    <div className="max-w-sm rounded overflow-hidden shadow-lg">\n      <img className="w-full" src={imageUrl} alt={title} />\n      <div className="px-6 py-4">\n        <div className="font-bold text-xl mb-2">{title}</div>\n
//     <div className="font-bold text-xl mb-2">{title}</div>\n
//     <div className="font-bold text-xl mb-2">{title}</div>\n
//     <div className="font-bold text-xl mb-2">{title}</div>\n

//     <p className="text-gray-700 text-base">{description}</p>\n      </div>\n    </div>\n  );\n};\n\nexport default Card`
//   );

//   const handleToggleCode = (newToggleCodeValue: boolean) => {
//     setIsToggleCode(newToggleCodeValue);
//     // Update code when toggling
//     if (!newToggleCodeValue) {
//       // Fetch or update the code dynamically based on your requirements
//       setCode(code);
//     }
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0, x: 200 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col bg-primary_light_color bg-opacity-15 h-full w-full rounded-lg"
//     >
//       {/* Generate UI options */}
//       <div className="flex justify-between items-center p-3">
//         <div className="flex justify-start items-center gap-2">
//           <div className="h-9 w-9 bg-white rounded-full border border-primary_color border-opacity-60"></div>
//           <h6 className="text-xs font-normal text-opacity-90 px-4 py-2 bg-gray-200 rounded-lg">
//             Some sample prompt
//           </h6>
//         </div>
//         <UiToggle onToggleCode={handleToggleCode} />
//       </div>
//       {/* Generate UI flip functionality */}
//       <div className="w-full h-[78%] text-primary p-4 flex flex-col items-center justify-between gap-10">
//         <AnimatePresence>
//           {isToggleCode ? (
//             <motion.div
//               key="codeview"
//               variants={rotateAroundY()}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.8 }}
//               className="h-full w-full "
//             >
//               <CodeView code={code} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="uiview"
//               variants={rotateAroundY()}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.8 }}
//               className="h-full w-full "
//             >
//               <UiView />
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <div className="w-full flex flex-col justify-center items-center ">
//           {/* <InputPrompt /> */}
//           <InputPrompt
//             input={input}
//             changeHandler={handleInputChange}
//             submitHandler={handleSubmit}
//           />
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default GenerateUi;
