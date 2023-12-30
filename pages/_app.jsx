import StateContextProvider from "@/context/StateContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  );
}
