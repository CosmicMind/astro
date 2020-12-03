/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { CreateElement } from 'vue'

import { 
  Entity,
  Cosmos,
  Store,
  LayoutNode,
} from '@cosmos'

import { default as ContentVue } from '@/vue/document/ContentVue.vue'

import { default as TextApp } from '@/vue/app/TextApp.vue'

type Props = { 
  bundle: string
  cosmos: Cosmos
  node: LayoutNode
}

export default {
  name: 'ContentRender',
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
    const app: Entity = node.entity
    const store: Store = cosmos.store(app.uid)
    return h(ContentVue, { props: { bundle, cosmos, node } }, [ h(TextApp, { props: { app, store } }) ])
  },
}
