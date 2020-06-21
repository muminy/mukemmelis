import { useState, useEffect } from "react";

export default function ({
  getNitelik,
  nitelikler,
  sarts,
  getSartlar,
  is,
  isAciklama,
  getIs,
  getIsAciklama,
  validate,
  getValidate
}) {
  const [sartlar, setSartlar] = useState(sarts);
  const [nitelik, setNitelik] = useState(nitelikler);
  const [currentSartValue, setCurrentSartValue] = useState(
    "",
  );
  const [val, setVal] = useState(validate);
  useEffect(() => {
    if (val) {
      setTimeout(() => getValidate(false), 3000);
    }
  }, [val]);
  const [
    currentNitelikValue,
    setCurrentNitelikValue,
  ] = useState("");

  const NitelikEkle = () => {
    setNitelik((prevNitelik) => {
      prevNitelik.push(currentNitelikValue);
      setCurrentNitelikValue("");
      return [...prevNitelik];
    });
  };
  const SartEkle = () => {
    setSartlar((prevSartlar) => {
      prevSartlar.push(currentSartValue);
      setCurrentSartValue("");
      return [...prevSartlar];
    });
  };

  useEffect(() => {
    getNitelik(nitelik);
  }, [nitelik]);

  useEffect(() => {
    getSartlar(sartlar);
  }, [sartlar]);

  const DNitelik = (index) => {
    setNitelik((prevNitelik) => {
      prevNitelik.splice(index, 1);
      return [...prevNitelik];
    });
  };

  const DSart = (index) => {
    setSartlar((prevSartlar) => {
      prevSartlar.splice(index, 1);
      return [...prevSartlar];
    });
  };

  return (
    <React.Fragment>
      {val ? (
        <div className="error_001">
          Tüm alanları eksiksiz bir şekilde doldurunuz
        </div>
      ) : null}
      <div className="form_group">
        <header>İş Başlığı</header>
        <input
          onChange={(text) => getIs(text.target.value)}
          value={is}
          placeholder="Apple, Inc - Google, Inc"
        />
      </div>
      <div className="form_group">
        <header>İş Açıklama</header>
        <textarea
          rows="10"
          onChange={(text) =>
            getIsAciklama(text.target.value)
          }
          value={isAciklama}
          placeholder="Apple, Inc - Google, Inc"
        ></textarea>
      </div>
      <div className="form_group">
        <header>Aranan Nitelikler</header>
        <div className="nitelik_list">
          {nitelik.map((item, index) => (
            <div key={index} className="l_flex">
              <div className="list_n">{item}</div>
              <button onClick={() => DNitelik(index)}>
                Sil
              </button>
            </div>
          ))}
        </div>
        <div className="group_datas">
          <input
            onChange={(text) =>
              setCurrentNitelikValue(text.target.value)
            }
            className="niteliks"
            placeholder="+5000 Tl aylık"
            value={currentNitelikValue}
          />
          <button onClick={() => NitelikEkle()}>
            Ekle
          </button>
        </div>
      </div>
      <div className="form_group">
        <header>İş Şartları</header>
        <div className="nitelik_list">
          {sartlar.map((item, index) => (
            <div key={index} className="l_flex">
              <div className="list_n">{item}</div>
              <button onClick={() => DSart(index)}>
                Sil
              </button>
            </div>
          ))}
        </div>
        <div className="group_datas">
          <input
            onChange={(text) =>
              setCurrentSartValue(text.target.value)
            }
            className="niteliks"
            placeholder="+5000 Tl aylık"
            value={currentSartValue}
          />
          <button onClick={() => SartEkle()}>Ekle</button>
        </div>
      </div>
    </React.Fragment>
  );
}
