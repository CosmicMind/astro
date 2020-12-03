<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
  svg.layout-node(v-bind:key='key')

</template>

<script lang='ts'>
import Vue from 'vue'

import * as d3 from 'd3'

import { LayoutNode } from '@cosmos'

import { LayoutNodeTree } from '@charts/layout/LayoutNodeTree'
import { DrawableCanvas } from '@charts/interfaces/Drawable'

export default Vue.extend({
  name: 'LayoutNodeVue', 
  
  props: {
    node: {
      required: true,
      type: Object as () => LayoutNode,
    },

    refresh: {
      required: true,
      type: Number,
    },
  },

  data() {
    return {
      chart: new LayoutNodeTree(this.node, { r: 5 }, { height: 100 }),
    }
  },

  computed: {
    key: {
      cache: true,
      get(): string {
        return this.chart.uid
      },
    },

    canvas: {
      cache: true,
      get(): DrawableCanvas {
        return d3.select(this.$el as SVGElement) as DrawableCanvas
      },
    },

    height(): number {
      return this.chart.height
    },
  },

  mounted() {
    this.draw()
  },

  watch: {
    refresh(refresh) {
      this.$nextTick(this.draw)
    },
  },

  methods: {
    resize() {
      const { $el, height } = this
      const width = $el.clientWidth

      $el.setAttribute('width', String(width))
      $el.setAttribute('height', String(height))

      this.chart.resize(width, height)
    },

    draw() {
      this.chart.node = this.node
      this.resize()
      this.chart.drawTo(this.canvas)
    },
  },
})

</script>

<style lang='scss'>
.layout-node {
  width: 100%;
  
  circle {
    fill: #212432;
  }

  path {
    stroke-width: 1px;
    stroke: #BFC7D5;
  }
}

</style>