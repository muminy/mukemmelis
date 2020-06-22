import firebase from "./loadFirebase";

export default async function getBasvuru() {
  return await firebase
  .firestore()
  .collection("basvuru")
  .limitToLast(1)
  .orderBy('ilan_id')
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
    .doc((ilan_id + 1).toString())
    .set(JsonData)
    .then((responseJson) =>
      callBack({
        code: 200,
        message: "Başvuru kayıt edildi",
        id: ilan_id + 1,
      }),
    );
}

export async function getLastId() {
  const basvuru = await firebase
    .firestore()
    .collection("basvuru")
    .get();
  return await basvuru.size;
}
