<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10" class="d-flex flex-column align-center">
        <UniCard
        v-for="(uni, i) in swipeQueue"
        :key="i"
        :id="`${uni.schoolName}-${i}`"
        :schoolName="uni.schoolName"
        :location="uni.location"
        :ranking="uni.ranking"
        :size="uni.size"
        :research="uni.research"

        v-hammer:pan="e => pan(e, `${uni.schoolName}-${i}`)"
        v-hammer:panend="e => panend(e)"
        ></UniCard>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
import { UniCard } from '../components/UniCard.vue';
import { VueHammer } from 'vue2-hammer';

export default {
  name: 'IndexPage',
  data() {
    return {
      swipeQueue: [
        { 
          schoolName: "UBC",
          location: "Canada",
          ranking: 42,
          size: "XL",
          research: true
        },
        { 
          schoolName: "UofT",
          location: "Canada",
          ranking: 37,
          size: "S",
          research: true
        },
      ]
    }
  },
  methods: {
    pan(event, id) {
      const ele = document.getElementById(id);
      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;

      // tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
      // tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti / 5;


      event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + Math.min(event.deltaY, 10) + 'px) rotate(' + rotate + 'deg)';
    
      // submit to firestore
    },
    panend(event) {
      const el = event.target;
      el.classList.remove('moving');
    // tinderContainer.classList.remove('tinder_love');
    // tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 40 || Math.abs(event.velocityX) < 0.2;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
    }
    }
  },
  created(){
    if (process.browser){
      console.log(window.innerWidth, window.innerHeight);
    }
  },
}
</script>