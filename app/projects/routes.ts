/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { CompositeDrawerVue } from '$/composition'

import ProjectsSearchBarVue from '#/app/projects/components/ProjectsSearchBarVue.vue'
import ProjectsMainVue from '#/app/projects/components/ProjectsMainVue.vue'

const routes = [
	{
		name: 'ProjectsRoute',	
		path: '/projects/:projectId',
		components: {
			'search-bar': ProjectsSearchBarVue,
			'drawer': CompositeDrawerVue,
			'main': ProjectsMainVue,
		},
		props: true,
	}
]

export default routes