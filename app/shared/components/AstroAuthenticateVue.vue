<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.astro-authenticate-vue
  input-vue(type='text', v-model:model-value='name')
  checkbox-vue(v-model='checked')
  radio-vue(v-model='radio1', v-bind:value='"1"', name='pets')
  radio-vue(v-model='radio2', v-bind:value='"2"', name='pets')
  select-vue(v-model:model-value='selected')
    option(v-for='x in salutations', 
           v-bind:value='x',
           v-bind:key='x',
           v-bind:selected='x === selected') {{ x }}


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
  CheckboxVue,
  RadioVue,
} from '$/composition'

export default defineComponent({
  name: 'AstroAuthenticateVue',

  components: {
    InputVue,
    SelectVue,
    CheckboxVue,
    RadioVue,
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

    const checked = ref(false)
    
    watch(checked, () => {
      console.log('Checked', checked)
    })

    const radio1 = ref('Cat')
    
    watch(radio1, () => {
      console.log('radio1', radio1)
    })

    const radio2 = ref('Dog')
    
    watch(radio2, () => {
      console.log('radio2', radio2)
    })

    const salutations = [ 'Mr.', 'Miss', 'Mrs' ]

    return { 
      name,
      selected,
      checked,
      radio1,
      radio2,
      salutations,
    }
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.astro-authenticate-vue {
  @include theme() {
    background-color: theme-style(primary-background);
  }
}

</style>