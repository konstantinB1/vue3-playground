<template>
  <component
    :is="tag"
    ref="container"
  >
    <div
      v-for="(item, index) in state.viewEls"
      :key="index"
    >
      <slot
        :item="item"
        :index="index"
      />
    </div>
  </component>
</template>

<script>
import { reactive, ref, onMounted, onUnmounted, watch } from 'vue'
import { debounce } from 'lodash'

function setup (props) {
  const container = ref(null)
  const state = reactive({
    viewEls: [],
    lastOffset: 0,
  })

  function scrollHandler () {
    const { list, margin } = props
    
    if (state.viewEls.length === list.length) {
      return
    }

    const scrollTop = document.documentElement.scrollTop
    const elapsed = scrollTop + window.innerHeight
    const lastHeight = (container.value?.getBoundingClientRect().height) || 0
    
    lastHeight - elapsed <= margin && appendItems()
  }

  function appendItems () {
    const { lastOffset } = state
    const { list, byNumber } = props

    const nextOffset = lastOffset + byNumber
    state.viewEls = list.slice(0, nextOffset)
    state.lastOffset = nextOffset
  }

  // If list changes 
  // Do a hard reset
  function listWatcherFn () {
    state.viewEls = []
    state.lastOffset = 0
    appendItems()
  }

  function init () {
    const dbScrollHandler = debounce(scrollHandler, 100)
    window.addEventListener('scroll', dbScrollHandler)

    appendItems()

    watch(() => props.list, listWatcherFn)
  }

  function cleanup () {
    window.removeEventListener('scroll', scrollHandler)
  }

  onMounted(init)
  onUnmounted(cleanup)

  return {
    container,
    state
  }
}

export default {
  setup,
  props: {
    byNumber: {
      type: Number,
      default: 20
    },

    list: {
      type: Array,
      required: true
    },

    margin: {
      type: Number,
      default: 150
    },

    tag: {
      type: String,
      default: 'div'
    }
  }
}

</script>
