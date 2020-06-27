import { getDActive } from "../../../lib/basvuru";

export default function(req, res) {
    res.statusCode = 200
    const basvuru = getDActive();
    basvuru.then(responseJson => {
        let basvuru_data = [];
        responseJson.forEach(docs => {
            basvuru_data.push(Object.assign(docs.data(), {docs: docs.id}));
        })
        res.json(basvuru_data)
    })
}