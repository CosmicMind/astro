<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
#app.app(ref='app')
  suspense-vue
    template(v-slot:default='')
      search-bar-vue(v-bind:toggle-active='toggleActive')
        
      drawer-vue(v-bind:toggle-active='toggleActive')

      finder-vue(v-bind:toggle-active='toggleActive')

      menu-vue(v-bind:toggle-active='toggleActive')

      tools-vue(v-bind:toggle-active='toggleActive')

      navbar-vue

      toolbar-vue
          
      main-vue

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
