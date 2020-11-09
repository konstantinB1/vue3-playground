<template>
  <input-container class="container">
    <div class="icon">
      <icon type="Search" />
    </div>
    <input
      class="input"
      type="text"
      v-bind="$attrs"
      ref="input"
    />
  </input-container>
</template>

<script>

import InputContainer from './InputContainer'
import Icon from '@/components/Icon'

export default {
  inheritAttrs: false,

  components: {
    Icon,
    InputContainer
  }
}
</script>

<style lang="scss" scoped>

.container {
  width: 400px;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.input {
  border: 0;
  width: 100%;
  outline: 0;
  padding-left: 16px;
  background-color: inherit;
  color: var(--input);
  font-size: 14px;
  letter-spacing: 0.2px;

  &::placeholder {
    color: inherit;
  }
}

</style>