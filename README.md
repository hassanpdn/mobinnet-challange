# mobinnet

## Project setup
```
npm install
```
### With errors about PostCss or other errors during installation, use nvm and try to install node.js 14.x.x version to have a compatible installation.
Example: nvm use 14.16.1 and then npm install.

### Compiles and hot-reloads for development
```
npm run serve
```

Create a `.env` file in the root ao the app and add the following values:
```
VUE_APP_API_KEY=<your api key> // REMOVE <> WRAPPER
VUE_APP_API_URL=https://api.url.org/
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
