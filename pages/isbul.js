import Layout from "../components/Layout";
import SearchWork from "../components/SearchWork";
import IlanCard from "../components/IlanCard";
import getBasvuru from "../lib/basvuru";
import { useState, useEffect } from "react";

export default function Home() {
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
      <SearchWork />
      <div className="container">
        <div className="tum_isler">
          <header>Yeni ve popüler işler</header>
        </div>
        {ilan.length ? (
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
        ) : (
          <div class="loader_width">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
            <div class="item item-4"></div>
          </div>
        )}
      </div>
    </Layout>
  );
}
