import Link from "next/link";

export default function () {
  return (
    <Link href="/ilan/[slug]" as="/ilan/mm">
      <a className="is_ilan_card">
        <header>
          <div className="yer">İstanbul</div>
          <h3>UI Designer</h3>
          <div className="is_tipi">
            <img src="https://lh3.googleusercontent.com/proxy/XIFPEFgj2kWi9G_5zmbjGcpQuuK7VRZzLcRPz8zxnh5IVpvQJh9wHIWJd1NiRAth-wU-TNiNvhPXWI1ppRaVSg" />
            <div className="name">Google, Inc</div>
          </div>
        </header>
        <button className="basvur_btn_card">Başvur</button>
      </a>
    </Link>
  );
}
