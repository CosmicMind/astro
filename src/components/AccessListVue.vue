<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

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

<template>
  <list-vue class='access-list-vue'>
    <list-items-vue>
      <list-item-vue v-bind:key='"0"'>
        <div class='row'>
          <div class='row-center'>
            <div class='column'>
              <label-vue class='is-nowrap has-gutter no-select'>Draft</label-vue>
            </div>
          </div>
          <div class='row-end'>
            <div class='column'>   
              <icon-vue v-bind:style='"fas fa-ruler-triangle"'></icon-vue>
            </div>
          </div>
        </div>
      </list-item-vue>

      <list-item-vue v-bind:key='"1"'>
        <div class='row'>
          <div class='row-center'>
            <div class='column'>
              <label-vue class='is-nowrap has-gutter no-select'>Team</label-vue>
            </div>
          </div>
          <div class='row-end'>
            <div class='column'>   
              <icon-vue v-bind:style='"fas fa-users-class"'></icon-vue>
            </div>
          </div>
        </div>
      </list-item-vue>

      <list-item-vue v-bind:key='"2"'>
        <div class='row'>
          <div class='row-center'>
            <div class='column'>
              <label-vue class='is-nowrap has-gutter no-select'>Public</label-vue>
            </div>
          </div>
          <div class='row-end'>
            <div class='column'>   
              <icon-vue v-bind:style='"fas fa-globe"'></icon-vue>
            </div>
          </div>
        </div>
      </list-item-vue>

      <list-item-vue v-bind:key='"4"'>
        <div class='row'>
          <div class='row-center'>
            <div class='column'>
              <label-vue class='is-nowrap has-gutter no-select'>Archive</label-vue>
            </div>
          </div>
          <div class='row-end'>   
            <div class='column'>
              <icon-vue v-bind:style='"fas fa-times"'></icon-vue>
            </div>
          </div>
        </div>
      </list-item-vue>
    </list-items-vue>
  </list-vue>

</template>
