import Logotext from "../../components/Logotext";
import { useState, useEffect } from "react";
import { userLogin } from "../../lib/usersActions";
import Router from "next/router";
import Loader from "../../components/Loader";

export default function () {
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    userLogin(user_name, password, (responseJson) => {
      if (!responseJson.code) {
        setLogin(true);
      }
    });
  };

  useEffect(() => {
    if (login) {
      localStorage.setItem("userLogin", "true");
      Router.push("/admin");
    }
  }, [login]);
  return (
    <div className="login_screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="login_content">
          <div>
            mükemmelis.com admin panel giriş sayfası
          </div>
          <div className="form_login">
            <input
              value={user_name}
              onChange={(event) =>
                setUserName(event.target.value)
              }
              placeholder="Kullanıcı adı"
            />
            <input
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Şifre"
              type="password"
            />
            <button onClick={handleLogin}>Giriş yap</button>
          </div>
        </div>
      )}
    </div>
  );
}
