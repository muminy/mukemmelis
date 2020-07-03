import Head from "next/head";
import Header, { AdminHeader } from "./Header";
import Footer from "./Footer";

export default function ({ children, title, admin }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} mukemmelis.com
        </title>
      </Head>
      <Header admin={admin} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
