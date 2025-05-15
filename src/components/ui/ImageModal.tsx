
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full p-1 sm:p-2">
        <button 
          onClick={onClose} 
          className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
        >
          <X className="h-6 w-6 text-white bg-black/30 rounded-full p-1" />
          <span className="sr-only">Close</span>
        </button>
        <div className="overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
