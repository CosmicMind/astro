<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>

nav.app-nav.navbar

main.app-main.main
  article.app-article.article
    h1 Title
    p Title

</template>

<script lang='ts'>
import { 
  ref,
  reactive,
  watch,
  toRefs,
  computed,
} from 'vue'

export default {
  name: 'App',

  components: {
    
  },

  setup() {
    return { 
      
    }
  },
}

</script>

<style lang='scss'>
@import 'src/style/helpers/conversion';

.main {
  background-color: hex-to-rgba(#332211)
}

</style>
