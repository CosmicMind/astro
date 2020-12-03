/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { 
  VNode, 
  CreateElement, 
} from 'vue'

import { 
  Cosmos,
  LayoutNode,
  fromFirstChild, 
} from '@cosmos'

import { default as ColumnRender } from '@/vue/document/ColumnRender'

type Props = { 
  bundle: string
  cosmos: Cosmos
  node: LayoutNode
}

export default {
  name: 'RowRender',
  functional: true,
  
  props: {
    bundle: {
      type: String,
    },

    cosmos: {
      type: Object as () => Cosmos,
    },

    node: {
      type: Object as () => LayoutNode,
    },
  },

  render(h: CreateElement, ctx: { props: Props }) {
    const { bundle, cosmos, node } = ctx.props
    const children: Array<VNode> = []
    for (const n of fromFirstChild(node)) children.push(h(ColumnRender, { props: { bundle, cosmos, node: n } }))
    return renderRowVNode(h, children)
  },
}

/**
 * Renders the row `VNode`.
 * @param {CreateElement} h 
 * @param {Array<VNode>} children
 * @return {VNode} 
 */
function renderRowVNode(h: CreateElement, children: Array<VNode>): VNode {
  return h('div', {
    staticClass: 'row-vue row no-select',
  }, children)
}
