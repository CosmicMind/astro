<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.astro-authenticate-vue
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CompositeModalVue',
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.astro-authenticate-vue {
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @include theme() {
    background-color: theme-style(primary-background);
  }
}

</style>