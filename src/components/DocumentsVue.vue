<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <section class='documents-vue'>
    <ul class='documents'>
      <li class='document' v-for='(x, i) in documents' v-bind:key='i'>
        <document-preview-vue v-bind:title='x.title'></document-preview-vue>
      </li>
    </ul>
  </section>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import DocumentPreviewVue from '@/components/DocumentPreviewVue.vue'

export default defineComponent({
  name: 'DocumentsVue',

  components: {
    DocumentPreviewVue,
  },

  props: {
    documents: {
      required: true,
      type: Object as () => Array<{ title: string }>,
    },
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.documents-vue {
  @include padding-block(to-px($gutter-value * 5));
  @include padding-inline(to-px($gutter-value * 5));

  position: relative;
  display: grid;
  grid-auto-flow: row;

  > .documents {
    @include margin-block();
    @include padding-block();
    @include padding-inline();

    position: relative;
    display: grid;
    grid-auto-flow: row;
    gap: to-px($gutter-value * 5);

    > .document {
      position: relative;
      display: grid;
    }
  }
}

@include is-mobile() {
  .documents-vue {
    > .documents {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include is-tablet() {
  .documents-vue {
    > .documents {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@include is-desktop() {
  .documents-vue {
    > .documents {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@include is-widescreen() {
  .documents-vue {
    > .documents {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

@include is-fullhd() {
  .documents-vue {
    > .documents {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}

</style>