import Layout from "../components/Layout";
import SearchWork from "../components/SearchWork";
import IlanCard from "../components/IlanCard";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../constant/iconsvg";
import fetch from "node-fetch";
import { api } from '../constant/api'
import Loader from "../components/Loader";
export default function Home() {
  const [tip, setTip] = useState("");
  const [sehir, setSehir] = useState("");
  const [deneyim, setDeneyim] = useState("");
  const [src, setSrc] = useState(false);
  const [ilan, setIlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [is, setIs] = useState("");

  const [jsonFilter, setJsonFilter] = useState({
    tip: tip,
    deneyim: deneyim,
    sehir: sehir,
    is: is,
  });

  const isAra = () => {
    setLoading(true);
    setIlans([]);
    fetch(`${api}/ilan/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        is_tip: tip,
        is_baslik: is,
        is_deneyim: deneyim,
        is_sehir: sehir,
      }),
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => setIlans(responseJson))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    isAra();
  }, [jsonFilter]);

  const deleteTip = () => {
    setTip("");
    setJsonFilter({
      tip: "",
      sehir: jsonFilter.sehir,
      deneyim: jsonFilter.deneyim,
      is: jsonFilter.is,
    });
  };
  const deleteSehir = () => {
    setSehir("");
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: "",
      deneyim: jsonFilter.deneyim,
      is: jsonFilter.is,
    });
  };

  const deleteDeneyim = () => {
    setDeneyim("");
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: jsonFilter.sehir,
      deneyim: "",
      is: jsonFilter.is,
    });
  };

  const deleteIs = () => {
    setIs("");
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: jsonFilter.sehir,
      deneyim: jsonFilter.deneyim,
      is: "",
    });
  };

  const setAra = () => {
    setJsonFilter({
      tip: tip,
      sehir: sehir,
      deneyim: deneyim,
      is: is,
    });
    setSrc(true);
  };

  useEffect(() => {
    if (deneyim === "" && sehir === "" && tip === "" && is === '') {
      setSrc(false)
    }
  }, [tip, sehir, deneyim, is]);

  return (
    <Layout>
      <SearchWork
        tip={tip}
        getTip={(value) => setTip(value)}
        sehir={sehir}
        getSehir={(value) => setSehir(value)}
        deneyim={deneyim}
        getDeneyim={(value) => setDeneyim(value)}
        isAra={() => setAra()}
        getIs={(value) => setIs(value)}
        is={is}
      />
      <div className="container">
        <div className="tum_isler">
          {src ? (
            <header className="tags_src">
              {jsonFilter.is === "" ? null : (
                <div className="tag_src">
                  {jsonFilter.is}
                  <button onClick={() => deleteIs()}>
                    <DeleteIcon size={20} color="#111" />
                  </button>
                </div>
              )}
              {jsonFilter.sehir === "" ? null : (
                <div className="tag_src">
                  {jsonFilter.sehir}
                  <button onClick={() => deleteSehir()}>
                    <DeleteIcon size={20} color="#111" />
                  </button>
                </div>
              )}
              {jsonFilter.tip === "" ? null : (
                <div className="tag_src">
                  {jsonFilter.tip}
                  <button onClick={() => deleteTip()}>
                    <DeleteIcon size={20} color="#111" />
                  </button>
                </div>
              )}
              {jsonFilter.deneyim === "" ? null : (
                <div className="tag_src">
                  {jsonFilter.deneyim}
                  <button onClick={() => deleteDeneyim()}>
                    <DeleteIcon size={20} color="#111" />
                  </button>
                </div>
              )}
            </header>
          ) : (
            <header className="not_search">Yeni ve popüler işler</header>
          )}
        </div>
        {ilan.length ? (
          <div className="row">
            {ilan.map((item, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-12"
              >
                <IlanCard
                  firma={item.firma_ad}
                  location={item.sehir}
                  is={item.is_baslik}
                  id={item.ilan_id}
                  deneyim={item.deneyim}
                  tip={item.tip}
                  src={`https://firebasestorage.googleapis.com/v0/b/mukemmelis-5d0ef.appspot.com/o/firma%2F${item.slug_image}?alt=media`}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        ) : loading ? null : (
          <div className="not_found_src_data">
            Eşleşen herrhangi bir ilan bulunamadı
          </div>
        )}
        {loading ? (
          <Loader />
        ) : null}
      </div>
    </Layout>
  );
}
