import Layout from "../../components/Layout";
import {
  CheckIcon,
  DeleteIcon,
  InfoIcon,
} from "../../constant/iconsvg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../constant/api";
import IlanCard from "../../components/admin/IlanCard";
import Loader from "../../components/Loader";
import {
  updateData,
  deleteCollection,
} from "../../lib/basvuru";

export default function () {
  const [inactive, setInActive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ilans, setIlanActive] = useState([]);

  useEffect(() => {
    setIlans();
  }, []);

  const setIlans = () => {
    setLoading(true);
    fetch(`${api}/ilan/inactive`)
      .then((responseJson) => responseJson.json())
      .then((responseJson) => setInActive(responseJson))
      .then(() => setLoading(false));

    fetch(`${api}/ilan/get`)
      .then((responseJson) => responseJson.json())
      .then((responseJson) => setIlanActive(responseJson))
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
    <Layout admin>
      <div className="container">
        <header className="admin_yeni_ilan">
          <div>Yeni ilanlar</div>
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
        ) : loading ? (
          <Loader />
        ) : (
          <div className="not_found_src_data">
            Aktif ilan bulunamadı
          </div>
        )}
        <header className="admin_yeni_ilan">
          <div>Aktif ilanlar</div>
          <p>Toplam 18 yeni ilan</p>
        </header>
        {inactive.length ? (
          inactive.map((item, index) => (
            <IlanCard
              key={index}
              {...item}
              activeIlan={setActive}
              deleteIlan={deleteIlan}
            />
          ))
        ) : loading ? (
          <Loader />
        ) : (
          <div className="not_found_src_data">
            İnactive ilan yok
          </div>
        )}
      </div>
    </Layout>
  );
}
