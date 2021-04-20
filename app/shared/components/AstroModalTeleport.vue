<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <modal-teleport>
    <slot></slot>
  </modal-teleport>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { ModalTeleport } from '$/composition'

export default defineComponent({
  name: 'AstroModalTeleport',

  components: {
    ModalTeleport,
  },
})

</script>
