<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
#app-vue.app-vue(ref='appVue')
  suspense-vue
    template(v-slot:default='')
      router-view(name='search-bar', v-bind:toggle-state='toggleState')
      router-view(name='navbar', v-bind:toggle-state='toggleState')
      router-view(name='toolbar', v-bind:toggle-state='toggleState')
      router-view(name='drawer', v-bind:toggle-state='toggleState')
      router-view(name='finder', v-bind:toggle-state='toggleState')
      router-view(name='menu', v-bind:toggle-state='toggleState')
      router-view(name='tools', v-bind:toggle-state='toggleState')
      router-view(name='main', v-bind:toggle-state='toggleState')

    template(v-slot:fallback='')
      p Loading...

</template>

<script lang='ts'>
import { 
  ref,
  defineComponent, 
} from 'vue'

import { SuspenseVue } from '$/composition'

export default defineComponent({
  name: 'App',

  components: {
    SuspenseVue,
  },

  setup() {
    const appVue = ref(null)
    
    const toggleState = (className: string, onOff?: boolean) => {
      const el: any = appVue.value
      if (el instanceof HTMLElement) 
        if (false === onOff) el.classList.remove(className) 
        else if (true === onOff) el.classList.add(className)
        else el.classList.toggle(className)
    }

    return {
      appVue,
      toggleState,
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
  overflow: auto;
}

</style>
