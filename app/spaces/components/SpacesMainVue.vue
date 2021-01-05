<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside#projects-main-vue.composite-main-vue
  p Spaces

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsMenuVue',

  props: {
    toggleState: {
      required: true, 
      type: Function,
    },
  },

  setup({ toggleState }) {
    toggleState('composite-main-vue-active', true)

    return {}
  },
})

</script>
