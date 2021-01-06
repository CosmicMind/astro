/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroDrawerVue from '#/app/shared/components/AstroDrawerVue.vue'

import ProjectsSearchBarVue from '#/app/projects/components/ProjectsSearchBarVue.vue'
import ProjectsMainVue from '#/app/projects/components/ProjectsMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'ProjectsRoute',	
		path: '/projects/:projectId',
		components: {
			'search-bar': ProjectsSearchBarVue,
			'drawer': AstroDrawerVue,
			'main': ProjectsMainVue,
		},
		props: true,
	}
]

export default routes