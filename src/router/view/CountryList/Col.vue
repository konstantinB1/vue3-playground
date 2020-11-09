<template>
  <div class="col" ref="root">
    <a @click="goTo(col.alpha2Code)" tag="div">
      <div class="col-wrapper">
        <div class="col-img-container">
          <img :src="col.flag" />
        </div>
        <div class="col-text">
          <h3>{{ col.name }}</h3>
          <p>
            Population: {{ col.population }}
          </p>
          <p>
            Region: {{ col.region }}
          </p>
          <p>
            Capital: {{ col.capital }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'

export default {
  props: {
    col: Object
  },

  setup () {
    const router = useRouter()

    function goTo (code) {
      router.push({
        path: `/code/${code.toLowerCase()}`
      })
    }

    return {
      goTo
    }
  }
}
</script>

<style lang="scss" scoped>

@use '@/styles/utils';

.col {
  color: var(--text);

  > a {
    font-weight: 800;
  }

  &-wrapper {
    border-radius: 6px;
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.06);
    background-color: var(--elements);
    overflow: hidden;
    transition: .15s transform, box-shadow cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.15);
      transform: scale(1.1);
    }

    &:hover {
      cursor: pointer;
    }

    > h3 {
      color: var(--text);
      font-size: 16px;
      font-weight: 800;
    }
  }

  &-text {
    padding: 16px 32px 24px 32px;;

    > h3 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    p {
      line-height: 1.8;
      font-weight: 600;
    }
  }
}

.img-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  padding-top: 50%;
}


.col-img-container {
  width: 100%;
  height: 170px;

  > img {
    width: inherit;
    height: inherit;
    object-fit: cover
  }

  @include utils.bp(1440px) {
    min-height: 100%;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>