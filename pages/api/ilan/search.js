import { basvuruAra } from "../../../lib/basvuru";

export default (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  const {
    is_baslik,
    is_tip,
    is_sehir,
    is_deneyim,
  } = req.body;
  const basvuru_search = basvuruAra(
    is_tip,
    is_sehir,
    is_deneyim,
  );
  if (req.method === "POST") {
    basvuru_search.then((responseJson) => {
      let json_data = [];
      responseJson.forEach((documents) => {
        if (is_baslik !== "") {
          if (
            documents
              .data()
              .is_baslik.toLowerCase()
              .indexOf(is_baslik.toLowerCase()) !== -1
          ) {
            json_data.push(Object.assign(documents.data(), {docs: documents.id}));
          }
        } else {
          json_data.push(Object.assign(documents.data(), {docs: documents.id}));
        }
      });
      res.json(json_data);
    });
  } else {
    res.json({ code: 1009, message: "Bad request" });
  }
};
