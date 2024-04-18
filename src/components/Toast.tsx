"use client";

import toast from "react-hot-toast";

const ToastBtn = () => {
  const notify = () =>
    toast.success("Thank you for sending us a message!", {
      position: "top-center",
    });
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
};

export default ToastBtn;
