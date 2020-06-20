import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './config';

export default function(){

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    return firebase;
}