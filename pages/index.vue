<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to College Match
        </v-card-title>
        <v-card-text>
          <h2>Discover your one true love and home for the next stage of your life!</h2>
          <h2 class="mt-2">Find exactly what you're looking for in no time flat.</h2>
          <hr class="my-3">
          <p>Built in 24 hours as part of nwHacks 2023.</p>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
