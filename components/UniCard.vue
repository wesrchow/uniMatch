<!-- design from: https://codepen.io/RobVermeer/pen/japZpY by Rob Vermeer -->
<template>
  <div class="card">
    <div style="
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;">
    <img :src="this.logo" referrerpolicy="no-referrer" style="height: 20vh">

    </div>
    <h3>{{ this.schoolName }}</h3>
    <v-chip class="ml-3 mt-2" style="font-size: 0.8em;">
      📍 {{ this.location }}
    </v-chip>
    <p>{{ this.status }} University</p>
    <p>Ranked #<strong>{{ this.ranking }}</strong> Globally</p>

  </div>
</template>
<script>
export default {
  props: {
    schoolName: String,
    location: String,
    ranking: String,
    size: String,
    research: Boolean,
    status: String,
    logo: String,
  },
}
</script>
<style scoped>
.card {
  min-height: 70vh;
  display: inline-block;
  width: 95vw;
  max-width: 400px;
  color: black;
  background: #FFFFFF;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.3s ease-in-out;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;

  box-shadow: 0px 1px 6px -1px #000000;
}

.moving {
  transition: none;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

img {
  max-width: 100%;
  pointer-events: none;
}

h3 {
  margin-top: 32px;
  font-size: 32px;
  padding: 0 16px;
  pointer-events: none;
}

p {
  margin-top: 24px;
  font-size: 20px;
  padding: 0 16px;
  pointer-events: none;
}

.tag-container {
  display: inline-block;
  padding: 0.2em 0.6em;
  margin-left: 1em;
  font-size: 0.7em;
  background-color: rgb(229, 229, 229);
  border-radius: 25px;
}
</style>