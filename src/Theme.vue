<template>
  <div id="app-themer">
    <slot />
  </div>
</template>
<script>

import { reactive, watch, nextTick } from 'vue'
import { forOwn, transform } from 'lodash'

const themes = {
  dark: {
    bg: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)',
    input: 'hsl(0, 0%, 98%)',
    text: 'hsl(0, 0%, 100%)'
  },

  light: {
    bg: 'hsl(0, 0%, 98%)',
    input: 'hsl(0, 0%, 52%)',
    elements: 'hsl(0, 0%, 100%)',
    text: 'hsl(200, 15%, 8%)'
  }
}

export default {
  props: {
    theme: {
      type: String,
      required: true,
      validator: v => ([
        'light',
        'dark'
      ]).includes(v)
    }
  },

  setup (props) {
    const state = reactive(
      transform(themes.light, (res, _value, key) => (
        res[key] = null
      ), {})
    )

    watch(() => props.theme, type => {
      nextTick(() => {
  
        // Need to bind it to this directly
        // Style var bindings dont work in with nested destructuring
        forOwn(themes[type], (value, key) => (
          key in state && (state[key] = value)
        ))
      })
    }, { 
      immediate: true
    })      

    return state
  }
}
</script>

<style vars="{ bg, elements, input, text }" lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

:root {
  --txt-home: 16px;
  --txt-det: 14px;
  --bp-mobile: 375px;
  --bp-desktop: 1440px;
  --m-shadow: 0px 0px 5px 3px rgba(0,0,0,0.03);
}

body {
  font-family: 'Nunito Sans', sans-serif;
}

input {
  font-family: inherit;
}

* {
  box-sizing: border-box;
}

html, body, p, span, h1, h2, h3, b, a {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--text);
}

</style>