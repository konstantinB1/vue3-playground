<template>
  <div>
    <div class="top-controls">
      <btn icon="ArrowLeft" @click="goBack">
        Back
      </btn>
    </div>
    <div class="country-id">
      <div class="country-id-frame">
        <img :src="state.country?.flag" />
      </div>
      <div class="country-id-text-wrap">
        <h1>
          {{ state.country.name || '-' }}
        </h1>
        <ul class="country-id-text-data">
          <li>
            <b>Native Name:</b>
            {{ state.country.nativeName }}
          </li>
          <li>
            <b>Population:</b>
            {{ state.country.population }}
          </li>
          <li>
            <b>Region:</b>
            {{ state.country.region }}
          </li>
          <li>
            <b>Sub region:</b>
            {{ state.country.subregion }}
          </li>
          <li>
            <b>Capital:</b>
            {{ state.country.capital }}
          </li>
          <li>
            <b>Top Level Domain:</b>
            {{ (state.country.topLevelDomain || []).toString() }}
          </li>
          <li>
            <b>Currencies:</b>
            {{ (state.country.currencies || []).map(({ name }) => name).toString() }}
          </li>
          <li>
            <b>Languages:</b>
            {{ (state.country.languages || []).map(({ name }) => name).toString()  }}
          </li>
        </ul>
        <div class="border-list">
          <btn small v-for="border in state.country.borders" :key="border" @click="goTo(border)">
            {{ border }}
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive } from 'vue'
import { fetchByAlpha2 } from '@/api/country'
import { useRouter, useRoute } from 'vue-router'
import Btn from '@/components/Btn'

export default {
  components: {
    Btn
  },

  setup (_props, { emit }) {
    const state = reactive({
      country: {}
    })

    const router = useRouter()
    const route = useRoute()

    ;(async () => {
      try {
        const routeName = route.params.country_id
        const data = await fetchByAlpha2(routeName)
        state.country = data
      } finally {
        emit('loading', false)
      }
    })()

    function goBack() {
      router.go(-1)
    }

    emit('loading', true)

    return {
      goBack,
      state
    }
  }
}
</script>

<style lang="scss" scoped>

@use '@/styles/utils';

.country-id {
  display: grid;
  grid-gap: 100px;
  grid-template-columns: calc(50% - 35px) calc(50% - 35px);
  height: 100%;

  @include utils.bp(1440px) {

  }

  &-frame {
    > img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &-text-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--text);
    position: relative;
    padding: 30px 0;

     h1 {
      margin: 0;
    }
  }

  &-text-data {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    height: 200px;
    width: auto;
    overflow-x: hidden;

    li {
      line-height: 2.2;
      min-width: 50%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      > span {
        white-space: nowrap;
      }
    }

    b {
      font-weight: 600;
    }
  }
}

.border-list {
  display: flex;
  flex-wrap: wrap;
  
  button {
    margin-right: 10px;
    margin-top: 10px;
  }
}

.top-controls {
  margin-bottom: 50px;
}

</style>