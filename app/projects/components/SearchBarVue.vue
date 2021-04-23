<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  SearchVue,
  CompositeSearchBarVue,
} from '$/composition'

export default defineComponent({
  name: 'ProjectsSearchBarVue',

  components: {
    CompositeSearchBarVue,
    SearchVue,
  },
})

</script>

<template>
  <composite-search-bar-vue>
    <template v-slot:start>
      <div class='navbar-item has-gutter grow'>
        <h1 class='title is-1'>Projects</h1>
      </div>
    </template>    
    <template v-slot:center>
      <div class='navbar-item has-gutter grow'>
        <search-vue></search-vue>
      </div>
    </template>
  </composite-search-bar-vue>
  
</template>
