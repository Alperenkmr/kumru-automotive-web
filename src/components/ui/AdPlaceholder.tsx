
import React from "react";
import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  width = 728,
  height = 90,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-gray-200 flex items-center justify-center text-gray-500 font-medium",
        className
      )}
      style={{
        width: width ? `${width}px` : "100%",
        height: `${height}px`,
      }}
    >
      Ad Unit: {width}×{height}
    </div>
  );
};

export default AdPlaceholder;
