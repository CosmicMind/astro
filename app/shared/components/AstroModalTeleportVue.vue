<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeModalTeleportVue } from '$/composition'

export default defineComponent({
  name: 'AstroModalTeleportVue',

  components: {
    CompositeModalTeleportVue,
  },
})

</script>

<template>
  <composite-modal-teleport-vue>
    <slot></slot>
  </composite-modal-teleport-vue>

</template>
