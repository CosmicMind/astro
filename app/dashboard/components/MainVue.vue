<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <composite-main-vue>
    <button v-on:click='shouldShow = true'>Modal</button>

    <astro-composite-modal-teleport-vue v-if='shouldShow'>
      <div class='modal'>
        <button v-on:click='shouldShow = false'>Close</button>
        <astro-authenticate-vue></asttro-authenticate-vue>
      </div>
    </astro-composite-modal-teleport-vue>
  </composite-main-vue>
  
</template>

<script lang='ts'>
import { 
  ref,
  defineComponent, 
} from 'vue'

import { CompositeMainVue } from '$/composition'

import AstroModalTeleportVue from '#/app/shared/components/AstroModalTeleportVue.vue'
import AstroAuthenticateVue from '#/app/shared/components/AstroAuthenticateVue.vue'

export default defineComponent({
  name: 'DashboardCompositeSearchBarVue',

  components: {
    CompositeMainVue,
    AstroModalTeleportVue,
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