<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
list-vue.access-list-vue
  list-items-vue
    list-item-vue(v-bind:key='"0"')
      .row
        .row-center
          .column
            label-vue.is-nowrap.has-gutter.no-select Draft
        
        .row-end
          .column   
            icon-vue(v-bind:style='"fas fa-ruler-triangle"')

    list-item-vue(v-bind:key='"1"')
      .row
        .row-center
          .column
            label-vue.is-nowrap.has-gutter.no-select Team
        
        .row-end
          .column   
            icon-vue(v-bind:style='"fas fa-users-class"')

    list-item-vue(v-bind:key='"2"')
      .row
        .row-center
          .column
            label-vue.is-nowrap.has-gutter.no-select Public
        
        .row-end
          .column   
            icon-vue(v-bind:style='"fas fa-globe"')

    list-item-vue(v-bind:key='"4"')
      .row
        .row-center
          .column
            label-vue.is-nowrap.has-gutter.no-select Archive
        
        .row-end   
          .column
            icon-vue(v-bind:style='"fas fa-times"')

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import {
  DividerVue,
  ListVue,
  ListItemsVue,
  ListItemVue,
  LinkVue,
  IconVue,
  LabelVue,
} from '$/composition'

export default defineComponent({
  name: 'AccessListVue',

  components: {
    DividerVue,
    ListVue,
    ListItemsVue,
    ListItemVue,
    LinkVue,
    IconVue,
    LabelVue,
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.access-list-vue {
  
}

</style>