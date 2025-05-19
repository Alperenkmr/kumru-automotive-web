
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  images: string[];
  alt: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  alt,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position when changing images
  useEffect(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      // If zooming back to 1, reset position
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const navigateNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const navigatePrevious = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="p-0 max-w-4xl w-full h-[80vh] bg-black/95 border-none"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-between p-4 absolute top-0 left-0 right-0 z-10 bg-black/50">
          <div className="text-white text-sm md:text-base">
            {alt[currentIndex]} ({currentIndex + 1}/{images.length})
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleZoomIn} 
              className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button 
              onClick={handleZoomOut} 
              className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20"
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <DialogClose asChild>
              <button className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20">
                <X className="w-5 h-5" />
              </button>
            </DialogClose>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-8 pt-16">
          <div
            className={cn(
              "relative w-full h-full flex items-center justify-center",
              isDragging ? "cursor-grabbing" : zoomLevel > 1 ? "cursor-grab" : "cursor-default",
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <img
              src={images[currentIndex]}
              alt={alt[currentIndex]}
              className="max-h-full max-w-full object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                pointerEvents: zoomLevel > 1 ? "none" : "auto",
              }}
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={navigatePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={navigateNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 z-20"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
