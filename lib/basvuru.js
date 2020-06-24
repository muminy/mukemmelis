import firebase from "./loadFirebase";

export default async function getBasvuru() {
  return await firebase
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

export function setBasvuruData(
  JsonData = [],
  ilan_id,
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
