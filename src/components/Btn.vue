<template>
  <button class="button" :class="[
    disabled && 'disabled',
    small && 'small'
  ]"
  >
    <div class="icon-wrap" v-if="icon">
      <icon :type="icon" />
    </div>
    <span>
      <slot />
    </span>
  </button>
</template>

<script>

import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },

  props: {
    disabled: Boolean,
    icon: String,
    small: Boolean
  }
}
</script>

<style lang="scss" scoped>

.button {
  position: relative;
  background-color: var(--elements);
  box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.28);
  padding: 10px 45px;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .4s box-shadow cubic-bezier(0.165, 0.84, 0.44, 1);
  outline: 0;

  &:hover {
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.28);

    .icon-wrap {
      transition: .2s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: translateX(-2px);
    }
  }

  > span {
    color: var(--text);
  }

  .icon-wrap {
    margin-right: 8px;
    
    > svg {
      fill: var(--text);
    }
  }
}

.disabled {
  cursor: auto;
  &:hover {
    box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.28);
  }
}

.small {
  padding: 8px 32px;
}

</style>