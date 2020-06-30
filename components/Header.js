import Logotext from "./Logotext";
import Link from "next/link";

const MenuIconLines = () => {
  return (
    <div className={`menu_icon`}>
      <div className="line_1" />
      <div className="line_2" />
      <div className="line_3" />
    </div>
  )
};

export default function () {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <Logotext />
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
            <Link href="/isbul">
              <a className="menu_a">Find job</a>
            </Link>
            <Link href="/update">
              <a className="menu_a">Updates</a>
            </Link>
          </div>
          <Link href="/create">
            <a className="sirket">Create Job</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function AdminHeader() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <Logotext />
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
            <Link href="/admin/ilanlar">
              <a className="menu_a">İlanlar</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
