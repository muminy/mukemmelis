import { useState } from "react";
import Layout from "../components/Layout";

export default function () {
  const [tags, setTags] = useState(["Php", "JavaScript", "TypeScript", "Java", "İstanbul", "Ankara", "Microsoft"]);
  return (
    <Layout>
      <div className="container">
        <div className="media_area">
          <div className="is_ara_dev">
            <div className="div_h4 h123456">
              <span>Mukemmelis</span>'ini bul
            </div>
            <div className="arama_a">
              <input className="h123456" placeholder="React, Vue, Java developer" />
              <button>ARA</button>
            </div>
            <div className="is_tags">
              {tags.map((item, index) => (<div key={index} className="tag_1 h123456">{item}</div>))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
