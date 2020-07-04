import { AuthProvider } from "../../utils/AuthContext";
import { useEffect, useState } from "react";
import { getHataBug, updateData, deleteCollection} from "../../lib/bughata";
import Loader from "../../components/Loader";
export default function () {
  const [abugs, setABugs] = useState([]);
  const [dbugs, setDBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    findHata();
  }, []);

  const findHata = () => {
    setLoading(true);
    getHataBug()
      .then((responseJson) => {
        let totaldata = [];
        responseJson.forEach((documents) =>
          totaldata.push(
            Object.assign(
              { id: documents.id },
              documents.data(),
            ),
          ),
        );
        return totaldata;
      })
      .then((responseJson) => {
        setDBugs(responseJson.filter((item) => item.fixed));
        setABugs(
          responseJson.filter((item) => !item.fixed),
        );
      })
      .then(() => setLoading(false));
  };
  const cozulduBug = (id) => {
    updateData(id, true).then(() => findHata());
  };
  const deleteBug = (id) => {
    deleteCollection(id).then(() => findHata());
  };
  return (
    <AuthProvider title="Hata bul bildirimleri">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <header className="admin_yeni_ilan">
              <div className="h123456">
                Yeni hata & buglar
              </div>
              <p>Toplam {abugs.length} yeni hata & bug</p>
            </header>
            {abugs.length ? (
              abugs.map((item, index) => (
                <div
                  key={index}
                  className="row ilan_details ml_mr"
                >
                  <div className="col-lg-4 h123456">
                    {item.konu}
                  </div>
                  <div className="col-lg-6 h123456">
                    {item.info}
                  </div>
                  <div className="col-lg-2 h123456">
                    <button
                      onClick={() => cozulduBug(item.id)}
                      className="s_btn_ilan h123456 wfull"
                    >
                      Çözüldü
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="not_found_src_data">
                Aktif ilan yok
              </div>
            )}
            <header className="admin_yeni_ilan">
              <div className="h123456">
                Çözülen Hata & bug
              </div>
              <p>Toplam {dbugs.length} hata & bug</p>
            </header>
            {dbugs.length ? (
              dbugs.map((item, index) => (
                <div
                  key={index}
                  className="row ilan_details ml_mr"
                >
                  <div className="col-lg-4 h123456">
                    {item.konu}
                  </div>
                  <div className="col-lg-6 h123456">
                    {item.info}
                  </div>
                  <div className="col-lg-2 h123456">
                    <button
                      onClick={() => deleteBug(item.id)}
                      className="r_btn_ilan h123456 wfull"
                    >
                      sil
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="not_found_src_data">
                Aktif ilan yok
              </div>
            )}
          </>
        )}
      </div>
    </AuthProvider>
  );
}
