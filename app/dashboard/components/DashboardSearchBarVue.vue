<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-search-bar-vue(v-bind:toggle-state='toggleState')
  template(v-slot:start='')
    .navbar-item.has-gutter.grow
      h1.title.is-1 Dashboard
  
  template(v-slot:center='')
    .navbar-item.has-gutter.grow
      search-vue
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  SearchVue,
  CompositeSearchBarVue,
} from '$/composition'

export default defineComponent({
  name: 'DashboardSearchBarVue',

  components: {
    CompositeSearchBarVue,
    SearchVue,
  },

  props: {
    toggleState: {
      required: true, 
      type: Function,
    },
  },
})

</script>
