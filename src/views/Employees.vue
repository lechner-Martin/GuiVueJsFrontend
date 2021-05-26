<template>
  <v-card
    outlined
    class="ma-5"
  >
    <v-card-title>
      Mitarbeiter

      <v-spacer></v-spacer>

      <v-dialog
        max-width="500px"
        persistent
        v-model="showNewEmployeeDialog"
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
            Neuen Mitarbeiter Hinzufügen
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">Neuen Mitarbeiter Hinzufügen</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="newEmployee.name"
                    label="Name"
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
              @click="closeNewEmployeeDialog"
            >
              Abbrechen
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="saveNewEmployee"
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
        :items="employees"
        disable-pagination
        hide-default-footer
      >

      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { employeesStore } from '@/utils/employees-store'

export default Vue.extend({
  name: 'Employees',

  data: () => ({
    newEmployee: {
      name: ''
    },
    defaultNewEmployee: {
      name: ''
    },
    showNewEmployeeDialog: false,

    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' }
    ],
    employees: employeesStore.state.employees
  }),

  created () {
    employeesStore.init()
  },

  methods: {
    closeNewEmployeeDialog () {
      this.showNewEmployeeDialog = false
      this.$nextTick(() => {
        this.newEmployee = Object.assign({}, this.defaultNewEmployee)
      })
    },
    saveNewEmployee () {
      employeesStore.addEmployee(this.newEmployee)
      this.closeNewEmployeeDialog()
    }
  }
})
</script>
