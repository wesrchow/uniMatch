<template>
    <v-container>
      <v-col cols="12">
        <v-form
          ref="preferences"
          style="margin-top: 75px;"
        >
          <h1>My Preferences</h1>
          <div class="mb-3">
          <input
            type="checkbox"
            v-model="research"
            name="research"
          />
          <label for="research">Research opportunities are important to me</label>
          </div>
          <p class="mt-4 mb-1">Importance of university ranking:</p>
          <v-slider
            v-model="ranking"
            min="0"
            max="10"
            step="1"
            ticks
            tick-size="4"
            :tick-labels="sliderLabels"
          ></v-slider>
          
          <p class="mt-2 mb-1">Preferred university size:</p>
          <v-slider
            v-model="size"
            min="1"
            max="4"
            step="1"
            ticks
            tick-size="4"
            :tick-labels="sizeLabels"
          ></v-slider>

          <p>Regions to search for a match:</p>
          <div v-for="(r, i) in regions" class="d-inline-block mr-5">
            <label :for="regions[i][0]">
              <input 
              :name="regions[i][0]"
              class="d-inline"
              type="checkbox"
              v-model="regions[i][1]"/>
            {{ regions[i][0] }}</label>
          </div>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="ma-4" color="blue">UPDATE</v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-container>
</template>
<script>
export default {
  name: 'PreferencesPage',
  data() {
    return {
      research: false,
      ranking: 5,
      sliderLabels: [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
      ],
      size: 2,
      sizeLabels: [
        "S", "M", "L", "XL"
      ],
      regions: [
        ["NA 🌎", false],
        ["Europe 🇪🇺", false],
        ["Asia 🌏", false],
        ["Latin America 🌎", false],
        ["Oceania 🌏", false],
      ]
    }
  }
}
</script>
<style scoped>
input[type=checkbox] {
  width: 0.8em;
  height: 0.8em;
  cursor: pointer;
}
</style>