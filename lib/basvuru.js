import firebase from "./loadFirebase";

export default function getBasvuru() {
  return firebase
    .firestore()
    .collection("basvuru")
    .orderBy("ilan_id")
    .get();
}

export async function getLastId() {
  return await firebase
    .firestore()
    .collection("basvuru")
    .limitToLast(1)
    .orderBy("ilan_id")
    .get();
}

export function getBasvuruWWhere(id) {
  return firebase
    .firestore()
    .collection("basvuru")
    .where("ilan_id", "==", id)
    .get();
}

export function basvuruAra(tip = '', sehir = '', deneyim = '') {
  var query = firebase.firestore().collection("basvuru")
  if(tip !== ''){
    query = query.where('tip', '==', tip)
  }
  if(sehir !== ''){
    query = query.where('sehir', '==', sehir)
  }
  if(deneyim !== ''){
    query = query.where('deneyim', '==', deneyim)
  }
  return query.get()
}

export function setBasvuruData(
  JsonData = [],
  callBack,
) {
  return firebase
    .firestore()
    .collection("basvuru")
    .add(JsonData)
    .then((responseJson) =>
      callBack({
        code: 200,
        message: "Başvuru kayıt edildi",
        id: responseJson.id,
      }),
    );
}
