<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.astro-authenticate-vue
  input-vue(v-model:model-value.capitalize='name')
  select-vue(v-model:model-value.capitalize='selected')
    option(v-for='x in salutations', 
           v-bind:value='x',
           v-bind:key='x',
           v-bind:selected='x == selected') {{ x }}

  p {{ selected }}
  p {{ name }}
    
</template>

<script lang='ts'>
import { 
  ref,
  watch,
  defineComponent,
} from 'vue'

import { 
  InputVue, 
  SelectVue,  
} from '$/composition'

export default defineComponent({
  name: 'AstroAuthenticateVue',

  components: {
    InputVue,
    SelectVue,
  },

  setup() {
    const name = ref('')

    watch(name, () => {
      console.log('Name', name)
    })

    const selected = ref('')
    
    watch(selected, () => {
      console.log('Selected', selected)
    })

    const salutations = [ 'Mr.', 'Miss', 'Mrs' ]

    return { 
      name,
      selected,
      salutations,
    }
  },
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