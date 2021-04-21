<!-- Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<template>
  <composite-drawer-vue v-bind:toggle-state='toggleState'>
    <aside class='astro-composite-drawer-vue'>
      <nav class='navbar'>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <button class='icon-button' v-on:click='onToggle'>
              <span class='icon' v-if='isOpened'>
                <i class='fas fa-arrow-left'></i>
              </span>
              <span class='icom' v-if='!isOpened'>
                <i class='fas fa-bars'></i>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div class='content' v-if='isOpened'>
        <list-vue>
          <list-items-vue>
            <list-item-vue class='border-radius' v-for='(x, i) in items', v-bind:key='i'>
              <div class='row'>
                <div class='row-start'>
                  <div class='column'>
                    <icon-vue v-bind:style='x.icon'></icon-vue>
                  </div>
                </div>

                <div class='row-center'>
                  <div class='column'>
                    <label-vue class='no-select'>{{ x.label }}</label-vue>
                  </div>
                </div>
              </div>
            </list-item-vue>
          </list-items-vue>
        </list-vue>
              
        <div class='toolbar' v-if='isOpened'>
          <div class='toolbar-center'>
            <div class='toolbar-item'>
              <h3> 
                <label-vue class='is-nowrap no-select'>Projects</label-vue>
              </h3>
            </div>
          </div>
          
          <div class='toolbar-end'>
            <div class='toolbar-item'>
              <button class='icon-button' v-on:click='onToggle'>
                <span class='icon'>
                  <i class='fas fa-plus'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
                  
        <list-vue>
          <list-items-vue>
            <list-item-vue class='border-radius' v-for='(x, i) in projects', v-bind:key='i'>
              <div class='row'>
                <div class='row-center'>
                  <div class='column'>
                    <router-link-vue class='is-ellipsis no-select' v-bind:to='`/projects/${i + 1}`' v-bind:title='x.label'>{{ x.label }}</router-link-vue>
                  </div>
                </div>

                <div class='row-end'> 
                  <div class='column'>
                    <dropdown-vue>
                      <template v-slot:trigger>
                        <icon-vue class='no-select' v-bind:style='"fas fa-ellipsis-h"'></icon-vue>

                      <template v-slot:content>
                        <list-vue>
                          <list-items-vue>
                            <list-item-vue v-bind:key='"0"'>
                              <div class='row'>
                                <div class='row-center'>
                                  <div class='column'>
                                    <label-vue class='is-nowrap has-gutter no-select'>Share</label-vue>
                                  </div>
                                </div>
                              
                                <div class='row-end'>
                                  <div class='column'>
                                    <icon-vue v-bind:style='"fas fa-share"'></icon-vue>
                                  </div>
                                </div>
                              </div>
                            </list-item-vue>
                          </list-items-vue>
                        </list-vue>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </list-item-vue>
          </list-items-vue>
        </list-vue>
      </div>

      <div class='toolbar'>
        <div class='toolbar-start'>
          <div class='toolbar-item'>
            <figure-vue class='is-32x32' v-bind:src='"/cosmicmind-logo-light.svg"' v-bind:alt='"CosmicMind Logo"'></figure-vue>
          </div>
          <div class='toolbar-item' v-if='isOpened'>
            <p class='copy is-nowrap'>&copy; 2020 CosmicMind, Inc.</p>
          </div>
        </div>
      </div>
    </aside>
  </composite-drawer-vue>

</template>

<script lang='ts'>
import { 
  ref,
  defineComponent, 
} from 'vue'

import {
  CompositeDrawerVue,
  DividerVue,
  ListVue,
  ListItemsVue,
  ListItemVue,
  RouterLinkVue,
  LinkVue,
  IconVue,
  LabelVue,
  FigureVue,
  DropdownVue,
} from '$/composition'

export default defineComponent({
  name: 'AstroCompositeDrawerVue',

  components: {
    CompositeDrawerVue,
    DividerVue,
    ListVue,
    ListItemsVue,
    ListItemVue,
    RouterLinkVue,
    LinkVue,
    IconVue,
    LabelVue,
    FigureVue,
    DropdownVue,
  },

  props: {
    toggleState: {
      required: true, 
      type: Function,
    },
  },

  setup({ toggleState }) {
    const isOpened = ref(false)

    const onToggle = () => {
      isOpened.value = !isOpened.value
      toggleState('composite-drawer-vue-opened')
    }

    const items = [
      {
        link: '#',
        label: 'People',
        handler: () => console.log('People'),
        icon: 'fas fa-users',
      },
      {
        link: '#',
        label: 'Photos',
        handler: () => console.log('Photos'),
        icon: 'fas fa-images',
      },
      {
        link: '#',
        label: 'Videos',
        handler: () => console.log('Videos'),
        icon: 'fas fa-video',
      },
    ]

    const projects = [
      {
        link: '#',
        label: 'Project 1',
        handler: () => console.log('Project 1'),
        dropdown: {
          trigger: {
            icon: 'fas fa-ellipsis-h'
          },
        },
      },
      {
        link: '#',
        label: 'This is a really long project title and this',
        handler: () => console.log('Project 2'),
        dropdown: {
          trigger: {
            icon: 'fas fa-ellipsis-h'
          },
        },
      },
      {
        link: '#',
        label: 'Project 3',
        handler: () => console.log('Project 3'),
        dropdown: {
          trigger: {
            icon: 'fas fa-ellipsis-h'
          },
        },
      },
    ]

    return {
      isOpened,
      onToggle,
      items,
      projects,
    }
  },
})

</script>

<style lang='scss'>
@import 'tools/_dev';

.astro-composite-drawer-vue {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;

  border-right: 1px solid;

  @include theme() {
    background-color: theme-style(primary-background);
    border-right-color: theme-style(primary-border);
  }

  > .navbar {
    @include padding-inline($gutter);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: $navbar-height;
  }

  > .content {
    position: absolute;
    top: $navbar-height;
    left: 0;
    bottom: $toolbar-height;
    width: $composite-drawer-vue-width;
    overflow: auto;

    > .toolbar {
      @include margin-block(to-px($gutter-value * 2), 0);
      @include padding-inline($gutter);

      width: 100%;
      height: $toolbar-height;

      > .toolbar-center {
        @include padding-inline($gutter);

        cursor: default;
      }
    }

    > .list-vue {
      @include padding-inline($gutter);

      > .list-items-vue {
        > .list-item-vue {
          cursor: pointer;

          > .row {
            > .row-start {
              > .column {
                > .icon-vue {
                  min-width: 3.25rem;
                }
              }
            }

            > .row-center {
              @include padding-inline($gutter);

              grid-template-rows: repeat(auto-fill, minmax(2.25rem, min-content));
            }

            > .row-end {
              > .column {
                > .dropdown-vue {
                  > .trigger {
                    > .icon-vue {
                      min-width: 2.25rem;
                      min-height: 2.25rem;
                    }

                    visibility: hidden;
                  }
                }
              }
            }
          }

          &:hover {
            > .row {
              > .row-end {
                > .column {
                  > .dropdown-vue {
                    > .trigger {
                      visibility: visible;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  > .toolbar {
    @include padding-inline($gutter);
    
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: $toolbar-height;

    > .toolbar-start {
      > .toolbar-item {
        > .copy {
          @include padding-inline($gutter);

          font-size: .675rem;
        }
      }
    }
  }
}

</style>