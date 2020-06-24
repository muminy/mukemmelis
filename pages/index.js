import Layout from "../components/Layout";
import IlanCard from "../components/IlanCard";
import { useState, useEffect } from "react";
import getBasvuru from "../lib/basvuru";

export default function () {
  const [ilan, setIlans] = useState([]);
  useEffect(() => {
    getBasvuru().then((responseJson) =>
      responseJson.forEach((documents) =>
        setIlans((prevState) => {
          prevState.push(documents.data());
          return [...prevState];
        }),
      ),
    );
  }, []);

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
        {ilan.length ? (
          <div className="home_page">
            <header>Yeni ve popüler işler</header>
            <div className="row">
              {ilan.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6"
                >
                  <IlanCard
                    firma={item.firma_ad}
                    location={item.sehir}
                    is={item.is_baslik}
                    id={item.ilan_id}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div class="loader_width">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
            <div class="item item-4"></div>
          </div>
        )}
        <div className="find_job_landing">
          <div className="aciklama_image">
            <img src="/svg/ilanver.svg" />
          </div>
          <div className="aciklama right_aciklama">
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
        </div>
      </div>
    </Layout>
  );
}
