
import React, { useState } from "react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("w-full mb-8", className)}
    >
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-kumru-navy">{title}</h2>
        <CollapsibleTrigger asChild>
          <button className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronDown 
              className={cn(
                "h-6 w-6 text-kumru-navy transition-transform duration-200",
                isOpen && "transform rotate-180"
              )} 
            />
            <span className="sr-only">Toggle</span>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4 px-1">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleSection;
