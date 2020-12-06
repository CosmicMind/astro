<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
suspense-vue
  template(#default='')
    nav.app-nav.navbar

    main.app-main.main
      article.app-article.article
        h1 Title
        p Title
  
  template(#fallback='')
    p fallback

</template>

<script lang='ts'>
import { 
  ref,
  reactive,
  watch,
  toRefs,
  computed,
} from 'vue'

import { Optional } from '$/foundation'
import SuspenseVue from '$/composition/lib/vue/container/SuspenseVue.vue'

export default {
  name: 'App',

  components: {
    SuspenseVue,
  },

  setup() {
    let y: Optional<number>
    y = 33
    console.log('YYY', y)
    return { 
      y,
    }
  },
}

</script>

<style lang='scss'>
@import 'tools/_dev';

.main {
  background-color: hex-to-rgba(#990000);
}

</style>
