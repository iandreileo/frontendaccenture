// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALGzq_ZCJs16rQS9Y8VHVXvWggOiq3QLk',
  authDomain: 'accenture-f4fff.firebaseapp.com',
  databaseURL: 'https://accenture-f4fff-default-rtdb.firebaseio.com',
  projectId: 'accenture-f4fff',
  storageBucket: 'accenture-f4fff.appspot.com',
  messagingSenderId: '474426372214',
  appId: '1:474426372214:web:13412c5d415bcb0352af57',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth();

export async function loginUser(email, password) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (e) =>  {
  e.preventDefault();
  auth.signInWithRedirect(provider);

}
