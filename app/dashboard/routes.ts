/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { RouteRecordRaw } from 'vue-router'

import AstroDrawerVue from '#/app/shared/components/AstroDrawerVue.vue'

import DashboardSearchBarVue from '#/app/dashboard/components/DashboardSearchBarVue.vue'
import DashboardMainVue from '#/app/dashboard/components/DashboardMainVue.vue'

const routes: Array<RouteRecordRaw> = [
	{
		name: 'DashboardRoute',	
		path: '/',
		components: {
			'search-bar': DashboardSearchBarVue,
			'drawer': AstroDrawerVue,
			'main': DashboardMainVue,
		},
		props: true,
	}
]

export default routes