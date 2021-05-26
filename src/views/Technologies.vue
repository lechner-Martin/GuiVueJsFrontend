<template>
  <v-card
    outlined
    class="ma-5"
  >
    <v-card-title>
      Technologien
    </v-card-title>

    <v-card-text>
      <p>
        Für diese Applikation verwenden wir im Fronted das JavaScript Framework
        <a href="https://vuejs.org/" target="_blank">Vue.js</a>.
      </p>

      <p>
        Vue.js selbst stellt automatisches und schnelles aktualisieren des DOMs anhand
        der im JavaScript deklarierten Variablen und ein simpel zu verwendendes
        Komponenten-System zur verfügung.
      </p>

      <p>
        Viele weiter Funktionalitäten wie Routing, HTTP-Calls und fertig verwendbare
        Komponenten werden nicht von Vue.js selbst, sondern von modular verwendbaren,
        weiteren Libraries und Frameworks übernommen.
      </p>

      <p>
        In diesem Fall haben wir zu Vue.js als Kern noch zusätzlich folgende Libraries verwendet:
        <ul>
          <li>
            <strong><a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>:</strong>
            UI-Komponenten-Library für Material Design Komponenten (Vuetify = ❤️).
          </li>
          <li>
            <strong><a href="https://router.vuejs.org/" target="_blank">Vue Router</a>:</strong>
            Offizielle Client-Side-Routing library für Vue.js.
          </li>
          <li>
            <strong><a href="https://axios-http.com/" target="_blank">Axios</a>:</strong>
            Promise-basierter JavaScript HTTP client.
          </li>
          <li>
            <strong><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>:</strong>
            Auf JavaScript basierende Programmiersprache welche JS um statische Typisierung erweitert
            und schließlich wieder zu JS kompiliert wird.
          </li>
        </ul>
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Technologies',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
})
</script>
