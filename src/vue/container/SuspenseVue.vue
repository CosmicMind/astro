<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
slot(v-if='error' name='error')
suspense(v-else='')
  template(#default='')
    slot(name='default')
  template(#fallback='')
    slot(name='fallback')

</template>

<script lang='ts'>
import { 
  ref,
  onErrorCaptured, 
} from 'vue'

export default {
  name: 'SuspenseVue',

  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      return true
    })
    return { error }
  },
}

</script>