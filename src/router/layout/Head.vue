<template>
  <header class="header">
    <div class="header-content">
      <h1 class="header-text">
        Where in the world?
      </h1>
      <div class="theme-switcher" @click="switchTheme">
        <p class="theme-type">
          {{ state.themeText }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>

import { reactive, computed } from 'vue'

function setup (_props, ctx) {
  const storeTheme = localStorage.getItem('countries_theme')
  const state = reactive({
    theme: storeTheme || 'light',
    themeText: computed(() => (
      state.theme === 'light' ? 'Dark mode' : 'Light mode')
    )
  })

  function switchTheme () {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
    ctx.emit('theme', state.theme)
    localStorage.setItem('countries_theme', state.theme)
  }

  return {
    switchTheme,
    state
  }
}

export default { setup }
</script>

<style lang="scss" scoped>

@use '@/styles/utils';

.header {
  box-shadow: var(--m-shadow);
  background-color: var(--elements);
  z-index: 10;
  position: sticky;
  width: 100%;
  top: 0;

  &-text {
    color: var(--text);
    font-size: 22px;
    font-weight: 800;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    padding-top: 30px;
    padding-bottom: 30px;
    @include utils.container;
  }
}

.theme-switcher {
  cursor: pointer;
}

.theme-type {
  color: var(--text);
}

</style>