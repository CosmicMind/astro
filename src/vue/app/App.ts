/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import Vue from 'vue'

import { Entity } from '@cosmos'

import {
  Store,
  Layout,
  Paper,
} from '@cosmos'

export default Vue.extend({
  name: 'App',
  
  props: {
    app: {
      required: true,
      type: Object as () => Entity,
    },

    store: {
      required: true,
      type: Object as () => Store,
    },
  },

  computed: {
    bundle(): string {
      return this.app.uid
    },
    
    layout: {
      cache: true,
      get(): Layout {
        return new Layout(this.store)
      },
    },

    paper: {
      cache: true,
      get(): Paper {
        return new Paper(this.store)
      },
    },
  },
})
