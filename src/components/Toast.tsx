"use client";

import toast from "react-hot-toast";

const ToastBtn = () => {
  const notify = () =>
    toast.success("Here is your toast", {
      position: "top-center",
    });
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
};

export default ToastBtn;
