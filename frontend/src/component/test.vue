<template>
  <div>
    <pre>
      {{ JSON.stringify(sites.data.data, null, 2) }}
    </pre>
  </div>
</template>

<script setup>
import { createResource } from 'frappe-ui'
import { createListResource } from 'frappe-ui'

// const sites = createListResource({
//   doctype: 'Site',
//   fields: ['name', 'site_name'],
// })

const sites = createResource({
  url: 'http://127.0.0.1:8000/api/method/farmer.api.user_api.fetch_site_list',
  method: 'GET',
})

sites.fetch()
console.log(sites.data)
</script>
