import Head from "next/head";
import { useEffect } from "react";
import loadFirebase from "../lib/loadFirebase";
import { getUsers } from "../lib/getUsers";
import Link from "next/link";
import Layout from "../components/Layout";
import SearchWork from "../components/SearchWork";
import IlanCard from "../components/IlanCard";

export default function Home() {
  return (
    <Layout>
      <SearchWork />
      <div className="container">
        <div className="tum_isler">
          <header>Yeni ve popüler işler</header>
        </div>
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
    </Layout>
  );
}
