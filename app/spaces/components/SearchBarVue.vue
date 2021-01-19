<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-search-bar-vue
  template(v-slot:start='')
    .navbar-item.has-gutter.grow
      h1.title.is-1 Spaces
  
  template(v-slot:center='')
    .navbar-item.has-gutter.grow
      search-vue
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  SearchVue,
  SearchBarVue as CompositeSearchBarVue,
} from '$/composition'

export default defineComponent({
  name: 'SpacesSearchBarVue',

  components: {
    CompositeSearchBarVue,
    SearchVue,
  },
})

</script>
