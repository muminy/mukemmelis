import {
  SearchIcon,
  LocationIcon,
  ArrowBottom,
} from "../constant/iconsvg";

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
      <div className="container">
        <div className="arama_alani">
          <div className="search_area">
            <SearchIcon size={25} color="#111" />
            <input
              className="user_search_input"
              value={is}
              onChange={(text) => getIs(text.target.value)}
              placeholder="Yer, makam, pozisyon arayın"
            />
          </div>
          <div className="bolge_area">
            <LocationIcon size={25} color="#111" />
            <select
              value={sehir}
              onChange={(text) =>
                getSehir(text.target.value)
              }
            >
              <option value="">bir tip seçin</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Ankara">Ankara</option>
            </select>
          </div>
          <div className="ara_area">
            <button onClick={isAra} className="ara_btn">
              Ara
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 sehir_response">
            <div className="filter_src">
              <h3>Şehir</h3>
              <div className="slc_area">
                <select
                  value={sehir}
                  onChange={(text) =>
                    getSehir(text.target.value)
                  }
                >
                  <option value="">bir tip seçin</option>
                  <option value="Kocaeli">Kocaeli</option>
                  <option value="Ankara">Ankara</option>
                </select>
                <ArrowBottom size={20} color="#111" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="filter_src">
              <h3>Çalışma tipi</h3>
              <div className="slc_area">
                <select
                  value={tip}
                  onChange={(text) =>
                    getTip(text.target.value)
                  }
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
                <ArrowBottom size={20} color="#111" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="filter_src">
              <h3>İş seviyeniz</h3>
              <div className="slc_area">
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
                <ArrowBottom size={20} color="#111" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
