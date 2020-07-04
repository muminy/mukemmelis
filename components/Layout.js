import Head from "next/head";
import Header, { AdminHeader } from "./Header";
import Footer from "./Footer";

export default function ({ children, title, admin, header }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} mukemmelis.com
        </title>
      </Head>
      <Header admin={admin} />
      <section>{children}</section>
      <Footer />
    </React.Fragment>
  );
}
