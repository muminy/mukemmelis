import firebase from "./loadFirebase";

export function setHataBugData(JsonData = [], callBack) {
  return firebase
    .firestore()
    .collection("hatabug")
    .add(JsonData)
    .then((responseJson) =>
      callBack({
        code: 200,
        message: "Başvuru kayıt edildi",
        id: responseJson.id,
      }),
    )
    .catch(() =>
      callBack({
        code: 400,
        message: "Bşavuru kayıt edilemedi",
      }),
    );
}

export function deleteCollection(id) {
  return firebase
    .firestore()
    .collection("hatabug")
    .doc(id)
    .delete();
}

export function getHataBug() {
  return firebase
    .firestore()
    .collection("hatabug")
    .get();
}

export function updateData(id, fixed) {
  return firebase
    .firestore()
    .collection("hatabug")
    .doc(id)
    .update({ fixed: fixed });
}
