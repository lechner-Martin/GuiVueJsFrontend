<template>
  <v-card
    outlined
    class="ma-5"
  >
    <v-card-title>
      Dienste

      <v-spacer></v-spacer>

      <v-dialog
        max-width="500px"
        persistent
        v-model="showNewServiceDialog"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            elevation="0"
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
            Neuen Dienst Hinzufügen
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">Neuen Dienst Hinzufügen</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="newService.serviceName"
                    label="Name"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="newService.employee"
                    label="Mitarbeiter"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="newService.date"
                    label="Datum"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="newService.address"
                    label="Adresse"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="closeNewServiceDialog"
            >
              Abbrechen
            </v-btn>
            <v-btn
             color="blue darken-1"
             text
             @click="saveNewService"
            >
              Hinzufügen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="services"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editService(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="deleteService(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Services',

  data: () => ({
    newService: {
      serviceName: '',
      employee: '',
      date: '',
      address: ''
    },
    defaultNewService: {
      serviceName: '',
      employee: '',
      date: '',
      address: ''
    },
    showNewServiceDialog: false,

    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'serviceName' },
      { text: 'Mitarbeiter', value: 'employee' },
      { text: 'Datum', value: 'date' },
      { text: 'Latitude', value: 'latitude' },
      { text: 'Longitude', value: 'longitude' },
      { text: 'Aktionen', value: 'actions', sortable: false }
    ],
    services: [
      {
        id: 0,
        serviceName: 'Putzen',
        employee: 'Hubert Sauerampfer',
        date: '09.03.2019 12:33',
        latitude: '13.6251',
        longitude: '19.9172'
      },
      {
        id: 1,
        serviceName: 'Rasenmähen',
        employee: 'Hubert Sauerampfer',
        date: '09.04.2019 13:37',
        latitude: '17.6251',
        longitude: '20.9172'
      },
      {
        id: 2,
        serviceName: 'Heckenschneiden',
        employee: 'Franz Mayer',
        date: '22.04.2019 18:00',
        latitude: '14.4018',
        longitude: '48.310845'
      }
    ]
  }),

  methods: {
    closeNewServiceDialog () {
      this.showNewServiceDialog = false
      this.$nextTick(() => {
        this.newService = Object.assign({}, this.defaultNewService)
      })
    },

    saveNewService () {
      // TODO save data
      this.closeNewServiceDialog()
    }
  }
})
</script>
