<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-main-vue
  button(v-on:click='shouldShow = true') Modal

  astro-modal-teleport(v-if='shouldShow')
    .modal
      button(v-on:click='shouldShow = false') Close
      astro-authenticate-vue
  
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