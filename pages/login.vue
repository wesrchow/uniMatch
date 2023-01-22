<template>
    <v-container fill-height>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
          <GoogleButton @click.native="authLogin()"></GoogleButton>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
</template>
<script>
/*
*
* global stuff
*
* */


/*
*
* firebase setup
*
* */
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserLocalPersistence} from "firebase/auth";

import { AUTH_STORE } from "../static/constants";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATmp3Xr0BUxoWEuJRttMN6u7-AMvQXOmo",
  authDomain: "college-match-ffdb8.firebaseapp.com",
  projectId: "college-match-ffdb8",
  storageBucket: "college-match-ffdb8.appspot.com",
  messagingSenderId: "49669029688",
  appId: "1:49669029688:web:da85c13df4a57b36228bcd",
  measurementId: "G-P20WKV0RHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
  name: 'LoginPage',
  methods: {
    authLogin() {
      /*
      *
      * google sign in
      *
      * */
      const provider = new GoogleAuthProvider(app);
      const auth = getAuth(app);

      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              // const credential = GoogleAuthProvider.credentialFromResult(result);
              // const token = credential.accessToken;

              // The signed-in user info.
              const user = result.user;

              // do stuff with the newly signed-in user
              // move on to preferences page or...
              localStorage.setItem(AUTH_STORE, user);

              this.$router.push("/preferences");

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
}
</script>
<style>
</style>
<link type="text/css" rel="stylesheet" href="bower_components/firebaseui/dist/firebaseui.css" />
