<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<!--
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
-->

<template lang='pug'>
aside.astro-authenticate-vue
  input-vue(v-model='email', type='text', placeholder='Email')
  input-vue(v-model='password', type='password', placeholder='Password')
  button-vue(v-on:click='onAuthenticate') Sign In
    
</template>

<script lang='ts'>
import { 
  ref,
  watch,
  defineComponent,
} from 'vue'

import { 
  InputVue,
  ButtonVue,
  // SelectVue,
  // CheckboxVue,
  // RadioVue,
  // RadioGroupVue,
} from '$/composition'

// import { UserService } from '$/aurora'

export default defineComponent({
  name: 'AstroAuthenticateVue',

  components: {
    InputVue,
    ButtonVue,
    // SelectVue,
    // CheckboxVue,
    // RadioVue,
    // RadioGroupVue,
  },

  setup() {
    const email = ref('')

    watch(email, () => {
      console.log('Email', email)
    })

    const password = ref('')

    watch(password, () => {
      console.log('Password', password)
    })

    // const selected = ref('')
    
    // watch(selected, () => {
    //   console.log('Selected', selected)
    // })

    // const checked = ref(false)
    
    // watch(checked, () => {
    //   console.log('Checked', checked)
    // })

    // const radio = ref('Cat')
    
    // watch(radio, () => {
    //   console.log('radio', radio)
    // })

    // const options = [
    //   { value: 'transformers' },
    //   { value: 'GI-Joe' },
    // ]

    // const salutations = [ 'Mr.', 'Miss', 'Mrs' ]

    const onAuthenticate = async () => {
      // await UserService.authenticate(email.value, password.value)
      //                  .then((user: any) => {
      //                     console.log('User', user)
      //                     return user
      //                  })
      //                  .catch((e: any) => { console.log('ERROR', e) })
    }

    return { 
      email,
      password,
      onAuthenticate,
      // selected,
      // checked,
      // radio,
      // options,
      // salutations,
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