<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <composite-main-vue>
    <button v-on:click='shouldShow = true'>Modal</button>

    <astro-modal-teleport v-if='shouldShow'>
      <div class='modal'>
        <button v-on:click='shouldShow = false'>Close</button>
        <astro-authenticate-vue></asttro-authenticate-vue>
      </div>
    </astro-modal-teleport>
  </composite-main-vue>
  
</template>

<script lang='ts'>
import { 
  ref,
  defineComponent, 
} from 'vue'

import { MainVue as CompositeMainVue } from '$/composition'

import AstroModalTeleport from '#/app/shared/components/AstroModalTeleport.vue'
import AstroAuthenticateVue from '#/app/shared/components/AstroAuthenticateVue.vue'

export default defineComponent({
  name: 'DashboardSearchBarVue',

  components: {
    CompositeMainVue,
    AstroModalTeleport,
    AstroAuthenticateVue,
  },

  setup() {
    const shouldShow = ref(false)

    return {
      shouldShow,
    }
  },
})

</script>