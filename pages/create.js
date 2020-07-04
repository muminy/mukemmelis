import { useState, useEffect } from "react";
import {
  setBasvuruData,
  getLastId,
  setImageFirma,
} from "../lib/basvuru";
import {
  SehirlerJson,
  DeneyimJson,
  TipJson,
} from "../helpers/FormJsons";
import slugify from "slugify";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
export default function () {
  const [n_value, setNValue] = useState("");
  const [s_value, setSValue] = useState("");
  const [nitelik, setIsNitelik] = useState([]);
  const [sart, setIsSart] = useState([]);
  const [last_id, setLastId] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getLastId().then((responseJson) =>
      responseJson.forEach((last_child) =>
        setLastId(last_child.data().ilan_id + 1),
      ),
    );
  }, []);

  const addNitelik = () => {
    if (n_value !== "") {
      setIsNitelik((prevState) => {
        prevState.push(n_value);
        setNValue("");
        return [...prevState];
      });
    }
  };

  const addSart = () => {
    if (s_value !== "") {
      setIsSart((prevState) => {
        prevState.push(s_value);
        setSValue("");
        return [...prevState];
      });
    }
  };

  const deleteSart = (index) => {
    setIsSart((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };

  const deleteNitelik = (index) => {
    setIsNitelik((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };

  const onSubmit = (data) => {
    if (nitelik.length >= 1 && sart.length >= 1) {
      const f_aciklama = data.firma_aciklama;
      const is_aciklama = data.is_aciklama;
      delete data.firma_aciklama;
      delete data.is_aciklama;
      const slug_image = slugify(
        `${last_id || 1} ${data.is_baslik} ${
          data.firma_ad
        }`,
        { lower: true },
      );
      const total_data = Object.assign(
        {
          ilan_id: last_id,
          is_nitelik: nitelik,
          is_sart: sart,
          create_date: new Date().toISOString(),
          active: false,
          firma_aciklama: f_aciklama.split("\n"),
          is_aciklama: is_aciklama.split("\n"),
          slug_image: slug_image,
        },
        data,
      );
      
      setImageFirma(total_data.firma_resim[0], slug_image);
      delete total_data.firma_resim;
      setBasvuruData(total_data, (responseJson) => {
        if (responseJson.code === 200) {
          setSuccess(true);
        }
      });
    }
  };
  return (
    <Layout title="İlan oluştur">
      <div className="total_ilans">
        <div className="container">
          <div className="ti_content ">
            <div className="h123456 ti_tile">
              İlan oluşturmak ücretsizdir
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {success ? (
          <div className="basvuru_alindi">
            <img src="/svg/success_add.svg" />
            <div className="ilan_ti h123456">
              Başvurunuz alındı, en kısa sürede sizinle
              iletişime geçeceğiz!
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  İş başlığı
                </div>
                <div className="info_title">
                  İş başlığı; aramalarda sizi ön plana
                  çıkarmak için önemlidir
                </div>
              </header>
              <input
                name="is_baslik"
                className={
                  errors.is_baslik ? "required_error" : ""
                }
                ref={register({ required: true })}
                placeholder="Frontend developer"
              />
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  İş Açıklaması
                </div>
                <div className="info_title">
                  Çalışanlar/iş arayanlar ilanınızı daha iyi
                  anlayabilmesi/kavrayabilmesi için
                  önemlidir.
                </div>
              </header>
              <textarea
                name="is_aciklama"
                rows={10}
                className={
                  errors.is_aciklama ? "required_error" : ""
                }
                ref={register({ required: true })}
                placeholder="Frontend developer"
              ></textarea>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Şehir
                </div>
              </header>
              <select
                name="sehir"
                className={
                  errors.is_sehir ? "required_error" : ""
                }
                ref={register({ required: true })}
              >
                <option value="">Şehir seçin</option>
                {SehirlerJson.map((item) => (
                  <option {...item}>{item.value}</option>
                ))}
              </select>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Deneyim
                </div>
                <div className="info_title">
                  Çalışanlar/iş arayanlar şirketinizin
                  aranan deneyim'i bilmesi gereksiz
                  başvuruların önüne geçer.
                </div>
              </header>
              <select
                className={
                  errors.is_deneyim ? "required_error" : ""
                }
                name="deneyim"
                ref={register({ required: true })}
              >
                <option value="">Deneyim seçin</option>
                {DeneyimJson.map((item) => (
                  <option {...item}>{item.value}</option>
                ))}
              </select>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Çalışma tipi
                </div>
                <div className="info_title">
                  Çalışanlar/iş arayanlar şirketinizin
                  çalışma tipini bilmesi gereksiz
                  başvuruların önüne geçer.
                </div>
              </header>
              <select
                name="tip"
                className={
                  errors.is_tip ? "required_error" : ""
                }
                ref={register({ required: true })}
              >
                <option value="">Çalışma tipi seçin</option>
                {TipJson.map((item) => (
                  <option {...item}>{item.value}</option>
                ))}
              </select>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  İş nitelikleri
                </div>
                <div className="info_title">
                  Çalışanlarınızdan aradığınız nitelikler,
                  iş arayanlar için önemli bir unsurdur.
                </div>
              </header>
              {nitelik.length ? (
                <div className="list_of_list">
                  {nitelik.map((item, index) => (
                    <div
                      key={index}
                      className="sart_l_list"
                    >
                      {item}
                      <div
                        onClick={() => deleteNitelik(index)}
                        className="sil__list h123456"
                      >
                        sil
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="_n_list">
                <input
                  value={n_value}
                  onChange={(event) =>
                    setNValue(event.target.value)
                  }
                  placeholder="Bir nitelik ekleyin"
                />
                <div
                  className="btn_gorunum"
                  onClick={addNitelik}
                >
                  EKLE
                </div>
              </div>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  İş şartları
                </div>
                <div className="info_title">
                  Çalışanlara sunduğunuz iş olanakları, iş
                  başvurularının artmasına/azalmasına neden
                  olur.
                </div>
              </header>
              {sart.length ? (
                <div className="list_of_list">
                  {sart.map((item, index) => (
                    <div
                      key={index}
                      className="sart_l_list"
                    >
                      {item}
                      <div
                        onClick={() => deleteSart(index)}
                        className="sil__list h123456"
                      >
                        sil
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="_n_list">
                <input
                  value={s_value}
                  onChange={(event) =>
                    setSValue(event.target.value)
                  }
                  placeholder="Bir sart ekleyin"
                />
                <div
                  className="btn_gorunum"
                  onClick={addSart}
                >
                  EKLE
                </div>
              </div>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  İş Başvuru
                </div>
              </header>
              <input
                name="basvuru_web"
                ref={register({ required: true })}
                className={
                  errors.basvuru_web
                    ? "required_error mb"
                    : "mb"
                }
                placeholder="Web"
              />
              <input
                name="basvuru_mail"
                className={
                  errors.basvuru_mail
                    ? "required_error"
                    : ""
                }
                ref={register({ required: true })}
                placeholder="Mail"
              />
            </div>
            <header className="firma_b h123456">
              Firma bilgisi
            </header>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Firma adı
                </div>
              </header>
              <input
                name="firma_ad"
                className={
                  errors.firma_ad ? "required_error" : ""
                }
                ref={register({ required: true })}
                placeholder="Frontend developer"
              />
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Firma Açıklaması
                </div>
                <div className="info_title">
                  Firma/şirket açıklaması önemi çalışanların
                  üzerinde oldukça önemlidir
                </div>
              </header>
              <textarea
                name="firma_aciklama"
                rows={10}
                className={
                  errors.firma_aciklama
                    ? "required_error"
                    : ""
                }
                ref={register({ required: true })}
                placeholder="Frontend developer"
              ></textarea>
            </div>
            <div className="form_group">
              <header>
                <div className="form_title h123456">
                  Firma resmi
                </div>
              </header>
              <input
                name="firma_resim"
                className={
                  errors.firma_resim ? "required_error" : ""
                }
                ref={register({ required: true })}
                type="file"
              />
            </div>
            <div className="form_group">
              <button className="ilan_olustur h123456">
                İlan oluştur
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
