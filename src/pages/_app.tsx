import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppStore, { useAppContext } from "../../context/AppContext";
import NavBar from "@/components/common/NavBar";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppStore>
      <NavBar />
      <Component {...pageProps} />
    </AppStore>
  );
}
