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

import { default as ColumnVue } from '@/vue/document/ColumnVue.vue'
import { default as ContentRender } from '@/vue/document/ContentRender'

type Props = { 
  bundle: string
  cosmos: Cosmos
  node: LayoutNode
}

export default {
  name: 'ColumnRender',
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
    for (const n of fromFirstChild(node)) children.push(h(ContentRender, { props: { bundle, cosmos, node: n } }))
    return h(ColumnVue, { props: { bundle, cosmos, node, size: 1 } }, children)
  },
}
