<template>
    <!-- <v-data-table
    :headers="headers"
    :items="unis"
    :items-per-page="5"
    class="elevation-1"
    hide-default-footer
  ></v-data-table> -->
  <v-container style="margin-top: 60px;">
    <h2>Your Top Universities</h2>
    <v-card v-for="(uni, i) in unis" :key="i" class="my-4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-truncate">{{ uni.name }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>personal score {{ uni.rank }}</h4>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-chip>📍{{ uni.location }}</v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
/*
*
* firestore
*
* */
import {initializeApp} from "firebase/app";
import {getFirestore, collection, doc, setDoc, getDoc, getDocs} from "firebase/firestore";
import {getAuth} from "firebase/auth";

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

export default {
  name: 'ResultsPage',
  mounted() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    /*
    *
    * get user preferences from firestore on DOM load
    *
    * */
    // set up the user again
    const auth = getAuth();
    let user = auth.currentUser;

    (async () => {
      // db setup
      const docRef = doc(db, "user-preferences", user.uid);
      const docSnap = await getDoc(docRef);

      try {
        if (docSnap.exists()) {
          let array = docSnap.get("match_list"); // get the value of the field for this user and set it to the vue

          array.sort(function (a, b) {
            if (a[1] === b[1]) {
              return 0;
            }
            else {
              return (a[1] > b[1]) ? -1 : 1;
            }
          });

          for (let i = 0; i < 10; i++) {
            this.unis.push({name: array[i][0], rank: array[i][1], location: ""});
            console.log(this.unis[i]);
          }

        } else {
          // doc.data() will be undefined in this case
          console.log("no data for the user yet");
        }
      } catch (e) {
        console.log("getDataUserPref failed: " + e);
      }
    })();
  },
  data() {
    return {
      headers: [
        { text: "Name", align: 'start', sortable: false, value: "name" },
        { text: "Rank", value: "rank" },
        { text: "Location", value: "location" },
      ],
      unis: [/*
        {
          name: "UBC",
          rank: 42,
          location: "Vancouver, CA"
        },
        {
          name: "University of Toronto",
          rank: 12,
          location: "Toronto, CA"
        },
        {
          name: "Stanford",
          rank: 5,
          location: "Stanford, CA"
        }
      */],
    }
  }
}
</script>
