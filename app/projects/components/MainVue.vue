<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <composite-main-vue>
    <p>Projects</p>
  </composite-main-vue> 

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeMainVue } from '$/composition'

export default defineComponent({
  name: 'ProjectsCompositeSearchBarVue',

  components: {
    CompositeMainVue
  },
})

</script>