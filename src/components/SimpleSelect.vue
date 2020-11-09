<template>
  <input-container @click="state.open = !state.open">
    <div class="select-text-wrapper">
      <span>
        {{ value || 'Filter by region' }}
      </span>
    </div>
    <transition name="select" mode="in-out">
      <ul class="select-menu" v-show="state.open">
        <li v-for="({ text, handler }, index) in items" :key="index"  @click.stop="wrapHandler($event, text, handler)">
          <span>
            {{ text }}
          </span>
        </li>
      </ul>
    </transition>
  </input-container>
</template>

<script>

import InputContainer from './InputContainer'
import { reactive } from 'vue'

function setup () {
  const state = reactive({
    open: false
  })

  function wrapHandler (e, text, fn) {
    state.open = false
    fn(e, text)
  }

  return {
    state,
    wrapHandler
  }
}

export default {
  setup,
  components: {
    InputContainer
  },

  props: {
    items: Array,
    value: String
  }
}
</script>

<style lang="scss" scoped>

.select {
  &-text-wrapper {
    color: var(--text);
    font-size: var(--txt-det);
    font-weight: 600;

    > span {
      display: inline-block;
      margin-top: 2px;
    }
  }

  &-menu {
    margin: 0;
    list-style-type: none;
    position: absolute;
    top: 60px;
    left: 0;
    padding: inherit;
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    box-shadow: inherit;
    z-index: 10;
    background-color: var(--elements);
    color: var(--text);
    font-size: var(--txt-det);

    li {
      user-select: none;
      font-weight: 600;
      line-height: 1.9;
      &:hover {
        opacity: .9;
      }
    }
  }
}

.select-leave-to,
.select-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}

.select-leave-from,
.select-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: .4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

</style>