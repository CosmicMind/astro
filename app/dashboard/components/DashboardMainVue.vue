<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.composite-main-vue
  p Dashboard

  button(v-on:click='shouldShow = true') Modal

  astro-modal-teleport(v-if='shouldShow')
    astro-authenticate-vue
      button(v-on:click='shouldShow = false') Close
  
</template>

<script lang='ts'>
import { 
  ref, 
  defineComponent, 
} from 'vue'

import AstroModalTeleport from '#/app/shared/components/AstroModalTeleport.vue'
import AstroAuthenticateVue from '#/app/shared/components/AstroAuthenticateVue.vue'

export default defineComponent({
  name: 'DashboardMenuVue',

  components: {
    AstroModalTeleport,
    AstroAuthenticateVue,
  },

  props: {
    toggleState: {
      required: true, 
      type: Function,
    },
  },

  setup({ toggleState }) {
    const shouldShow = ref(false)

    toggleState('composite-main-vue-active', true)

    return {
      shouldShow,
    }
  },
})

</script>
