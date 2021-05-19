<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { 
  provide,
  onMounted,
  defineComponent, 
} from 'vue'

import { CompositeAppVue } from '$/composition'
import { Cosmos } from '$/cosmos'

import domains from '^/domains.json'

export default defineComponent({
  name: 'App',

  components: {
    CompositeAppVue,
  },

  setup() {
    const cosmos = new Cosmos()
    provide('cosmos', cosmos)
    
    onMounted(() => {
      cosmos.connect(domains.cosmos)
    })
  },
})

</script>

<style lang='scss'>
.app-vue {}

</style>

<template>
  <composite-app-vue id='app-vue' class='app-vue'></composite-app-vue>

</template>