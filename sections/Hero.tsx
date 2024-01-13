"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";

import { slideInFromTop } from "@/lib/motion";
import { Input } from "@/components/ui/input";
import { Forward } from "lucide-react";
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

// "use client";

// import { useChat } from "ai/react";
// import { motion } from "framer-motion";
// import InputPrompt from "@/components/InputPrompt";
// import Nav from "@/components/Nav";

// import { slideInFromTop } from "@/lib/motion";

// export default function Hero() {
//   return (
//     <motion.main
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="w-full h-full text-center"
//     >
//       {/* <Nav /> */}
//       {/* <Navbar /> */}

//       <div className="mt-[6%] flex flex-col justify-center items-center gap-6">
//         <motion.h1
//           variants={slideInFromTop(0.5)}
//           className="primary-font text-[53px] font-extrabold text-primary leading-tight tracking-[-0.5px] flex flex-col !z-10"
//         >
//           Elevate Development Experience with
//           <span>
//             {" "}
//             Prompt to
//             <span className="relative ">
//               <img
//                 className="absolute left-2 top-[-70px] h-56 w-[540px] -z-[10]"
//                 src="/circle.svg"
//                 alt=""
//               />{" "}
//               UI Generator
//             </span>
//           </span>
//         </motion.h1>
//         <motion.p
//           variants={slideInFromTop(0.8)}
//           className=" text-lg font-normal flex flex-col text-secondary mt-4 mb-6 !z-10 opacity-80"
//         >
//           <span>
//             Join the top 0.1% of developers over the world who streamline their
//             workflow with our innovative tool.
//           </span>
//           <span>
//             Effortlessly generate custom user interfaces, saving you valuable
//             development time.
//           </span>
//         </motion.p>

//         {/* <InputPrompt /> */}
//       </div>
//     </motion.main>
//   );
// }
