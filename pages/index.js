import Layout from "../components/Layout";
import IlanCard from "../components/IlanCard";

export default function () {
  return (
    <Layout>
      <div className="container">
        <div className="find_job_landing">
          <div className="aciklama">
            <h3>Mükemmelinizi bulun!</h3>
            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className="aciklama_image">
            <img src="/svg/findjob.svg" />
          </div>
        </div>
        <div className="home_page">
          <header>Yeni ve popüler işler</header>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <IlanCard />
            </div>
            <div className="col-lg-3 col-md-6">
              <IlanCard />
            </div>
            <div className="col-lg-3 col-md-6">
              <IlanCard />
            </div>
            <div className="col-lg-3 col-md-6">
              <IlanCard />
            </div>
          </div>
        </div>
        <div className="find_job_landing">
          <div className="aciklama">
            <h3>Mükemmel İlan verin</h3>
            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className="aciklama_image">
            <img src="/svg/ilanver.svg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
