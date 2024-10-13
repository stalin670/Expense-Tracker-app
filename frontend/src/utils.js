import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  // toast.success(msg, {
  //   position: "top-right",
  // });
};

export const handleError = (msg) => {
  // toast.error(msg, {
  //   position: "top-right",
  // });
};

export const APIUrl =
  process.env.REACT_APP_API_URL ||
  "https://expense-tracker-app-2qpc.onrender.com/api";
