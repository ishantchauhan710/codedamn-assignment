import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppStore from "../../context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  );
}
