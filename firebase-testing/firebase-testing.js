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
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
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

import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";


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

            // do stuff with the newly signed-in user
            loginStatus.innerText = "signed in as " + user.displayName;

            // console.log(getDataUserPref(user.uid, ""));

            // let temp = [1,2,3,4,5];
            // updateDataUserPref(user.uid, "match_list", temp);

            (async function(){
                let temp = await getDataUserPref(user.uid, "match_list");
                temp[3] = 6;
                updateDataUserPref(user.uid, "match_list", temp);
            })();



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

import {getFirestore, collection, doc, setDoc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const db = getFirestore(app);

/*
* preference definitions
*
* region: multi select
* research: boolean
* size: multi select
* ranking: priority 0 - 10
* match_list: array of numbers that stores the priority of a given college (matches the order from college list collection array)
*
* */

// set all user preference data for a user
async function setAllDataUserPref(userId, userDisplayName, region, research, size, ranking, match_list) {
    try {
        await setDoc(doc(db, "user-preferences", userId), { // create/update all field data for a user
            name: userDisplayName,
            region: region,
            research: research,
            size: size,
            ranking: ranking,
            match_list: match_list
        });
        console.log("all data");
    } catch (e) {
        console.log("setAllDataUserPref failed: " + e);
    }
}

// update a single field for a users preferences
async function updateDataUserPref(userId, fieldEdit, fieldData) {
    const docRef = doc(db, "user-preferences", userId); // get a doc object for the current user

    try {
        await updateDoc(docRef, { // update the firestore field
            [fieldEdit]: fieldData
        });
        console.log("update data");
    } catch (e) {
        console.log("updateDataUserPref failed: " + e);
    }
}

// get a single field from a users preferences
async function getDataUserPref(userId, field) {
    // db setup
    const docRef = doc(db, "user-preferences", userId);
    const docSnap = await getDoc(docRef);

    try {
        if (docSnap.exists()) {
            return docSnap.get(field); // get the value of the field for this user
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (e) {
        console.log("getDataUserPref failed: " + e);
    }
}

// async function getData(userId) {
//     // db setup
//     const docRef = doc(db, "user-preferences", userId);
//     const docSnap = await getDoc(docRef);
//
//     try {
//         if (docSnap.exists()) {
//             userInfo.innerText = JSON.stringify(docSnap.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     } catch (e) {
//         console.log("getData failed: " + e);
//     }
// }