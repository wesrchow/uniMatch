<template>
  <v-app>
    <v-main>
      <v-app-bar
        color="black"
        class="mb-2"
        absolute
      >
        <v-toolbar-title style="color: white;">College Match</v-toolbar-title>
      </v-app-bar>
      <Nuxt style="margin-top: 7vh;"/>
    </v-main>
    <v-footer
      app
    >
      <span>nwHacks 2023</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
body {
  max-width: min(100vw, 550px);
  margin: auto;
}
</style>
