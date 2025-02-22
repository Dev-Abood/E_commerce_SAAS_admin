"use client";

/*
 * note(toast)-1
 * npm i react-hot-toast
 * */

/*
 * note(toast)-2
 * create the toast-provider.tsx file
 * */

/*
 * note(toast)-3
 * add the ToastProvider to app/layout.tsx
 * */

/*
 * import { toast } from "react-hot-toast";
 * use toast.success or toast.error in components
 * */

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return <Toaster />;
};

export default ToastProvider;
