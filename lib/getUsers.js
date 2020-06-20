import loadFirebase from "./loadFirebase"

export const getUsers = () => {

    loadFirebase().auth().signInWithEmailAndPassword('puuwto@gmail.com','mmnyldrm123')
    .then(res => console.log(res))
    .catch(res => console.log(res))
}