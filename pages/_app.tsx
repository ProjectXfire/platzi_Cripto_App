import type { AppProps } from "next/app";
// Global Styles
import "@styles/global.css";
// Components
import { Layout } from "@components/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
