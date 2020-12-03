<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
  .content-vue.content.no-select(v-bind:key='key')
    slot 

    button.icon-button.control.insert-before(v-on:click='insertBefore')
      i.fas(v-bind:class='{ "fa-arrow-to-top": isFirst , "fa-arrows-v": !isFirst }')
    
    button.icon-button.control.append-child(v-if='isLast', v-on:click='insertAfter')
      i.fas.fa-arrow-to-bottom

</template>

<script lang='ts'>
import Vue from 'vue'

import {
  isFirst,
  isLast,
} from '@foundation/structures/Tree'

import { 
  Cosmos,
  Layout,
  LayoutNode,
} from '@cosmos'

export default Vue.extend({
  name: 'ContentVue', 
  
  props: {
    bundle: {
      required: true,
      type: String,
    },

    cosmos: {
      required: true,
      type: Object as () => Cosmos,
    },

    node: {
      required: true,
      type: Object as () => LayoutNode,
    }
  },

  computed: {
    key: {
      cache: false,
      get(): string {
        return this.node.uid
      },
    },

    layout(): Layout {
      return this.cosmos.layout(this.bundle)
    },

    isFirst(): boolean {
      return isFirst(this.node)
    },

    isLast(): boolean {
      return isLast(this.node)
    },
  },

  methods: {
    insertBefore() {
      const { layout } = this
      const n = layout.content()
      this.node.insertBefore(n)
      layout.sync(n.parent!)
    },

    insertAfter() {
      const { layout } = this
      const n = layout.content()
      this.node.insertAfter(n)
      layout.sync(n.parent!)
    },
  },
})

</script>

<style lang='scss'>
@import 'src/style/helpers/spacing';

.content-vue {
  @include padding-block(16px);
  @include padding-inline(16px);

  > .control {
    position: absolute;
    z-index: 1;

    &.insert-before {
      margin-left: -16px;
      top: -16px;
      left: 50%;
    }

    &.append-child {
      margin-left: -16px;
      left: 50%;
      bottom: -16px;
    }
  }
}

</style>

