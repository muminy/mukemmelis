import { createContext, useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export const AuthContext = createContext();

export const AuthProvider = ({ children, getLogin }) => {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    setLogin(
      localStorage.getItem("userLogin") ? true : false,
    );
  }, []);

  useEffect(() => {
    if (login === false) {
      Router.push("/admin/login");
    }
  }, [login]);

  if (login) {
    return <Layout admin>{children}</Layout>;
  } else {
    return <Loader />;
  }
};
