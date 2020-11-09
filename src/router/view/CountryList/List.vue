<template>
  <infinite-scroll
    v-slot="{ item, index }"
    :list="countries"
    class="list"
    tag="main"
  >
    <data-col
      :col="item"
      :data-id="index"
    />
  </infinite-scroll>
</template>

<script>

import Col from './Col'
import InfiniteScroll from '@/components/InfiniteScroll'

export default {
  components: {
    'data-col': Col,
    InfiniteScroll
  },
  
  props: {
    countries: Array
  }
}
</script>

<style lang="scss" scoped>

@use '@/styles/utils';

.list {
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

}

</style>