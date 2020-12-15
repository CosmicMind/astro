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

$composite-search-bar-height-value: 48;
$composite-search-bar-height: to-px(48);

$composite-drawer-width-value: 260;
$composite-drawer-width: to-px(260);

$composite-finder-width-value: 400;
$composite-finder-width: to-px(400);

$composite-menu-width-value: 200;
$composite-menu-width: to-px(200);

$composite-tools-width-value: 200;
$composite-tools-width: to-px(200);

$composite-navbar-height-value: 54;
$composite-navbar-height: to-px(54);

$composite-toolbar-height-value: 48;
$composite-toolbar-height: to-px(48);

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

.composite-search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $composite-search-bar-height;
  background-color: orange;
  z-index: 1;
}

.composite-drawer {
  @include margin-block($composite-search-bar-height, 0);
  
  position: fixed;
  top: 0;
  left: 0;
  width: $composite-drawer-width;
  height: 100vh;
  background-color: purple;
  z-index: 1;
}

.composite-finder {
  @include margin-block($composite-search-bar-height, 0);

  position: fixed;
  top: 0;
  right: 0;
  width: $composite-finder-width;
  height: 100vh;
  background-color: blue;
  z-index: 1;
}

.composite-navbar {
  @include margin-block($composite-search-bar-height, 0);
  @include margin-inline(to-px($composite-drawer-width-value), $composite-finder-width);
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $composite-navbar-height;
  background-color: yellow;
  z-index: 1;
}

.composite-toolbar {
  @include margin-block(to-px($composite-search-bar-height-value + $composite-navbar-height-value), 0);
  @include margin-inline(to-px($composite-drawer-width-value), $composite-finder-width);
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $composite-toolbar-height;
  background-color: magenta;
  z-index: 1;
}

.composite-menu {
  @include margin-block(to-px($composite-search-bar-height-value + $composite-navbar-height-value + $composite-toolbar-height-value), 0);
  @include margin-inline(to-px($composite-drawer-width-value), 0);
  
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: $composite-menu-width;
  background-color: cyan;
  z-index: 0;
  overflow: auto;
}

.composite-tools {
  @include margin-block(to-px($composite-search-bar-height-value + $composite-navbar-height-value + $composite-toolbar-height-value), 0);
  @include margin-inline(0, $composite-finder-width);
  
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: $composite-tools-width;
  background-color: lightcoral;
  z-index: 0;
  overflow: auto;
}

.composite-main {
  @include margin-block(to-px($composite-search-bar-height-value + $composite-navbar-height-value + $composite-toolbar-height-value), 0);
  @include margin-inline(to-px($composite-drawer-width-value + $composite-menu-width-value), 
                         to-px($composite-finder-width-value + $composite-tools-width-value));
  
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: green;
  z-index: 0;
  overflow: auto;
}

@include is-gte-tablet() {

}

</style>
