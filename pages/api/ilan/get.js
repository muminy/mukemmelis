import getBasvuru from "../../../lib/basvuru";

export default function(req, res) {
    res.statusCode = 200
    const basvuru = getBasvuru();
    basvuru.then(responseJson => {
        let basvuru_data = [];
        responseJson.forEach(docs => {
            basvuru_data.push(docs.data());
        })
        res.json(basvuru_data)
    })
}