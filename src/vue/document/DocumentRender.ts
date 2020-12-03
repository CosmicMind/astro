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

import { default as RowRender } from '@/vue/document/RowRender'

type Props = { 
  bundle: string
  cosmos: Cosmos
  node: LayoutNode
}

export default {
  name: 'DocumentRender',
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
    for (const n of fromFirstChild(node)) children.push(h(RowRender, { props: { bundle, cosmos, node: n } }))
    return renderDocumentVNode(h, children)
  },
}

/**
 * Renders the document `VNode`.
 * @param {CreateElement} h 
 * @param {Array<VNode>} children
 * @return {VNode} 
 */
function renderDocumentVNode(h: CreateElement, children: Array<VNode>): VNode {
  return h('div', {
    staticClass: 'document-vue layout no-select',
  }, children)
}
