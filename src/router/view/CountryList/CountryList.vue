<template>
  <div>
    <div class="search-controls">
      <input-field
        @input="searchCountry"
        placeholder="Search for a country..."
        ref="input"
      />
      <simple-select
        :items="regions()"
        :value="state.curType"
      />
    </div>
    <list :countries="state.display" />
  </div>
</template>

<script>

import { reactive, ref } from 'vue'
import { fetchAll } from '@/api/country'
import List from './List'
import SimpleSelect from '@/components/SimpleSelect'
import InputField from '@/components/InputField'

function setup (_props, { emit }) {
  const input = ref(null)
  const state = reactive({
    all: [],
    display: [],
    curType: null,
    searchText: ''
  })

  function regions () {
    return [
      ['Africa', 'Africa'],
      ['America', 'Americas'],
      ['Asia', 'Asia'],
      ['Europe', 'Europe'],
      ['Oceania', 'Oceania']
    ].map(([ text, filter ]) => ({
      text,
      handler: () => {
        callFilter(filter)
      }
    }))
  }

  (async () => {
    try {
      const data = await fetchAll()
      state.all = state.display = data
    } finally {
      emit('loading', false)
    }
  })()

  function searchCountry (e) {
    const value = e.target.value.toLowerCase()
    const { curType } = state

    if (!value) {
      curType
        ? setFilter(curType)
        : (state.display = state.all)

      return
    }

    state.display = state.display.filter(({ name }) => (
      name.toLowerCase().includes(value)
    ))
  }

  function setFilter (type) {
    state.curType = type
    state.display = state.all.filter(({ region }) =>
      (region === type)
    )
  }

  function callFilter (type) {
    if (state.curType === type) {
      return
    }
    
    console.log(input)
    setFilter(type)
  }

  emit('loading', true)

  return {
    regions,
    searchCountry,
    state
  }
}

export default {
  setup,
  components: {
    InputField,
    List,
    SimpleSelect
  }
}
</script>
<style lang="scss" scoped>

.loader-leave-to,
.loader-enter-from {
  transition: 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
}

.loader-leave-from,
.loader-enter-to {
  transition: 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 1;
}

.loader-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
}

.search-controls {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}

</style>