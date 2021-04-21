<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeAppVue } from '$/composition'

import { Optional } from '$/foundation'

export default defineComponent({
  name: 'App',

  components: {
    CompositeAppVue,
  },

  setup() {
    let y: Optional<number>
    y = 111
    console.log('HELLO', y)
    return {}
  },
})

</script>

<template>
  <composite-app-vue id='app-vue' class='app-vue'></composite-app-vue>

</template>