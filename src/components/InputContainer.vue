<template>
  <div class="input-container">
    <slot />
  </div>
</template>
<style lang="scss" scoped>

.input-container {
  padding: 16px 22px;
  width: 200px;
  background-color: var(--elements);
  border-radius: 6px;
  box-shadow: var(--m-shadow);
  cursor: pointer;
  position: relative;

  &:hover {
    transition: 1s box-shadow cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.06);
  }
}

</style>