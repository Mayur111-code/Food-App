import { toast } from "react-toastify";

export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
  });
};
