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
      {admin ? <AdminHeader /> : <Header />}
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
