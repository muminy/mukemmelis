import Layout from "../components/Layout";

export default function () {
  return (
    <Layout>
      <div className="h_ii">
        <div className="container">
          <div className="upg_header">
            <header className="upt_hdr h123456">
              Mükemmelis.com Güncellemeleri
            </header>
            <div className="is_tipi">
              <div className="name">
                Son güncelleme: 18-ocak-2020
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <div className="update">
            <time>
              Friday, May 1st 2020 (about 2 months ago)
            </time>
            <header className="h123456">Protecting Deployments</header>
            <div className="content">
              <p>
                Pushing a change to your project results in
                a Preview Deployment. Then, once you're
                ready, merging it into master results in a
                Production Deployment with the domain of
                your choice.
              </p>
              <p>
                Even though Preview Deployments receive a
                unique URL, they might still be accessed by
                anyone that finds out about the URL. Today,
                we're introducing two features for easily
                protecting them right from the Dashboard.
              </p>
            </div>
          </div>
          <div className="added">
              <header className="h123456">Değişiklikler</header>
              <div className="degisiklik_list">
                  <div className="added_list">Konuma göre arama eklendi</div>
                  <div className="added_list">Maaşa göre arama eklendi</div>
                  <div className="delete_list">Gereksiz ilanlar temizlendi</div>
                  <div className="delete_list">Tarihe göre arama kaldırıldı</div>
              </div>
          </div>
        </div>

        <div className="flex">
          <div className="update">
            <time>
              Friday, May 1st 2020 (about 2 months ago)
            </time>
            <header className="h123456">Protecting Deployments</header>
            <div className="content">
              <p>
                Pushing a change to your project results in
                a Preview Deployment. Then, once you're
                ready, merging it into master results in a
                Production Deployment with the domain of
                your choice.
              </p>
              <p>
                Even though Preview Deployments receive a
                unique URL, they might still be accessed by
                anyone that finds out about the URL. Today,
                we're introducing two features for easily
                protecting them right from the Dashboard.
              </p>
            </div>
          </div>
          <div className="added">
              <header className="h123456">Değişiklikler</header>
              <div className="degisiklik_list">
                  <div className="added_list">Konuma göre arama eklendi</div>
                  <div className="added_list">Maaşa göre arama eklendi</div>
                  <div className="delete_list">Gereksiz ilanlar temizlendi</div>
                  <div className="delete_list">Tarihe göre arama kaldırıldı</div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
