# DBI Vue.js Projekt Frontend

## Aufbau
Die wichtigsten Dateien befinden sich im `src/` Ordner, hier sind sämtliche Seiten (Views), Komponenten und Utilities definiert.
Die Ausgangsdatei ist dabei `src/App.vue`, diese kann mit einer üblichen `index.html` verglichen werden. Mittels Client-Side-Routing wird in dieser dann für jede Seite der jeweilige Content eingefügt. Die Seiten selbst sind in `src/views` definiert, die Pfade in `src/router/index.ts`.
In `src/utils` sind Utilities für das Zugreifen auf die HTTP API abgelegt. Im genauen wird das sogenannte Store-Pattern verwendet um die Daten einheitlich zu halten.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
