<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang='ts'>
import { defineComponent } from 'vue'

import LabelVue from '@/elements/LabelVue.vue'
import IconVue from '@/elements/IconVue.vue'

import DocumentPreviewVue from '@/components/DocumentPreviewVue.vue'

export default defineComponent({
  name: 'DocumentTemplateVue',

  components: {
    LabelVue,
    IconVue,
    DocumentPreviewVue,
  },

  props: {
    showMenu: {
      type: Boolean,
      default: true,
    },
    
    title: {
      required: true,
      type: String,
    },

    templates: {
      required: true,
      type: Object as () => Array<{ title: string }>,
    },
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.document-template-vue {
  @include padding-block(to-px($gutter-value * 5));
  @include padding-inline(to-px($gutter-value * 5));

  position: relative;
  display: grid;
  grid-auto-flow: row;

  > .title {
    font-weight: 300;
  }

  > .templates {
    @include margin-block(to-px($gutter-value * 5), 0);

    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, 150px);
    column-gap: to-px($gutter-value * 5);

    > .template {
      position: relative;
      display: grid;
    }

    > .icon-button {
      place-self: center center;
    }
  }
}

</style>

<template lang='html'>
  <section class='document-template-vue'>
    <h1 class='title.is-1'>{{ title }}</h1>

    <div class='templates'>
      <div class='template' v-for='(x, i) in templates' v-bind:key='i'>
        <document-preview-vue v-bind:title='x.title' v-bind:show-menu='showMenu'></document-preview-vue>
      </div>
    </div>
  </section>
    
</template>