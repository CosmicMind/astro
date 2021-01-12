<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
aside.astro-authenticate-vue
  input-vue(type='text', v-model='name')
  checkbox-vue(v-model='checked')
  radio-group-vue(v-bind:name='"toys"', 
                  v-model='radio', 
                  v-bind:options='options',
                  v-bind:is-vertical='true')
  select-vue(v-model='selected')
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
  RadioGroupVue,
} from '$/composition'

export default defineComponent({
  name: 'AstroAuthenticateVue',

  components: {
    InputVue,
    SelectVue,
    CheckboxVue,
    RadioVue,
    RadioGroupVue,
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

    const radio = ref('Cat')
    
    watch(radio, () => {
      console.log('radio', radio)
    })

    const options = [
      { value: 'transformers' },
      { value: 'GI-Joe' },
    ]

    const salutations = [ 'Mr.', 'Miss', 'Mrs' ]

    return { 
      name,
      selected,
      checked,
      radio,
      options,
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