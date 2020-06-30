import { LinkIcon } from "../constant/iconsvg";

export default function ({
  is_aciklama,
  firma_ad,
  is_baslik,
  is_nitelik,
  is_sart,
  deneyim,
  sehir,
  tip,
  firma_aciklama,
  basvuru_web
}) {
  return (
    <React.Fragment>
      <div className="is_ara padd_v">
        <div className="container">
          <div className="header_article">
            <header className="h123456">{is_baslik}</header>
            <div className="is_tipi">
              <div className="name">{firma_ad}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="firma_istek">
              {is_aciklama.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <h3 className="h123456">Aranan Nitelikler ve Yetenekler</h3>
              <div className="nitelikler">
                {is_nitelik.map((item, index) => (
                  <div key={index} className="nitelik">
                    {item}
                  </div>
                ))}
              </div>
              <h3 className="h123456">Çalışma Şartları</h3>
              <div className="nitelikler">
                {is_sart.map((item, index) => (
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
                  <div className="firmaAd h123456">{firma_ad}</div>
                  <div className="firma_yer">{sehir}</div>
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
                  <div className="div_h3 h123456">Deneyim</div>
                  <div className="value_group">
                    {deneyim}
                  </div>
                </div>
                <div className="group">
                  <div className="div_h3 h123456">Çalışa Tipi</div>
                  <div className="value_group">{tip}</div>
                </div>
              </div>
              <div className="firma_aciklama">
                <h3 className="h123456">Firma</h3>
                {firma_aciklama.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <a href={basvuru_web} className="basvur_big">Başvur</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
