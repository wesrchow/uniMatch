<!-- design from: https://codepen.io/RobVermeer/pen/japZpY by Rob Vermeer -->
<template>
  <div class="card">
    <img src="https://placeimg.com/600/300/people">
    <h3>{{ this.schoolName }}</h3>
    <div class="tag-container">
      📍 {{ this.location }}
    </div>
    <p>Ranked #<strong>{{ this.ranking }}</strong> Globally</p>

  </div>
</template>
<script>
export default {
  props: {
    schoolName: String,
    location: String,
    ranking: Number,
    size: String,
    research: Boolean,
  },
}
</script>
<style scoped>
.card {
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