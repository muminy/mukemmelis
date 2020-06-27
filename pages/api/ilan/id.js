import {getBasvuruWWhere} from "../../../lib/basvuru";

export default function(req, res) {
    res.statusCode = 200
    const ilan = getBasvuruWWhere(parseInt(req.body.id));
    if(req.method === 'POST'){
        ilan.then(responseJson => {
            let new_data = [];
            responseJson.forEach(docs => new_data.push(Object.assign(docs.data(), {docs: docs.id})))
            res.json(new_data[0]);
        })
    }
}