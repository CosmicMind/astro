<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { 
  inject,
  onMounted,
  onBeforeUnmount,
  defineComponent,
} from 'vue'

import { CompositeMainVue } from '$/composition'

import { 
  Cosmos,
  CosmosStatus,
} from '$/cosmos'

import { 
  createDocument, 
  DocumentVue,
} from '$/focus'

export default defineComponent({
  name: 'DashboardMainVue',

  components: {
    CompositeMainVue,
    DocumentVue,
  },

  setup() {
    const bundle = 'document'
    const cosmos = inject('cosmos') as Cosmos
    
    const document = createDocument(bundle, cosmos)
    
    const onConnecting = () => {
      console.log(CosmosStatus.connecting)
    }

    const onConnected = () => {
      console.log(CosmosStatus.connected)
    }

    const onDisconnected = () => {
      console.log(CosmosStatus.disconnected)
    }

    cosmos.on(CosmosStatus.connecting, onConnecting)
    cosmos.on(CosmosStatus.connected, onConnected)
    cosmos.on(CosmosStatus.disconnected, onDisconnected)

    onMounted(() => {
      onBeforeUnmount(() => {
        cosmos.off(CosmosStatus.connecting, onConnecting)
        cosmos.off(CosmosStatus.connected, onConnected)
        cosmos.off(CosmosStatus.disconnected, onDisconnected)
      })  
    })

    return {
      document,
    }
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.focus-app {
  @include padding-block(48px);
  @include padding-inline(48px);
}

</style>

<template>
  <composite-main-vue class='focus-app'>
    <document-vue v-bind:document='document'></document-vue>
  </composite-main-vue>

</template>
