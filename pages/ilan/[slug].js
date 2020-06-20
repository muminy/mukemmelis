import Layout from "../../components/Layout";
import { LinkIcon } from "../../constant/iconsvg";
export default function () {
  return (
    <Layout>
      <div className="is_ara padd_v">
        <div className="container">
          <div className="header_article">
            <header>Frontend Developer</header>
            <div className="is_tipi">
              <img src="https://lh3.googleusercontent.com/proxy/XIFPEFgj2kWi9G_5zmbjGcpQuuK7VRZzLcRPz8zxnh5IVpvQJh9wHIWJd1NiRAth-wU-TNiNvhPXWI1ppRaVSg" />
              <div className="name">Google, Inc</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="firma_istek">
              <p>
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled
                it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled
                it to make a type specimen book.
              </p>
              <h3>Aranan Nitelikler ve Yetenekler</h3>
              <div className="nitelikler">
                <div className="nitelik">
                  C#.Net teknolojileri
                </div>
                <div className="nitelik">
                  ASP.NET Core, Entity Framework Core
                </div>
                <div className="nitelik">
                  HTML, JavaScript, CSS
                </div>
                <div className="nitelik">
                  OOP, Dependency Injection, Design Patterns
                </div>
                <div className="nitelik">
                  Genel SQL veritabanı bilgisi (Genel olarak
                  MySql / SqlServer)
                </div>
              </div>
              <h3>Çalışma Şartları</h3>
              <div className="nitelikler">
                <div className="nitelik">
                  C#.Net teknolojileri
                </div>
                <div className="nitelik">
                  ASP.NET Core, Entity Framework Core
                </div>
                <div className="nitelik">
                  HTML, JavaScript, CSS
                </div>
                <div className="nitelik">
                  OOP, Dependency Injection, Design Patterns
                </div>
                <div className="nitelik">
                  Genel SQL veritabanı bilgisi (Genel olarak
                  MySql / SqlServer)
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="is_detay">
              <header>
                <div className="firma_card">
                  <div className="firmaAd">Google, Inc</div>
                  <div className="firma_yer">
                    İstanbul, Turkey
                  </div>
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
                  <h3>Maaş</h3>
                  <div className="value_group">
                    $30K - $70K
                  </div>
                </div>
                <div className="group">
                  <h3>Çalışma tipi</h3>
                  <div className="value_group">
                    Remote
                  </div>
                </div>
              </div>
              <div className="firma_aciklama">
                  <h3>Firma</h3>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
              </div>
              <button className="basvur_big">Başvur</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
