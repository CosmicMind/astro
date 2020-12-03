<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template lang='pug'>
  .text-app
    .toolbar
      .toolbar-end.grow
        .toolbar-item 
          input(type='text', ref='font', v-model='text.attributes.fontSize')
        
        .toolbar-item
          button.icon-button(v-on:click='onUndo')
            i.fas.fa-undo

        .toolbar-item
          button.icon-button(v-on:click='onRedo')
            i.fas.fa-redo
        
        //- .toolbar-item
        //-   button.icon-button(v-on:click='onToggleCharacterSize')
        //-     i.fas.fa-lasso
        
        //- .toolbar-item 
        //-   button.icon-button(v-on:click='onToggleRTL')
        //-     i.fas.fa-paragraph-rtl
        
        //- .toolbar-item
        //-   button.icon-button(v-on:click='onAlignLeft')
        //-     i.fas.fa-align-left
        
        //- .toolbar-item
        //-   button.icon-button(v-on:click='onAlignCenter')
        //-     i.fas.fa-align-center

        //- .toolbar-item
        //-   button.icon-button(v-on:click='onAlignRight')
        //-     i.fas.fa-align-right

        //- .toolbar-item
        //-   button.icon-button(v-on:click='onAlignJustify')
        //-     i.fas.fa-align-justify

    textarea-vue(v-bind:text='text')

</template>

<script lang='ts'>
import Vue from 'vue'

import { 
  Store,
  Paper,
} from '@cosmos'

import { 
  Operation,
  createInsertOperation,
  Transaction,
  Text,
} from '@rocket'

import { default as App } from '@/vue/app/App'

// import { default as InputVue } from '@rocket/vue/InputVue.vue'
import { default as TextareaVue } from '@rocket/vue/TextareaVue'

export default App.extend({
  name: 'TextApp',

  components: {
    TextareaVue,
  },

  data() {
    return {
      // options: { 
      //   isRTL: false, 
      //   isCharacterSize: false, 
      //   align: 'left', 
      // },
    }
  },

  computed: {
    text(): Text {
      const d = new Text({
        fontSize: '1.125rem', 
        fontFamily: 'lato',
        fontWeight: 'normal',
        fontStyle: 'normal', 
        lineHeight: 'normal',
      })
      // d.apply([ createInsertOperation('👨‍👨‍👧‍👧🌷🎁💩happy😜👍🏳️‍🌈') ])
      return d
    },
  },

  mounted() {
    //@ts-ignore
    this._handlers = {
      onDiff: this.onDiff.bind(this),
      onUpdate: this.onUpdate.bind(this),
    }

    //@ts-ignore
    this.paper.store.once('diff', this._handlers.onDiff)
    //@ts-ignore
    this.paper.store.on('update', this._handlers.onUpdate)

    this.text.on('afterTransaction', this.onAfterTransaction)
  },

  beforeDestroy() {
    //@ts-ignore
    this.paper.store.off('update', this._handlers.onUpdate)

    this.text.off('afterTransaction', this.onAfterTransaction)
  },

  methods: {
    // onToggleRTL() {
    //   this.options.isRTL = !this.options.isRTL
    // },

    // onToggleCharacterSize() {
    //   this.options.isCharacterSize = !this.options.isCharacterSize
    // },

    // onAlignLeft() {
    //   this.text.attributes.align = this.options.isRTL ? 'right' : 'left'
    // },

    // onAlignCenter() {
    //   this.text.attributes.align = 'center'
    // },

    // onAlignRight() {
    //   this.text.attributes.align = this.options.isRTL ? 'left' : 'right'
    // },

    // onAlignJustify() {
    //   this.text.attributes.align = 'justify'
    // },

    onDiff(store: Store) {
      console.log('onDiff', store)
    },

    onUpdate(p: Paper, ops: Array<Operation>) {
      this.text.apply(ops)
    },

    onAfterTransaction(t: Text, tr: Transaction) {
      this.paper.apply(t, tr.operations)
    },

    onUndo() {
      this.paper.undo()
    },

    onRedo() {
      this.paper.redo()
    },
  },
})

</script>

<style lang='scss'>
@import 'src/style/helpers/specs';
@import 'src/style/helpers/spacing';
@import 'src/style/helpers/animation';

.text-app {
  @include margin-block();
  @include margin-inline();
  @include padding-block(12px);
  @include padding-inline(12px);

  position: relative;
  width: 100%;

  /// this value will actually need to be figured out, so that the
  /// long running whitespace doesn't push the cell width past the
  /// intended bounds.
  max-width: 100%;

  > .toolbar {
    > .toolbar-end {
      > .toolbar-item {
        .icon-button {
          color: #697098;
        }
      }
    }
  }
}

.textarea-vue {
  position: relative;
  
  > .canvas-vue {
    @include margin-block();
    @include margin-inline();
    @include padding-block();
    @include padding-inline();

    position: relative;
    width: 100%;

    > .line-vue {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      .line {
        position: absolute;
        left: 0;
        width: 100%;
        background-color: #f5f5f5;
        border: 1px solid #f0f0f0;
        border-radius: $border-radius;
      }
    }

    > .selection-vue {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      rect {
        stroke: none;
        fill:  #82AAFF;
      }
    }

    > .cursor-vue {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      z-index: 2;

      .caret {
        position: absolute;
        background-color: #FF5572;
        border: 1px solid #FF5572;
        border-radius: 1px;
      }
    }

    > .text-vue {
      position: relative;
      width: 100%;
      min-height: 5rem;
      z-index: 1;
      cursor: text;

      .word-vue {
        &.keyword {
          color: purple;
        }

        &.number {
          color: red;
        }

        &.string {
          color: green;
        }

        &.comment {
          color: grey;
        }
      }

      .paragraph-vue,
      .unordered-vue,
      .ordered-vue {
        @include margin-block();
        @include margin-inline();
        @include padding-block();
        @include padding-inline();

        min-height: 1.375rem;
      }

      .unordered-list-vue,
      .ordered-list-vue {
        @include margin-block();
        @include margin-inline();
        @include padding-block(12px);
        @include padding-inline(48px, 0);

        .unordered-list-vue,
        .ordered-list-vue {
          @include padding-block();
        }
      }

      .blockquote-vue {
        @include margin-block(24px);
        @include margin-inline();
        @include padding-block(24px);
        @include padding-inline(48px);
        
        border-left: 8px solid #7986E7;
        border-radius: $border-radius;
      }

      /**
       * The `font-variant-ligatures` and `font-feature-settings`
       * are used to stop text from combining into a single element
       * that throws off the character calculations.
       */
      .inline-vue {
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0;
      }
    }
  }
}

</style>

