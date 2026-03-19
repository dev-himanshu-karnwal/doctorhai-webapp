"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-[#475569]/40 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-10 max-h-[90vh] w-full max-w-[420px] scale-100 transform overflow-y-auto rounded-[24px] bg-white p-8 text-center shadow-2xl transition-all",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
