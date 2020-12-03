<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
  .column-vue.column.no-select(v-bind:key='key', v-bind:class='classes')
    slot

    button.icon-button.control.insert-before(v-on:click='insertBefore')
      i.fas(v-bind:class='{ "fa-arrow-alt-to-left": isFirst , "fa-arrows-h": !isFirst }')
    
    button.icon-button.control.append-child(v-if='isLast', v-on:click='insertAfter')
      i.fas.fa-arrow-alt-to-right

</template>

<script lang='ts'>
import Vue from 'vue'

import {
  isFirst,
  isLast,
} from '@foundation/structures/Tree'

import { 
  Entity,
  Cosmos,
  Layout,
  LayoutNode,
} from '@cosmos'

export default Vue.extend({
  name: 'ColumnVue', 
  
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
    },

    size: {
      required: true,
      type: Number,
    }
  },

  computed: {
    key: {
      cache: false,
      get(): string {
        return this.node.uid
      },
    },

    entity: {
      cache: true,
      get(): Entity {
        return this.node.entity
      },
    },

    layout: {
      cache: true,
      get(): Layout {
        return this.cosmos.layout(this.bundle)
      },
    },

    isFirst(): boolean {
      return isFirst(this.node)
    },

    isLast(): boolean {
      return isLast(this.node)
    },

    classes(): object {
      return {
        [`size-${this.size}`]: true,
      }
    },
  },

  methods: {
    insertBefore() {
      const { layout } = this
      const n = layout.column()
      n.appendChild(layout.content())
      this.node.insertBefore(n)
      layout.sync(n.parent!)
    },

    insertAfter() {
      const { layout } = this
      const n = layout.column()
      n.appendChild(layout.content())
      this.node.insertAfter(n)
      layout.sync(n.parent!)
    },
  },
})

</script>

<style lang='scss'>
@import 'src/style/helpers/spacing';

.column-vue {
  @include padding-block(32px);
  @include padding-inline(32px);

  position: relative;
  align-items: flex-start !important;
  align-content: flex-start !important;
  justify-content: flex-start !important;

  > .control {
    position: absolute;
    z-index: 1;

    &.insert-before {
      margin-top: -16px;
      left: -16px;
      top: 50%;
    }

    &.append-child {
      margin-top: -16px;
      right: -16px;
      top: 50%;
    }
  }
}

</style>

