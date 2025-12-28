"use client";
import '../i18n/i18n.client';

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer, Bounce } from "react-toastify";
import MediaModalWrapper from "../components/app/MediaModalWrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <MediaModalWrapper />
      <ToastContainer transition={Bounce} />
    </Provider>
  );
}