<template>
  <div class="container">
    <headr @theme="emitTheme" />
    <div class="layout-wrapper">
      <router-view v-slot="{ Component }">
        <view-loader v-show="state.isLoading" key="loader" />
          <keep-alive>
        <transition name="slide-left" mode="in-out">
            <component
              v-show="!state.isLoading"
              key="router-render"
              :is="Component"
              @loading="isLoading"
            />
        </transition>
          </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>

import Headr from './Head'
import { reactive } from 'vue'
import ViewLoader from '@/components/ViewLoader'


function setup (_p, { emit }) {
  const state = reactive({
    isLoading: false
  })

  function isLoading (isLoading) {
    state.isLoading = isLoading
  }

  function emitTheme (e) {
    emit('theme', e)
  }

  return {
    emitTheme,
    isLoading,
    state
  }
}

export default {
  setup,
  components: {
    Headr,
    ViewLoader
  }
}
</script>

<style lang="scss" scoped>

@use '@/styles/utils';

.container {
  background-color: var(--bg);
  height: 100%;
  min-height: 100vh;
}

.layout-wrapper {
  @include utils.container;
  padding-top: 50px;
  padding-bottom: 50px;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateY(-20px)
}

.slide-left-enter-to {
  opacity: 1;
  transition: .3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(0);
}

</style>