<template>
    <v-container fill-height>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
          <GoogleButton
            @click="authLogin"
          ></GoogleButton>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
</template>
<script>
export default {
  name: 'LoginPage',
  methods: {
    authLogin() {
      // login method
    }
  }
}
</script>
<style>
</style>
<link type="text/css" rel="stylesheet" href="bower_components/firebaseui/dist/firebaseui.css" />