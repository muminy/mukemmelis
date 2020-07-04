import firebase from "./loadFirebase";

export default function getBasvuru() {
  return firebase
    .firestore()
    .collection("basvuru")
    .where("active", "==", true)
    .get();
}

export function getDActive() {
  return firebase
    .firestore()
    .collection("basvuru")
    .get();
}

export function updateData(id, active) {
  return firebase
    .firestore()
    .collection("basvuru")
    .doc(id)
    .update({active: active})
}

export function deleteCollection(id) {
  return firebase
    .firestore()
    .collection("basvuru")
    .doc(id)
    .delete()
  
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

export function basvuruAra(
  tip = "",
  sehir = "",
  deneyim = "",
) {
  var query = firebase.firestore().collection("basvuru");
  if (tip !== "") {
    query = query.where("tip", "==", tip);
  }
  if (sehir !== "") {
    query = query.where("sehir", "==", sehir);
  }
  if (deneyim !== "") {
    query = query.where("deneyim", "==", deneyim);
  }
  query = query.where("active", "==", true);
  return query.get();
}

export function setBasvuruData(JsonData = [], callBack) {
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
    ).catch(() => callBack({
      code: 400,
      message: "Bşavuru kayıt edilemedi",
    }))
}

export function setImageFirma(file, slug) {
  return firebase.storage().ref(`firma/${slug}`).put(file);
}

export function getImage(image) {
  return firebase
    .storage()
    .refFromURL(
      `gs://mukemmelis-5d0ef.appspot.com/${image}`,
    );
}
