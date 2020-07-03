import loadFirebase from "./loadFirebase";

export const userLogin = (
  user_name,
  password,
  callback,
) => {
  return loadFirebase
    .auth()
    .signInWithEmailAndPassword(user_name, password)
    .then((responseJson) => callback(responseJson))
    .catch(responseJson => callback(responseJson))
};
