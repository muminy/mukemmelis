import Layout from "../components/Layout";
import SearchWork from "../components/SearchWork";
import IlanCard from "../components/IlanCard";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../constant/iconsvg";
import fetch from "node-fetch";
import { api } from "../constant/api";
import Loader from "../components/Loader";

export default function Home({ qData }) {
  const [tip, setTip] = useState("");
  const [sehir, setSehir] = useState("");
  const [deneyim, setDeneyim] = useState("");
  const [src, setSrc] = useState(false);
  const [ilan, setIlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [is, setIs] = useState("");
  const [hizliArama, setHizliArama] = useState(false);
  const [query, setQ] = useState(qData);
  const [jsonFilter, setJsonFilter] = useState({
    tip: tip,
    deneyim: deneyim,
    sehir: sehir,
    is: is,
  });

  const isAra = (tip, is, deneyim, sehir) => {
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
    if (Object.keys(query).length > 0) {
      setHizliArama(true);
      setSrc(true);
      setJsonFilter({
        deneyim: query.experience || "",
        is: query.value || "",
        sehir: query.location || "",
        tip: query.type || "",
      });
      setQ({});
    }
  }, [query]);

  useEffect(() => {
    if (Object.keys(query).length === 0) {
      isAra(
        jsonFilter.tip,
        jsonFilter.is,
        jsonFilter.deneyim,
        jsonFilter.sehir,
      );
    }
    setSehir(jsonFilter.sehir);
    setTip(jsonFilter.tip);
    setIs(jsonFilter.is);
    setDeneyim(jsonFilter.deneyim);
  }, [jsonFilter]);

  const deleteTip = () => {
    setTip("");
    setHizliArama(false);
    setJsonFilter({
      tip: "",
      sehir: jsonFilter.sehir,
      deneyim: jsonFilter.deneyim,
      is: jsonFilter.is,
    });
  };
  const deleteSehir = () => {
    setSehir("");
    setHizliArama(false);
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: "",
      deneyim: jsonFilter.deneyim,
      is: jsonFilter.is,
    });
  };

  const deleteDeneyim = () => {
    setDeneyim("");
    setHizliArama(false);
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: jsonFilter.sehir,
      deneyim: "",
      is: jsonFilter.is,
    });
  };

  const deleteIs = () => {
    setIs("");
    setHizliArama(false);
    setJsonFilter({
      tip: jsonFilter.tip,
      sehir: jsonFilter.sehir,
      deneyim: jsonFilter.deneyim,
      is: "",
    });
  };

  const setAra = () => {
    setJsonFilter({
      deneyim: deneyim,
      sehir: sehir,
      is: is,
      tip: tip,
    });
    if (
      tip === "" &&
      sehir === "" &&
      deneyim === "" &&
      is === ""
    ) {
    } else {
      setSrc(true);
    }
  };

  useEffect(() => {
    if (
      deneyim === "" &&
      sehir === "" &&
      tip === "" &&
      is === ""
    ) {
      setSrc(false);
    }
  }, [tip, sehir, deneyim, is]);
  return (
    <Layout title="İş'ini bul">
      <div className="total_ilans">
        <div className="container">
          <div className="ti_content ">
            <div className="h123456 ti_tile">
              Toplam 18.271 ilan arasından arama yapın.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
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
          </div>
          <div className="col-lg-9">
            <div className="tum_isler">
              {src ? (
                <header className="tags_src">
                  {jsonFilter.is === "" ? null : (
                    <div className="tag_src">
                      {jsonFilter.is}
                      <button onClick={() => deleteIs()}>
                        <DeleteIcon
                          size={20}
                          color="#111"
                        />
                      </button>
                    </div>
                  )}
                  {jsonFilter.sehir === "" ? null : (
                    <div className="tag_src">
                      {jsonFilter.sehir}
                      <button onClick={() => deleteSehir()}>
                        <DeleteIcon
                          size={20}
                          color="#111"
                        />
                      </button>
                    </div>
                  )}
                  {jsonFilter.tip === "" ? null : (
                    <div className="tag_src">
                      {jsonFilter.tip}
                      <button onClick={() => deleteTip()}>
                        <DeleteIcon
                          size={20}
                          color="#111"
                        />
                      </button>
                    </div>
                  )}
                  {jsonFilter.deneyim === "" ? null : (
                    <div className="tag_src">
                      {jsonFilter.deneyim}
                      <button
                        onClick={() => deleteDeneyim()}
                      >
                        <DeleteIcon
                          size={20}
                          color="#111"
                        />
                      </button>
                    </div>
                  )}
                </header>
              ) : hizliArama ? (
                <div className="tags_src">
                  {qData.location !== undefined ||
                  qData.type !== undefined ||
                  qData.experience !== undefined ||
                  qData.value !== undefined ? (
                    <div className="tag_src h123456">
                      {qData.location ||
                        qData.type ||
                        qData.experience ||
                        qData.value}
                      <button
                        onClick={() => {
                          if (
                            qData.location !== undefined
                          ) {
                            deleteSehir();
                          } else if (
                            qData.experience !== undefined
                          ) {
                            deleteDeneyim();
                          } else if (
                            qData.type !== undefined
                          ) {
                            deleteTip();
                          } else if (
                            qData.value !== undefined
                          ) {
                            deleteIs();
                          }
                        }}
                      >
                        <DeleteIcon
                          size={20}
                          color="#111"
                        />
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : loading ? null : (
                <header className="not_search h123456">
                  Yeni ve popüler işler
                </header>
              )}
            </div>
            {ilan.length > 0 ? (
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
            {loading ? <Loader /> : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

Home.getInitialProps = ({ query }) => {
  return { qData: query };
};
