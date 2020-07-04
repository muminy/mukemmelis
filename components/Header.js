import Logotext from "./Logotext";
import Link from "next/link";
import Router from "next/router";

const MenuIconLines = () => {
  return (
    <div className={`menu_icon`}>
      <div className="line_1" />
      <div className="line_2" />
      <div className="line_3" />
    </div>
  );
};

export default function ({ admin }) {
  const logOut = () => {
    localStorage.clear();
    Router.push("/admin/login");
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <Logotext location={admin ? "/admin" : "/"} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIconLines />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="menu_list">
            {admin ? (
              <>
                <Link href="/admin/ilanlar">
                  <a className="menu_a h123456">İlanlar</a>
                </Link>
                <button
                  onClick={logOut}
                  className="menu_a h123456 cks btn_menu"
                >
                  Çıkış yap
                </button>
              </>
            ) : (
              <>
                <Link href="/isbul">
                  <a className="menu_a h123456">Find job</a>
                </Link>
                <Link href="/update">
                  <a className="menu_a h123456">Updates</a>
                </Link>
              </>
            )}
          </div>
          {admin ? null : (
            <Link href="/create">
              <a className="sirket h123456">Create Job</a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
