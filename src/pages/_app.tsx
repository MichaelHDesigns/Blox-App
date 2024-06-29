import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import SideNav from "../components/SideNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </DarkModeProvider>
  );
}