/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
