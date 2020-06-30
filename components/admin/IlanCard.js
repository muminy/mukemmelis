import Link from "next/link";
import {
  CheckIcon,
  InfoIcon,
  DeleteIcon,
} from "../../constant/iconsvg";

export default function ({
  active,
  is_baslik,
  firma_ad,
  tip,
  deneyim,
  deleteIlan,
  activeIlan,
  docs,
  deactive
}) {
  return (
    <div className="row ilan_details ml_mr">
      <div className="col-lg-3 col-md-6 md_items col-sm-6 ucN">{is_baslik}</div>
      <div className="col-lg-2 col-md-6 md_items col-sm-6 br_0">{firma_ad}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items">
        <Link href="/">
          <a className="json_data">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items">
        <Link href="/">
          <a className="json_data">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items">{tip}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items br_0">{deneyim}</div>
      <div className="col-lg-3 islemx col-md-12 col-sm-12 md_items">
        <button className="i_btn_ilan">
          incele
        </button>
        {active ? null : (
          <button
            onClick={() => activeIlan(docs)}
            className="s_btn_ilan"
          >
            <CheckIcon size={25} color="#228b52" />
          </button>
        )}
        <button
          onClick={() => active ? deactive(docs) : deleteIlan(docs)}
          className="r_btn_ilan"
        >
          {active ? 'İnactive' : 'Sil'}
        </button>
      </div>
    </div>
  );
}
