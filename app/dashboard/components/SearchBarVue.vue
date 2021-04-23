<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  SearchVue,
  CompositeSearchBarVue,
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

<template>
  <composite-search-bar-vue>
    <template v-slot:start>
      <div class='navbar-item has-gutter grow'>
        <h1 class='title is-1'>Dashboard</h1>
      </div>
    </template>
        
    <template v-slot:center>
      <div class='navbar-item has-gutter grow'>
        <search-vue></search-vue>
      </div>
    </template>
    
    <template v-slot:end>
      <div class='navbar-item has-gutter'>
        <dropdown-vue class='is-right'>
          <template v-slot:trigger>
            <figure-vue class='is-28x28' v-bind:src='"/user-alt-duotone.svg"' v-bind:alt='"Space Logo"'></figure-vue>
          </template>
          <template v-slot:content>
            <access-list-vue></access-list-vue>
          </template>
        </dropdown-vue>
      </div>
    </template>
  </composite-search-bar-vue>

</template>