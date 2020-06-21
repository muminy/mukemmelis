import Logotext from "./Logotext";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon } from "../constant/iconsvg";

export default function () {
  const [dropdown, setDropdown] = useState(false);
  const [responsiveClass, setResponsiveClass] = useState(
    `collapse navbar-collapse ${dropdown ? "show" : null}`,
  );
  useEffect(() => {
    setResponsiveClass(
      `collapse navbar-collapse ${
        dropdown ? "show" : null
      }`,
    );
  }, [dropdown]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Logotext />
        <button
          className="resp_btn"
          type="button"
          onClick={() => setDropdown(!dropdown)}
        >
          <MenuIcon size={15} color="#111" />
        </button>
        <div className={responsiveClass}>
          <div className="menu_list">
            <Link href="/">
              <a className="menu_a">Anasayfa</a>
            </Link>
            <Link href="/isbul">
              <a className="menu_a">İş bul</a>
            </Link>
            <Link href="/update">
              <a className="menu_a">Güncellemeler</a>
            </Link>
          </div>
          <Link href="/create">
            <a className="sirket">İşveren</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
