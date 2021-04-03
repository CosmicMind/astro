/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import { 
	createRouter,
  createWebHistory,
} from 'vue-router'

import dashboardRoutes from '#/app/dashboard/routes'
import spacesRoutes from '#/app/spaces/routes'
import projectsRoutes from '#/app/projects/routes'

const routes = dashboardRoutes.concat(spacesRoutes)
															.concat(projectsRoutes)

const history = createWebHistory()

const router = createRouter({
	routes,
	history,
})

export default router