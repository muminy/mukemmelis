import Layout from "./Layout";
import { LinkIcon } from "../constant/iconsvg";

export default function ({
  is_aciklama,
  nData,
  sData,
  firma_name,
  location,
  istenen_deneyim,
  istene_tip,
  firma_aciklama,
}) {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="firma_istek">
          {is_aciklama.map((Item) => Item.html)}
          <h3>Aranan Nitelikler ve Yetenekler</h3>
          <div className="nitelikler">
            {nData.map((item, index) => (
              <div key={index} className="nitelik">
                {item}
              </div>
            ))}
          </div>
          <h3>Çalışma Şartları</h3>
          <div className="nitelikler">
            {sData.map((item, index) => (
              <div key={index} className="nitelik">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="is_detay">
          <header>
            <div className="firma_card">
              <div className="firmaAd">{firma_name}</div>
              <div className="firma_yer">{location === 'default' ? 'Belirlenmedi' : location}</div>
            </div>
            <a
              className="firma_git"
              href="https://dribbble.com/shots/8190416-Find-Freelancer"
            >
              <LinkIcon size={20} color="#111" />
            </a>
          </header>
          <div className="firma_sayilar">
            <div className="group">
              <h3>Deneyim</h3>
              <div className="value_group">
                {istenen_deneyim === 'default' ? 'Belirlenmedi' : istenen_deneyim }
              </div>
            </div>
            <div className="group">
              <h3 className="h123456">Çalışma tipi</h3>
              <div className="value_group">
                {istene_tip === 'default' ? 'Belirlenmedi' : istene_tip}
              </div>
            </div>
          </div>
          <div className="firma_aciklama">
            <h3>Firma</h3>
            {firma_aciklama.map((Item, index) => (
              <React.Fragment key={index}>
                {Item.html}
              </React.Fragment>
            ))}
          </div>
          <button className="basvur_big">Başvur</button>
        </div>
      </div>
    </div>
  );
}
