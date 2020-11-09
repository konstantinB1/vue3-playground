<template>
  <div class="icon">
    <component
      :fill="fill"
      :is="state.icon"
      v-bind="$props"
    />
  </div>
</template>

<script>

import { reactive } from 'vue'

export default {
  props: {
    fill: {
      type: String,
      default: 'var(--input)'
    },
    type: String
  },

  setup (props) {
    const state = reactive({
      icon: null
    })

    ;(async () => {
      const type = props.type
      const file = await import(`./IconTypes/${type}.vue`)

      file?.default && (state.icon = file.default)
    })()

    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

.icon {
  width: 16px;
  height: 16px;
  
  > svg path {
    stroke: red;
  }
}

</style>