import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function ({ children, title }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} mukemmelis.com
        </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
