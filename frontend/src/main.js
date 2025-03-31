import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

// import * as frappeUI from 'frappe-ui'
// // console.log(frappeUI)

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)
// app.use(createListResource)

app.component('Button', Button)
app.mount('#app')
