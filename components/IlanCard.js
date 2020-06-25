import Link from "next/link";
import slugify from "slugify";

export default function ({
  location,
  is,
  firma,
  id,
  src,
  slug,
  deneyim,
  tip
}) {
  return (
    <Link
      href="/ilan/[id]/[slug]"
      as={`/ilan/${id}/${slug}`}
    >
      <a className="ilan_a_card">
        <div className="header_ilan">
          <img src={src} />
          <header>
            <h3>{is}</h3>
            <div className="firma_adi">{firma}</div>
          </header>
        </div>
        <div className="firma_infos">
          <div className="aciklama_ii">
            <div className="lo">Şehir</div>
            <div className="val">{location}</div>
          </div>
          <div className="aciklama_ii">
            <div className="lo">Deneyim</div>
            <div className="val">{deneyim}</div>
          </div>
          <div className="aciklama_ii">
            <div className="lo">Çalışmna tipi</div>
            <div className="val">{tip}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
