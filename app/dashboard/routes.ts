/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroCompositeDrawerVue from '#/app/shared/components/AstroCompositeDrawerVue.vue'

import CompositeSearchBarVue from '#/app/dashboard/components/CompositeSearchBarVue.vue'
import CompositeMainVue from '#/app/dashboard/components/CompositeMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'Dashboard',	
		path: '/',
		components: {
			'search-bar': CompositeSearchBarVue,
			'drawer': AstroCompositeDrawerVue,
			'main': CompositeMainVue,
		},
		props: true,
	}
]

export default routes