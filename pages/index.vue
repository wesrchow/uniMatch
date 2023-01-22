<template>
  <v-col style="text-align: center;" class="px-0" cols="12">
    <v-img
      aspect-ratio="1"
      src="https://images.unsplash.com/photo-1635295852796-f6867d868156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      
      class="blur"
    >
      <div class="overlay-box pa-3">
        <p>Find your perfect academic match 🎓</p>
        <v-btn 
          color="blue" 
          style="opacity: 1;"
          to="/login">Login/Register</v-btn>
      </div>
    </v-img>
    <div style="padding-top: 20%; padding-bottom: 20%;">
      <h2>Fill out your profile in under five minutes and match with relevant universities across the globe.</h2>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
.overlay-box {
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  background-color: white;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 1;

  border: 1px solid black;
}
</style>