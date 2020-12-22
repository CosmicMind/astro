<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
#app.app(ref='app')
  suspense-vue
    template(v-slot:default='')
      composite-search-bar-vue(v-bind:toggle-active='toggleActive')
        
      composite-drawer-vue(v-bind:toggle-active='toggleActive')

      composite-finder-vue(v-bind:toggle-active='toggleActive')

      composite-menu-vue(v-bind:toggle-active='toggleActive')

      composite-tools-vue(v-bind:toggle-active='toggleActive')

      composite-navbar-vue

      composite-toolbar-vue
          
      composite-main-vue

    template(v-slot:fallback='')
      p Loading...

</template>

<script lang='ts'>
import { 
  ref,
  defineComponent,
} from 'vue'

import {
  SuspenseVue,
  CompositeSearchBarVue,
  CompositeDrawerVue,
  CompositeNavbarVue,
  CompositeToolbarVue,
  CompositeFinderVue,
  CompositeMenuVue,
  CompositeToolsVue,
  CompositeMainVue,
  ButtonVue,
} from '$/composition'

export default defineComponent({
  name: 'Astro',

  components: {
    SuspenseVue,
    CompositeSearchBarVue,
    CompositeDrawerVue,
    CompositeNavbarVue,
    CompositeToolbarVue,
    CompositeFinderVue,
    CompositeMenuVue,
    CompositeToolsVue,
    CompositeMainVue,
    ButtonVue,
  },

  setup(props: any, { attrs }) {
    const app = ref(undefined)

    const toggleActive = (className: string) => {
      const el: any = app.value
      if (el instanceof HTMLElement) el.classList.toggle(className)
    }

    return {
      app,
      toggleActive,
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

  @include theme() {
    background-color: theme-style(primary-background);
  }
}

body {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
