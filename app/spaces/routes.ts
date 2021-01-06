/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import { CompositeDrawerVue } from '$/composition'

import SpacesSearchBarVue from '#/app/spaces/components/SpacesSearchBarVue.vue'
import SpacesMainVue from '#/app/spaces/components/SpacesMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'SpacesRoute',	
		path: '/spaces/:spaceId',
		components: {
			'search-bar': SpacesSearchBarVue,
			'drawer': CompositeDrawerVue,
			'main': SpacesMainVue,
		},
		props: true,
	}
]

export default routes