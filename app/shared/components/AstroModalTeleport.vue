<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
composite-modal-teleport
  slot

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { CompositeModalTeleport } from '$/composition'

export default defineComponent({
  name: 'AstroModalTeleport',

  components: {
    CompositeModalTeleport,
  },
})

</script>
