import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { BugHata } from "../helpers/FormJsons";
import { useState } from "react";
import { setHataBugData } from "../lib/bughata";

export default function () {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setHataBugData(Object.assign({fixed: false}, data), (responseJson) => {
      if (responseJson.code === 200) {
        setSuccess(true);
      }
    });
  };
  return (
    <Layout title="Bug & Hata">
      <div className="container">
        <div className="form_bughata">
          {success ? (
            <div className="success_bug_hata h123456">
              Geri bildiriminiz için teşekkürler!!
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_group">
                <header>
                  <div className="form_title h123456">
                    Bug & hata
                  </div>
                  <div className="info_title">
                    Lütfen konuya uygun bir başlık seçiniz
                  </div>
                </header>
                <select
                  name="konu"
                  className={
                    errors.konu ? "required_error" : ""
                  }
                  ref={register({ required: true })}
                >
                  <option value="">Konu</option>
                  {BugHata.map((item) => (
                    <option {...item}>{item.value}</option>
                  ))}
                </select>
              </div>
              <div className="form_group">
                <header>
                  <div className="form_title h123456">
                    Açıklama
                  </div>
                  <div className="info_title">
                    Lütfen bulduğunuz, düzeltmek istediğiniz
                    hata & bug açıklamasını giriniz
                  </div>
                </header>
                <textarea
                  className={
                    errors.info ? "required_error" : ""
                  }
                  name="info"
                  ref={register({ required: true })}
                  rows={10}
                  placeholder="Bug & hata açıklaması..."
                ></textarea>
              </div>
              <div className="form_group">
                <button className="ilan_olustur h123456">
                  Bug & hata
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
