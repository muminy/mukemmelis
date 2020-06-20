import {
  SearchIcon,
  LocationIcon,
  ArrowBottom,
} from "../constant/iconsvg";

export default function () {
  return (
    <div className="is_ara">
      <div className="container">
        <div className="arama_alani">
          <div className="search_area">
            <SearchIcon size={25} color="#111" />
            <input
              className="user_search_input"
              placeholder="Yer, makam, pozisyon arayın"
            />
          </div>
          <div className="bolge_area">
            <LocationIcon size={25} color="#111" />
            <select>
              <option>Şehir</option>
              <option>Kocaeli</option>
              <option>Ankara</option>
              <option>İstanbul</option>
            </select>
          </div>
          <div className="ara_area">
            <button className="ara_btn">
              Mükemmel bul
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="filter_src">
              <h3>Göre sırala</h3>
              <div className="slc_area">
                <select>
                  <option>Sırala</option>
                  <option>Maaş</option>
                  <option>Tarih</option>
                  <option>Poüler</option>
                </select>
                <ArrowBottom size={20} color="#111" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="filter_src">
              <h3>Çalışma tipi</h3>
              <div className="slc_area">
                <select>
                  <option>Sırala</option>
                  <option>Remote</option>
                  <option>Fulltime</option>
                  <option>Stajyer</option>
                </select>
                <ArrowBottom size={20} color="#111" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="filter_src">
              <h3>İş seviyeniz</h3>
              <div className="slc_area">
                <select>
                  <option>Sırala</option>
                  <option>Senior</option>
                  <option>Junior</option>
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
