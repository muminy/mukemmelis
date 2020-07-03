import { useEffect, useState, useContext } from "react";
import { api } from "../../constant/api";
import IlanCard from "../../components/admin/IlanCard";
import Loader from "../../components/Loader";
import {
  updateData,
  deleteCollection,
} from "../../lib/basvuru";
import { AuthProvider } from "../../utils/AuthContext";

export default function () {
  const [inactive, setInActive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ilans, setIlanActive] = useState([]);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(
      localStorage.getItem("userLogin") === "true"
        ? true
        : false,
    );
  }, []);

  useEffect(() => {
    if (login) {
      setIlans();
    }
  }, [login]);

  const setIlans = () => {
    fetch(`${api}/ilan/inactive`)
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        setIlanActive(
          responseJson.filter((item) => item.active),
        );
        setInActive(
          responseJson.filter((item) => !item.active),
        );
      })
      .then(() => setLoading(false));
  };

  const setActive = (id) => {
    updateData(id, true).then(() => setIlans());
  };

  const setDActive = (id) => {
    updateData(id, false).then(() => setIlans());
  };

  const deleteIlan = (id) => {
    deleteCollection(id).then(() => setIlans());
  };

  return (
    <AuthProvider>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <header className="admin_yeni_ilan">
            <div className="h123456">Yeni ilanlar</div>
            <p>Toplam 18 yeni ilan</p>
          </header>
          {inactive.length ? (
            inactive.map((item, index) => (
              <IlanCard
                key={index}
                {...item}
                activeIlan={setActive}
                deactive={setDActive}
                deleteIlan={deleteIlan}
              />
            ))
          ) : (
            <div className="not_found_src_data">
              Aktif ilan yok
            </div>
          )}
          <header className="admin_yeni_ilan">
            <div className="h123456">Aktif ilanlar</div>
            <p>Toplam 18 yeni ilan</p>
          </header>
          {ilans.length ? (
            ilans.map((item, index) => (
              <IlanCard
                key={index}
                {...item}
                activeIlan={setActive}
                deactive={setDActive}
              />
            ))
          ) : (
            <div className="not_found_src_data">
              Aktif ilan yok
            </div>
          )}
        </div>
      )}
    </AuthProvider>
  );
}
