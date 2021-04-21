/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroCompositeDrawerVue from '#/app/shared/components/AstroCompositeDrawerVue.vue'

import CompositeSearchBarVue from '#/app/spaces/components/CompositeSearchBarVue.vue'
import CompositeMainVue from '#/app/spaces/components/CompositeMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'Spaces',	
		path: '/spaces/:spaceId',
		components: {
			'search-bar': CompositeSearchBarVue,
			'drawer': AstroCompositeDrawerVue,
			'main': CompositeMainVue,
		},
		props: true,
	}
]

export default routes