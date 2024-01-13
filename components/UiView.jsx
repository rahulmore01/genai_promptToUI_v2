// "use client";
// import React, { useEffect, useRef } from "react";
// import ReactDOMServer from "react-dom/server";
// import { render } from "jsx-to-html";

// // Define the UiViewProps interface
// // interface UiViewProps {
// //   code: string;
// // }

// // Define the UiView component
// const UiView = ({ code }) => {
//   const iframeRef = useRef();
//   // const iframeRef = useRef < HTMLIFrameElement > null;

//   useEffect(() => {
//     const iframeDocument = iframeRef.current?.contentDocument;

//     // console.log(htmlString); // Outputs: <div class="hello">Hello World</div>

//     if (iframeDocument) {
//       const jsxElement = code;
//       const htmlString = render(jsxElement);

//       // Set the content of the iframe with the HTML string
//       iframeDocument.open();
//       iframeDocument.write(`
//         <html>
//           <body>${htmlString}</body>
//         </html>
//       `);
//       iframeDocument.close();
//     }
//   }, [code]);

//   return (
//     <div className="overflow-y-scroll">
//       <iframe
//         className="rounded-md w-full h-full"
//         title="UI Preview"
//         ref={iframeRef}
//         frameBorder={0}
//         srcDoc=""
//       />
//     </div>
//   );
// };

// export default UiView;

import React from "react";

const UiView = () => {
  return (
    <div className="object-fill">
      <img className="rounded-md " src="/ui.png" alt="ui" />;
    </div>
  );
};

export default UiView;
