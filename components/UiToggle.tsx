"use client";

import { Button } from "@/components/ui/button";
import { Code2, History, PanelsTopLeft } from "lucide-react";
import { useState } from "react";

interface UiToggleProps {
  onToggleCode: (newToggleCodeValue: boolean) => void;
  onToggleHzSidebar: () => void;
}

const UiToggle: React.FC<UiToggleProps> = ({
  onToggleCode,
  onToggleHzSidebar,
}) => {
  const [isToggleCode, setIsToggleCode] = useState(true);

  const toggleGenerate = () => {
    setIsToggleCode(!isToggleCode);
    onToggleCode(!isToggleCode);
  };

  const sidebarHandler = () => {
    console.log("clicked");
    onToggleHzSidebar();
  };
  return (
    <div className="xFlex gap-4">
      <Button
        variant="outline"
        className=" font-normal xFlex gap-1 h-8 lg:hidden"
        onClick={sidebarHandler}
      >
        <span className="hidden s:block">History</span>{" "}
        <History className="w-4 h-4" />
      </Button>
      {isToggleCode ? (
        <Button
          className="text-gray-100 font-normal xFlex gap-1 h-8"
          onClick={toggleGenerate}
        >
          <span>Canvas</span> <PanelsTopLeft className="w-4 h-4" />
        </Button>
      ) : (
        <Button
          className="text-gray-100 font-normal xFlex gap-1 h-8"
          onClick={toggleGenerate}
        >
          <span>Code</span> <Code2 className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default UiToggle;
