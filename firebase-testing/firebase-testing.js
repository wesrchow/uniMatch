/*
*
* global variables
*
* */

const googleSignIn = document.getElementById("google-signin");
const googleSignOut = document.getElementById("google-signout");
const loginStatus = document.getElementById("login-status");
const userInfo = document.getElementById("user-info");

/*
*
* firebase setup
*
* */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

/*
*
* google sign in
*
* */

const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

googleSignIn.addEventListener('click', function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            loginStatus.innerText = "signed in as " + user.displayName;
            setData(user.uid, user.displayName);

            getData(user.uid);
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
});

googleSignOut.addEventListener('click', function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        loginStatus.innerText = "not logged in";
        userInfo.innerText = "";
    }).catch((error) => {
        // An error happened.
    });
});

/*
*
* firestore
*
* */

import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const db = getFirestore(app);

async function setData(userId, userDisplayName) {
    try {
        await setDoc(doc(db, "user-preferences", userId), {
            name: userDisplayName,
            location: "illinois",
            gpa: 6,
            sat_score: 1600
        });
    } catch (e) {
        console.log("setData failed: " + e);
    }

}

async function getData(userId) {
    const docRef = doc(db, "user-preferences", userId);
    const docSnap = await getDoc(docRef);

    try {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            userInfo.innerText = JSON.stringify(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (e) {
        console.log("getData failed: " + e);
    }
}