import Logotext from "./Logotext";
import Link from "next/link";

export default function () {
  return (
    <div className="n_footer">
      <div className="container">
        <div className="area_f">
          <div className="copr h123456">
            © 2020 Mukemmelis. Tüm hakları Saklıdır.
          </div>
          <div className="flat_area">
            <Link href="/privacy">
              <a className="footer_menu">
                Gizlilik politikası
              </a>
            </Link>
            <Link href="/bughata">
              <a className="footer_menu">Bug & Hata</a>
            </Link>
          </div>
          <Link href="//github.com/muminy">
            <a className="katkida_bulun h123456">Github</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
