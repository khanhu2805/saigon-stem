"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  useEffect(() => {
    console.log("Toaster: Current toasts:", toasts); // Debug toasts array
  }, [toasts]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="bg-[#024AAE] text-white border-[#40C262] p-4 rounded-md shadow-lg"
          >
            <div className="grid gap-1">
              {title && <ToastTitle className="font-bold">{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-white hover:text-[#40C262]" />
          </Toast>
        );
      })}
      <ToastViewport className="fixed top-4 right-4 z-[10000] w-[320px] max-w-[90vw]" />
    </ToastProvider>
  );
}

// Force visibility
