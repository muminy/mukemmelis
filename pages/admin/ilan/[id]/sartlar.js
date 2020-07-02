import Layout from "../../../../components/Layout";
import { useEffect, useState } from "react";
import { getBasvuruWWhere } from "../../../../lib/basvuru";

export default function Sartlar({ id }) {
  const [jsonData, setJsonData] = useState({});
  useEffect(() => {
    getBasvuruWWhere(parseInt(id.id)).then((responseJson) =>
      responseJson.forEach((documents) =>
        setJsonData(documents.data())
      ),
    );
  }, [id]);
  return (
    <div className="json_dat2a">
      <div className="jData">
        {Object.keys(jsonData).length
          ? jsonData.is_sart.map((item, index) => (
              <div key={index}>{item}</div>
            ))
          : null}
      </div>
    </div>
  );
}

Sartlar.getInitialProps = ({ query }) => {
  return { id: query };
};
