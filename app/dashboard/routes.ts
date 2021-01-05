/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { CompositeDrawerVue } from '$/composition'

import DashboardSearchBarVue from '#/app/dashboard/components/DashboardSearchBarVue.vue'
import DashboardMainVue from '#/app/dashboard/components/DashboardMainVue.vue'

const routes = [
	{
		name: 'DashboardRoute',	
		path: '/',
		components: {
			'search-bar': DashboardSearchBarVue,
			'drawer': CompositeDrawerVue,
			'main': DashboardMainVue,
		},
		props: true,
	}
]

export default routes