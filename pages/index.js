import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function () {
  const [tags, setTags] = useState([
    { id: "Kocaeli", type: "location" },
    { id: "Senior", type: "experience" },
    { id: "İstanbul", type: "location" },
    { id: "Remote", type: "type" },
    { id: "Tam Zamanlı", type: "type" },
    { id: "Ankara", type: "location" },
    { id: "Stajyer", type: "type" },
  ]);
  const [value, setValue] = useState("");
  return (
    <Layout title="Mükemmelis'ini bul">
      <div className="container">
        <div className="media_area">
          <div className="is_ara_dev">
            <div className="div_h4 h123456">
              <span>Mukemmelis</span>'ini bul
            </div>
            <div className="arama_a">
              <input
                onChange={(event) =>
                  setValue(event.target.value)
                }
                className="h123456"
                placeholder="React, Vue, Java developer"
              />
              <Link href={value === '' ? '/isbul' : `/isbul?value=${value}`}>
                <a className="ara_btn">ARA</a>
              </Link>
            </div>
            <div className="is_tags">
              {tags.map((item, index) => (
                <Link
                  key={index}
                  href={`/isbul?${item.type}=${item.id}`}
                >
                  <a className="tag_1 h123456">{item.id}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
