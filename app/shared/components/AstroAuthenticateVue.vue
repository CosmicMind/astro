<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <aside class='astro-authenticate-vue'>
    <input-vue v-model='email' type='text' placeholder='Email'></input-vue>
    <input-vue v-model='password' type='password' placeholder='Password'></input-vue>
    <button-vue v-on:click='onAuthenticate'>Sign In</button>
  </aside>
    
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

import { authenticateUser } from '$/aurora'

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
      await authenticateUser(email.value, password.value)
        .then((user: any) => {
          console.log('User', user)
          return user
        })
        .catch((e: any) => { console.log('ERROR', e, e.type, 'type', e.type == 'DataServiceError') })
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