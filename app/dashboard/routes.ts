/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import { CompositeDrawerVue } from '$/composition'

import DashboardSearchBarVue from '#/app/dashboard/components/DashboardSearchBarVue.vue'
import DashboardMainVue from '#/app/dashboard/components/DashboardMainVue.vue'

const routes: Array<RouteRecordRaw> = [
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