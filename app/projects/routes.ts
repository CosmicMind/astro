/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroDrawerVue from '#/app/shared/components/AstroDrawerVue.vue'

import SearchBarVue from '#/app/projects/components/SearchBarVue.vue'
import MainVue from '#/app/projects/components/MainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'Projects',	
		path: '/projects/:projectId',
		components: {
			'search-bar': SearchBarVue,
			'drawer': AstroDrawerVue,
			'main': MainVue,
		},
		props: true,
	}
]

export default routes