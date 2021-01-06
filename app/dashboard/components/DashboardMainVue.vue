<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.composite-main-vue
  p Dashboard

  teleport(to='#composite-modal-vue')
    astro-authenticate-vue
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import AstroAuthenticateVue from '#/app/shared/components/AstroAuthenticateVue.vue'

export default defineComponent({
  name: 'DashboardMenuVue',

  components: {
    AstroAuthenticateVue,
  },

  props: {
    toggleState: {
      required: true, 
      type: Function,
    },
  },

  setup({ toggleState }) {
    toggleState('composite-main-vue-active', true)

    return {}
  },
})

</script>
