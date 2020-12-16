<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
suspense-vue
  template(v-slot:default='')
    composite-search-bar
      template(v-slot:title='{ title }')
        h1 {{ title }} This is great

    composite-drawer
      p Drawer

    composite-finder
      p Finder

    composite-menu
      p Menu

    composite-tools
      p Tools

    composite-navbar
      p Navbar
      button-vue
        p Button

    composite-toolbar
      p Toolbar  
          
    composite-main
      p Main
  
  template(v-slot:fallback='')
    p Loading...

</template>

<script lang='ts'>
import { 
  ref,
  reactive,
  watch,
  toRefs,
  computed,
  defineComponent,
} from 'vue'

import { Optional } from '$/foundation'

import {
  SuspenseVue,
  CompositeSearchBar,
  CompositeDrawer,
  CompositeNavbar,
  CompositeToolbar,
  CompositeFinder,
  CompositeMenu,
  CompositeTools,
  CompositeMain,
  ButtonVue,
} from '$/composition'

export default defineComponent({
  name: 'Astro',

  components: {
    SuspenseVue,
    CompositeSearchBar,
    CompositeDrawer,
    CompositeNavbar,
    CompositeToolbar,
    CompositeFinder,
    CompositeMenu,
    CompositeTools,
    CompositeMain,
    ButtonVue,
  },

  setup() {
    let y: Optional<number>
    y = 3
    
    console.log(y)
    return {
      // graph: createGraph(),
    }
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

html {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

@include is-gte-tablet() {

}

</style>
