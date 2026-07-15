"use client";

import { useEffect } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Extend Window interface
declare global {
  interface Window {
    showToast: (message: string, type?: "success" | "error" | "info") => void;
  }
}

const ToastManager = () => {
  useEffect(() => {
    // Set up global toast function
    window.showToast = (message: string, type: "success" | "error" | "info" = "info") => {
      const options: ToastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      };

      switch (type) {
        case "success":
          toast.success(message, options);
          break;
        case "error":
          toast.error(message, options);
          break;
        default:
          toast.info(message, options);
          break;
      }
    };
  }, []);

  return <ToastContainer />;
};

export default ToastManager;