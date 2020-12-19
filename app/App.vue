<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
suspense-vue
  template(v-slot:default='')
    search-bar-vue
      template(v-slot:title='{ title }')
        h1 {{ title }} This is great

    drawer-vue
      p Drawer

    finder-vue
      p Finder

    menu-vue
      p Menu

    tools-vue
      p Tools

    navbar-vue
      p Navbar
      button-vue
        p Button

    toolbar-vue
      p Toolbar  
          
    main-vue
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
  SearchBarVue,
  DrawerVue,
  NavbarVue,
  ToolbarVue,
  FinderVue,
  MenuVue,
  ToolsVue,
  MainVue,
  ButtonVue,
} from '$/composition'

export default defineComponent({
  name: 'Astro',

  components: {
    SuspenseVue,
    SearchBarVue,
    DrawerVue,
    NavbarVue,
    ToolbarVue,
    FinderVue,
    MenuVue,
    ToolsVue,
    MainVue,
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
