<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-vue.app-vue

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeVue } from '$/composition'

import { Optional } from '$/foundation'

export default defineComponent({
  name: 'App',

  components: {
    CompositeVue,
  },

  setup() {
    let y: Optional<number>
    y = 111
    console.log('HELLO', y)
    return {}
  },
})

</script>
