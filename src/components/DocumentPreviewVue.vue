<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='html'>
  <document-preview-vue>
    <div class='content'>
      <div class='preview'>
        <div class='toolbar'>
          <div class='toolbar-end'> 
            <div class='toolbar-item'>
              <icon-vue v-bind:style='"fas fa-users-class"'></icon-vue>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='toolbar'>
      <div class='toolbar-center'>
        <div class='toolbar-item'>
          <label-vue class='is-ellipsis no-select'>{{ title }}</label-vue>
        </div>
      </div>
      
      <div class='toolbar-end' v-if='showMenu'>
        <div class='toolbar-item'>
          <dropdown-vue class='is-top'>
            <template v-slot:trigger>
              <icon-vue class='no-select' v-bind:style='"fas fa-ellipsis-h"'></icon-vue>
            </template>
            <template v-slot:content>
              <access-list-vue></access-list-vue>
            </template>
          </dropdown-vue>
        </div>
      </div>
    </div>
  </document-preview-vue>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import IconVue from '@/elements/IconVue.vue'
import LabelVue from '@/elements/LabelVue.vue'
import DropdownVue from '@/elements/DropdownVue.vue'

import AccessListVue from '@/components/AccessListVue.vue'

export default defineComponent({
  name: 'DocumentPreviewVue',

  components: {
    IconVue,
    LabelVue,
    DropdownVue,
    AccessListVue,
  },

  props: {
    title: {
      required: true,
      type: String,
    },

    showMenu: {
      type: Boolean,
      default: true,
    },
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.document-preview-vue {
  position: relative;
  display: grid;
  min-width: 150px;
    
  > .content {
    position: relative;
    padding-top: 150%;
    height: 0;

    z-index: 1000;

    cursor: pointer;
    
    border: 1px solid;
    border-radius: $border-radius;

    @include theme() {
      background-color: theme-style(primary-background);
      border-color: theme-style(primary-border);
    }

    > .preview {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      > .toolbar {
        @include padding-inline(to-px($gutter-value * 2));

        height: $toolbar-height;
      }
    }
  }

  > .toolbar {
    height: $toolbar-height;

    > .toolbar-center {
      > .toolbar-item {
        > .label-vue {
          font-size: 1.125rem;
          font-weight: 600;
        }
      }
    }
  }
}

</style>