<template>
    <!-- <v-data-table
    :headers="headers"
    :items="unis"
    :items-per-page="5"
    class="elevation-1"
    hide-default-footer
  ></v-data-table> -->
  <v-container style="margin-top: 60px;">
    <h2>Your Top Universities</h2>
    <v-card v-for="(uni, i) in unis" :key="i" class="my-4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-truncate">{{ uni.name }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>#{{ uni.rank }}</h4>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-chip>📍{{ uni.location }}</v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'ResultsPage',
  data() {
    return {
      headers: [
        { text: "Name", align: 'start', sortable: false, value: "name" },
        { text: "Rank", value: "rank" },
        { text: "Location", value: "location" },
      ],
      unis: [
        {
          name: "UBC",
          rank: 42,
          location: "Vancouver, CA"
        },
        {
          name: "University of Toronto",
          rank: 12,
          location: "Toronto, CA"
        },
        {
          name: "Stanford",
          rank: 5,
          location: "Stanford, CA"
        }
      ],
    }
  }
}
</script>