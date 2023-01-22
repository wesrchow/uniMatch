<template>
  <v-app>
    <v-main>
      <v-app-bar
        color="black"
        class="mb-2"
        absolute
      >
        <div @click="home">
          <v-toolbar-title style="color: white;" >uniMatch</v-toolbar-title>
        </div>
      </v-app-bar>
      <Nuxt/>
    </v-main>
    <v-bottom-navigation v-model="value" color="primary" grow fixed>
      <v-btn value="preferences" @click="$router.push('/preferences')">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>

      <v-btn value="swipe" @click="$router.push('/swipe')">
        <v-icon>mdi-school-outline</v-icon>
      </v-btn>

      <v-btn value="results" @click="$router.push('/results')">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
<!--    <v-footer-->
<!--      app-->
<!--    >-->
<!--&lt;!&ndash;      <span>built during nwHacks 2023</span>&ndash;&gt;-->
<!--    </v-footer>-->
  </v-app>
</template>

<script>
import { AUTH_STORE } from '../static/constants';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      value: "swipe",
      loggedIn: false,
    }
  },
  methods: {
    home() {
      this.$router.push("/")
    }
  },
  created() {
    if(localStorage.getItem(AUTH_STORE)) this.loggedIn = true;
  }
}
</script>
<style>
body {
  width: min(100vw, 550px);
  margin: auto;

  font-family: 'Poppins';font-size: 22px;
}
</style>
