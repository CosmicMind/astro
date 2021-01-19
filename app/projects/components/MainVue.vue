<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-main-vue
  p Projects 

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { MainVue as CompositeMainVue } from '$/composition'

export default defineComponent({
  name: 'ProjectsSearchBarVue',

  components: {
    CompositeMainVue
  },
})

</script>