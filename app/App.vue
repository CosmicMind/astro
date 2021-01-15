<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-vue#app-vue.app-vue

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeVue } from '$/composition'

export default defineComponent({
  name: 'App',

  components: {
    CompositeVue,
  },
})

</script>
