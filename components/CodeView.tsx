"use client";
import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeView = () => {
  const [copy, setCopy] = useState(false);

  const code =
    // Initial code or a placeholder
    `import React from "react";\n\nconst Card = () => {\n  // Dummy data for the card\n  const title = "Example Card";\n  const description = "This is a simple card component in React with Tailwind CSS.";\n  const imageUrl = "https://example.com/example-image.jpg";\n\n  return (\n    <div className="max-w-sm rounded overflow-hidden shadow-lg">\n      <img className="w-full" src={imageUrl} alt={title} />\n      <div className="px-6 py-4">\n        <div className="font-bold text-xl mb-2">{title}</div>\n 
    <div className="font-bold text-xl mb-2">{title}</div>\n 
    <div className="font-bold text-xl mb-2">{title}</div>\n  
    <div className="font-bold text-xl mb-2">{title}</div>\n 
    
    <p className="text-gray-700 text-base">{description}</p>\n      </div>\n    </div>\n  );\n};\n\nexport default Card`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className="rounded-md overflow-x-hidden border border-input">
      <div className="flex justify-between text-gray-200 px-[25px] text-xs font-normal items-center bg-genDarkPrimary/95 border-b border-input  rounded-t-md">
        <p className="py-3 text-gray-300 font-normal cursor-pointer">
          Example code
        </p>
        <div onClick={handleCopy}>
          <button className="py-1 inline-flex items-center gap-1 text-gray-300 font-normal hover:text-primary">
            <span className="">
              {copy ? (
                <ClipboardCheck className="h-4 w-4" />
              ) : (
                <Clipboard className="h-4 w-4" />
              )}
            </span>
            {copy ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          width: "100%",
          padding: "25px",
          fontSize: "12px",
          whiteSpace: "pre-wrap",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "60vh",
          borderRadius: "0px 0px 8px 8px",
        }}
        className="!bg-secondary "
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeView;
