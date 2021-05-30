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
            <span class="headline">Dienst</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="newService.name"
                    label="Name"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-select
                    v-model="newService.employeeId"
                    label="Mitarbeiter"
                    :items="employees"
                    item-text="name"
                    item-value="id"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-menu
                    ref="showDatePicker"
                    v-model="showDatePicker"
                    :close-on-content-click="false"
                    :return-value.sync="rawDate"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="newService.date"
                        label="Datum"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="rawDate"
                      no-title
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="showDatePicker = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.showDatePicker.save(rawDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
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
              Speichern
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
import { Service, servicesStore } from '@/utils/services-store'
import { Employee, employeesStore } from '@/utils/employees-store'
import { format, parseISO } from 'date-fns'

export default Vue.extend({
  name: 'Services',

  data: () => ({
    newService: {
      name: '',
      employeeId: NaN,
      date: '',
      address: ''
    },
    defaultNewService: {
      name: '',
      employeeId: NaN,
      date: '',
      address: ''
    },
    showNewServiceDialog: false,
    showDatePicker: false,
    rawDate: '',

    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Mitarbeiter', value: 'employee.name' },
      { text: 'Datum', value: 'date' },
      { text: 'Latitude', value: 'latitude' },
      { text: 'Longitude', value: 'longitude' },
      { text: 'Aktionen', value: 'actions', sortable: false }
    ],
    services: servicesStore.state.services,
    employees: employeesStore.state.employees,

    editedId: -1
  }),

  created () {
    employeesStore.init()
    servicesStore.init()
  },

  methods: {
    closeNewServiceDialog () {
      this.showNewServiceDialog = false
      this.$nextTick(() => {
        this.newService = Object.assign({}, this.defaultNewService)
      })
    },

    saveNewService () {
      if (this.editedId <= -1) {
        // Not editing. Save a new service
        servicesStore.addService(this.newService)
      } else {
        // Editing. Update service with id editedId
        servicesStore.editService(this.editedId, this.newService)
        this.editedId = -1
      }

      this.closeNewServiceDialog()
    },

    editService (service: Service) {
      this.editedId = service.id
      this.newService = Object.assign({}, {
        name: service.name,
        employeeId: service.employee.id,
        date: service.date,
        address: `${service.longitude} ${service.latitude}`
      })
      this.showNewServiceDialog = true
    },

    deleteService (service: Service) {
      servicesStore.deleteService(service.id)
    }
  },

  watch: {
    rawDate: function (val) {
      this.newService.date = format(parseISO(val), 'dd.MM.yyyy HH:mm')
    }
  }
})
</script>
