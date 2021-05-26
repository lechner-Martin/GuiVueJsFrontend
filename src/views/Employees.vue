<template>
  <v-card
    outlined
    class="ma-5"
  >
    <v-card-title>
      Mitarbeiter
    </v-card-title>

    <v-card-text>
      öjlasdfk
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Employees',

  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' }
    ],
    employees: [

    ]
  })
})
</script>
