<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-search-bar-vue
  template(v-slot:start='')
    .navbar-item.has-gutter.grow
      h1.title.is-1 Dashboard
  
  template(v-slot:center='')
    .navbar-item.has-gutter.grow
      search-vue
  
  template(v-slot:end='')
    .navbar-item.has-gutter
      dropdown-vue.is-right
        template(v-slot:trigger='')
          figure-vue.is-28x28(v-bind:src='"/user-alt-duotone.svg"', v-bind:alt='"Space Logo"')
        template(v-slot:content='')
          access-list-vue
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  SearchVue,
  SearchBarVue as CompositeSearchBarVue,
  FigureVue,
  DropdownVue,
} from '$/composition'

import AccessListVue from '@/components/AccessListVue.vue'

export default defineComponent({
  name: 'DashboardSearchBarVue',

  components: {
    CompositeSearchBarVue,
    SearchVue,
    FigureVue,
    DropdownVue,
    AccessListVue,
  },
})

</script>
