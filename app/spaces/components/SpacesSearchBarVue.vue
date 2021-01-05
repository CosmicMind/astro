<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-search-bar-vue(v-bind:toggle-state='toggleState')
  template(v-slot:start='')
    .navbar-item.has-gutter
      figure-vue.is-28x28(v-bind:src='"/planet-ringed-duotone.svg"', v-bind:alt='"Space Logo"')
  
    .navbar-item.has-gutter.grow
      router-link-vue.is-ellipsis.no-select(v-bind:to='"/spaces/1"', v-bind:title='"Space"') Space
  
  template(v-slot:center='')
    .navbar-item.has-gutter.grow
      search-vue

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { 
  FigureVue,
  RouterLinkVue,
  SearchVue,
  CompositeSearchBarVue,
} from '$/composition'

export default defineComponent({
  name: 'ProjectsSearchBarVue',

  components: {
    FigureVue,
    RouterLinkVue,
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
