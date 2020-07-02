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
  deactive,
  ilan_id
}) {
  return (
    <div className="row ilan_details ml_mr">
      <div className="col-lg-3 col-md-6 md_items col-sm-6 ucN h123456">{is_baslik}</div>
      <div className="col-lg-2 col-md-6 md_items col-sm-6 br_0 h123456 ucN">{firma_ad}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items ucN">
        <Link href="/admin/ilan/[id]/sartlar" as={`/admin/ilan/${ilan_id}/sartlar`} >
          <a className="json_data h123456 ucN">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items ucN">
        <Link href="/admin/ilan/[id]/nitelik" as={`/admin/ilan/${ilan_id}/nitelik`}>
          <a className="json_data h123456 ucN">JsonData</a>
        </Link>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items h123456 ucN">{tip}</div>
      <div className="col-lg-1 col-md-3 col-sm-3 md_items br_0 h123456 ucN">{deneyim}</div>
      <div className="col-lg-3 islemx col-md-12 col-sm-12 md_items ucN">
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
