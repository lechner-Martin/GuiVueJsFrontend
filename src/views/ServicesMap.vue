<template>
  <v-card
    outlined
    class="ma-5"
  >
    <v-card-title>
      Dienstkarte
    </v-card-title>

    <gmap-map
      :center=center
      :zoom="10"
      style="width:100%; height: 80vh">
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in markers"
        :position="gmp"
        @click="center=gmp"
      ></gmap-marker>
    </gmap-map>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { servicesStore } from '@/utils/services-store'

export default Vue.extend({
  name: 'ServicesMap',

  data: () => ({
    center: {
      lat: 48.235767,
      lng: 13.834522
    },
    markers: []
  }),

  async created () {
    await servicesStore.init()
    this.markers = servicesStore.state.services
      .map(x => (
        {
          lat: parseFloat(x.latitude),
          lng: parseFloat(x.longitude)
        }
      ))
  }
})
</script>
