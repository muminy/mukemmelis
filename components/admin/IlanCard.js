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
    <div className="ilan_details">
      <div className="ax">{is_baslik}</div>
      <div className="firmax">{firma_ad}</div>
      <div className="nitelikx">
        <Link href="/">
          <a className="json_data">JsonData</a>
        </Link>
      </div>
      <div className="sartx">
        <Link href="/">
          <a className="json_data">JsonData</a>
        </Link>
      </div>
      <div className="tipx">{tip}</div>
      <div className="tecrubex">{deneyim}</div>
      <div className="islemx">
        <button className="i_btn_ilan">
          <InfoIcon size={25} color="#b87811" />
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
          onClick={() => active  ? deactive(docs) : deleteIlan(docs)}
          className="r_btn_ilan"
        >
          <DeleteIcon size={25} color="#8b2622" />
        </button>
      </div>
    </div>
  );
}
