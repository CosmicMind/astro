/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroCompositeDrawerVue from '#/app/shared/components/AstroCompositeDrawerVue.vue'

import CompositeSearchBarVue from '#/app/projects/components/CompositeSearchBarVue.vue'
import CompositeMainVue from '#/app/projects/components/CompositeMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'Projects',	
		path: '/projects/:projectId',
		components: {
			'search-bar': CompositeSearchBarVue,
			'drawer': AstroCompositeDrawerVue,
			'main': CompositeMainVue,
		},
		props: true,
	}
]

export default routes