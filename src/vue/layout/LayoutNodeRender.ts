/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { 
  default as Vue, 
  VNode, 
  CreateElement, 
} from 'vue'


import { LayoutNode } from '@cosmos'

import { default as LayoutNodeVue } from '@/vue/layout/LayoutNodeVue.vue'

export default Vue.extend({
  name: 'LayoutNodeRender',
  functional: true,
  
  props: {
    node: {
      required: true,
      type: Object as () => LayoutNode,
    },
  },

  render(h: CreateElement, context) {
    const node: LayoutNode = context.props.node
    const children: Array<VNode> = []
    return fetchVue(h, node, children)
  },
})

function fetchVue(h: CreateElement, node: LayoutNode, children: Array<VNode>) {
  return h(LayoutNodeVue, { props: { node, refresh: node.size } }, children)
}
