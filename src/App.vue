<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      clipped-left
      flat
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>
          Vue.js Demo
        </h1>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      permanent
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="navItem in navItems"
          :key="navItem.title"
          :to="navItem.view"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ navItem.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ navItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    navItems: [
      { title: 'Dienste', icon: 'mdi-face-agent', view: '/services' },
      { title: 'Mitarbeiter', icon: 'mdi-clipboard-account-outline', view: 'employees' },
      { title: 'Technologien', icon: 'mdi-vuejs', view: '/technologies' }
    ]
  })
})
</script>
