<template>
  <theme :theme="state.theme">
    <router-view @theme="setTheme" />
  </theme>
</template>

<script>

import Theme from './Theme'
import { reactive } from 'vue'

function setup () {
  const storageItem = localStorage.getItem('countries_theme')
  const state = reactive({
    theme: storageItem || 'light'
  })

  function setTheme (type) {
    state.theme = type
  }

  return {
    setTheme,
    state
  }
}


export default {
  components: {
    Theme
  },

  setup
}
</script>
