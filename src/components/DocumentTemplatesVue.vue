<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
section.document-templates-vue
  document-template-vue(v-bind:title='"New Document"', v-bind:templates='templates', v-bind:show-menu='showMenu')
  document-template-vue(v-bind:title='"History"', v-bind:templates='history')

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import DocumentTemplateVue from '@/components/DocumentTemplateVue.vue'

export default defineComponent({
  name: 'DocumentTemplatesVue',

  components: {
    DocumentTemplateVue,
  },

  setup() {
    const showMenu = false

    const templates = [
      { title: 'Blank' },
      { title: 'Blog' },
      { title: 'Note' },
    ]

    const history = [
      { title: 'Document 1' },
      { title: 'Document 12' },
      { title: 'Document 3' },
      { title: 'Document 7' },
      { title: 'Document 9' },
      { title: 'Document 5' },
      { title: 'Document 11' },
      { title: 'Document 10' },
      { title: 'Document 4' },
    ]

    return {
      showMenu,
      templates,
      history,
    }
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.document-templates-vue {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(1fr);

  overflow-x: auto;
  overflow-y: hidden;

  @include theme() {
    background-color: theme-style(secondary-background);
  }
}

</style>