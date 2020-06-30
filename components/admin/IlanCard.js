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
      <div className="col-lg-3 col-md-6 md_items col-sm-6 ucN h123456">{is_baslik}</div>
      <div className="col-lg-2 col-md-6 md_items col-sm-6 br_0 h123456">{firma_ad}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items">
        <Link href="/">
          <a className="json_data h123456">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items">
        <Link href="/">
          <a className="json_data h123456">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items h123456">{tip}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items br_0 h123456">{deneyim}</div>
      <div className="col-lg-3 islemx col-md-12 col-sm-12 md_items">
        <button className="i_btn_ilan h123456">
          incele
        </button>
        {active ? null : (
          <button
            onClick={() => activeIlan(docs)}
            className="s_btn_ilan h123456"
          >
            <CheckIcon size={25} color="#228b52" />
          </button>
        )}
        <button
          onClick={() => active ? deactive(docs) : deleteIlan(docs)}
          className="r_btn_ilan h123456"
        >
          {active ? 'İnactive' : 'Sil'}
        </button>
      </div>
    </div>
  );
}
