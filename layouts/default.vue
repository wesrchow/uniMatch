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
      <Nuxt/>
    </v-main>
    <v-footer
      app
    >
      <span>built during nwHacks 2023</span>
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
  width: min(100vw, 550px);
  margin: auto;

  font-family: 'Poppins';font-size: 22px;
}
</style>
