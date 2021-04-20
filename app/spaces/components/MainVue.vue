<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <composite-main-vue>
    <p>Spaces</p>
  </composite-main-vue> 

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { MainVue as CompositeMainVue } from '$/composition'

export default defineComponent({
  name: 'SpacesSearchBarVue',

  components: {
    CompositeMainVue
  },
})

</script>