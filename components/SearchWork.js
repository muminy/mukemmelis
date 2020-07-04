import {
  SearchIcon,
  LocationIcon,
} from "../constant/iconsvg";
import { SehirlerJson } from "../helpers/FormJsons";

export default function ({
  isAra,
  getTip,
  tip,
  deneyim,
  getDeneyim,
  sehir,
  getSehir,
  is,
  getIs,
}) {
  return (
    <div className="is_ara">
      <div className="arama_alani">
        <input
          className="user_search_input"
          value={is}
          onChange={(text) => getIs(text.target.value)}
          placeholder="Alanınız..."
        />
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="filter_src">
            <h3 className="h123456">Şehir</h3>
            <select
              value={sehir}
              onChange={(text) =>
                getSehir(text.target.value)
              }
            >
              <option value="">bir tip seçin</option>
              {SehirlerJson.map((item) => (
                <option {...item}>{item.value}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="filter_src">
            <h3 className="h123456">Çalışma tipi</h3>
            <select
              value={tip}
              onChange={(text) => getTip(text.target.value)}
            >
              <option value="">bir tip seçin</option>
              <option value="Uzaktan">Uzaktan</option>
              <option value="Tam zamanlı">
                Tam zamanlı
              </option>
              <option value="Yarı zamanlı">
                Yarı zamanlı
              </option>
              <option value="Stajyer">Stajyer</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="filter_src">
            <h3 className="h123456">İş seviyeniz</h3>
            <select
              value={deneyim}
              onChange={(text) =>
                getDeneyim(text.target.value)
              }
            >
              <option value="">bir tip seçin</option>
              <option value="Senior">Senior</option>
              <option value="Junior">Junior</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <button
            onClick={isAra}
            className="ara_btn_xs h123456"
          >
            ARA
          </button>
        </div>
      </div>
    </div>
  );
}
