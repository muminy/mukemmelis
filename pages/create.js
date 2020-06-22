import Layout from "../components/Layout";
import Logotext from "../components/Logotext";
import Steps from "../components/Steps";
import CreateFooter from "../components/CreateFooter";
import FirmaStep from "../components/steps/FirmaStep";
import { useState, useEffect } from "react";
import SartNitelik from "../components/steps/IsBilgi";
import IlanSayfa from "../components/IlanSayfa";
import BasvurDB, {
  setBasvuruData,
  getLastId,
} from "../lib/basvuru";
import Link from "next/link";
export default function () {
  const [steps, setSteps] = useState([
    {
      id: 1,
      text: "Firma bilgisi",
      active: true,
      Component: FirmaStep,
      validate: false,
    },
    {
      id: 2,
      text: "Şart & Nitelik",
      active: false,
      Component: SartNitelik,
      validate: false,
    },
    {
      id: 3,
      text: "Onay",
      active: false,
      Component: IlanSayfa,
      validate: false,
    },
  ]);

  const [ilan_id, setIlanId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [niteliks, setNiteliks] = useState([]);
  const [sartlar, setSartlar] = useState([]);
  const [name, setName] = useState("");
  const [firmaAciklama, setFirmaAciklama] = useState("");
  const [tip, setTip] = useState("default");
  const [deneyim, setDeneyim] = useState("default");
  const [sehir, setSehir] = useState("default");
  const [is, setIs] = useState("");
  const [web, setWeb] = useState("");
  const [basvuru, setBasvuru] = useState("");
  const [isAciklama, setIsAciklama] = useState("");
  const [firmaAciklamaToHtml, setFirmaToHtml] = useState(
    [],
  );
  const [link, setLink] = useState("");
  const [isAciklamaToHtml, setisToHtml] = useState([]);

  useEffect(() => {
    BasvurDB().then(responseJson =>
      responseJson.forEach(last_child => setIlanId(last_child.data().ilan_id + 1))
    );
  }, []);

  useEffect(() => {
    const satir = firmaAciklama.split("\n");
    const new_data = [];
    for (let i = 0; i < satir.length; i++) {
      satir[i] !== ""
        ? new_data.push({ html: <p>{satir[i]}</p> })
        : null;
    }
    setFirmaToHtml(new_data);
  }, [firmaAciklama]);

  useEffect(() => {
    const satir = isAciklama.split("\n");
    const new_data = [];
    for (let i = 0; i < satir.length; i++) {
      satir[i] !== ""
        ? new_data.push({ html: <p key={i}>{satir[i]}</p> })
        : null;
    }
    setisToHtml(new_data);
  }, [isAciklama]);

  const setGeri = () => {
    const fnd = steps.find((item) => item.active);
    setSteps((prevSteps) => {
      prevSteps[fnd.id - 1].active = false;
      prevSteps[fnd.id - 2].active = true;
      return [...prevSteps];
    });
  };

  const setIleri = () => {
    const fnd = steps.find((item) => item.active);
    setSteps((prevSteps) => {
      prevSteps[fnd.id - 1].active = false;
      prevSteps[fnd.id].active = true;
      return [...prevSteps];
    });
  };

  const handleOnayla = async () => {
    if (
      name === "" ||
      firmaAciklama === "" ||
      tip === "default" ||
      deneyim === "default" ||
      sehir === "default" ||
      web === "" ||
      basvuru === ""
    ) {
      setSteps((prevState) => {
        prevState[0].validate = true;
        const activeIndex = prevState.findIndex(
          (item) => item.active,
        );
        prevState[activeIndex].active = false;
        prevState[0].active = true;
        return [...prevState];
      });
    } else if (
      is === "" ||
      isAciklama === "" ||
      niteliks.length === 0 ||
      sartlar.length === 0
    ) {
      setSteps((prevState) => {
        prevState[1].validate = true;
        const activeIndex = prevState.findIndex(
          (item) => item.active,
        );
        prevState[activeIndex].active = false;
        prevState[1].active = true;
        return [...prevState];
      });
    } else {
      const jsonData = {
        basvuru_web: basvuru,
        web_site: web,
        tip: tip,
        sehir: sehir,
        is_sart: sartlar,
        is_nitelik: niteliks,
        is_baslik: is,
        is_aciklama: isAciklama.split("\n"),
        firma_ad: name,
        firma_aciklama: firmaAciklama.split("\n"),
        deneyim: deneyim,
        ilan_id: ilan_id
      };

      const lastId = await getLastId();
      setBasvuruData(
        jsonData,
        await getLastId(),
        (responseJson) => {
          if (responseJson.code === 200) {
            setSuccess(true);
            setLink("/ilan/" + ilan_id);
          }
        },
      );
    }
    setTimeout(setValidate, 3000);
  };

  const setValidate = () => {
    setSteps((prevStates) => {
      prevStates[0].validate = false;
      prevStates[1].validate = false;
      prevStates[2].validate = false;
      return [...prevStates];
    });
  };
  return (
    <div className="container">
      <div
        className={`create_area ${
          steps[steps.length - 1].active ? "full_width" : ""
        }`}
      >
        <header>
          <Logotext />
          <p>
            Ücretsiz ilan vererek milyonlara kolayca
            ulaşabilir ve kalifiyeli elemanını hızlıca
            bulabilirsiniz
          </p>
        </header>
        {success ? (
          <div className="success_ilan">
            <div className="align_center">
              Kayıt Başarılı
              <Link href="/ilan/[slug]" as={link}>
                <a className="ilana_git">İlana git</a>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Steps steps={steps} />
            <div
              className={`create_form ${
                steps[steps.length - 1].active
                  ? "full_width"
                  : ""
              }`}
            >
              {steps.map((item, index) =>
                item.active ? (
                  <item.Component
                    getSartlar={(get) => setSartlar(get)}
                    sarts={sartlar}
                    getNitelik={(get) => setNiteliks(get)}
                    nitelikler={niteliks}
                    key={item.id}
                    name={name}
                    getName={(get) => setName(get)}
                    hakkinda={firmaAciklama}
                    getHakkinda={(get) =>
                      setFirmaAciklama(get)
                    }
                    tip={tip}
                    getTip={(get) => setTip(get)}
                    deneyim={deneyim}
                    getDeneyim={(get) => setDeneyim(get)}
                    sehir={sehir}
                    getSehir={(get) => setSehir(get)}
                    getIs={(get) => setIs(get)}
                    is={is}
                    validate={item.validate}
                    isAciklama={isAciklama}
                    getIsAciklama={(get) =>
                      setIsAciklama(get)
                    }
                    firma_aciklama={firmaAciklamaToHtml}
                    firma_name={name}
                    is_aciklama={isAciklamaToHtml}
                    istene_tip={tip}
                    istenen_deneyim={deneyim}
                    location={sehir}
                    nData={niteliks}
                    sData={sartlar}
                    basvuru={basvuru}
                    getBasvuru={(get) => setBasvuru(get)}
                    web={web}
                    getWeb={(get) => setWeb(get)}
                  />
                ) : null,
              )}
              <CreateFooter
                steps={steps}
                ileri={() => setIleri()}
                geri={() => setGeri()}
                onayla={() => handleOnayla()}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
