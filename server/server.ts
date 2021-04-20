/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import dotenv from 'dotenv'
dotenv.config()

import cluster from 'cluster'
import { cpus as getCPUs } from 'os'

import { createServer } from '#/server/createServer'
import { createRoutes } from '#/server/createRoutes'
import { createApp } from '#/server/createApp'

/**
 * Tells the ports matching to begin at the defined ports range.
 */
const NODE_PORTS_RANGE_START = process.env.NODE_PORTS_RANGE_START
if ('undefined' === typeof NODE_PORTS_RANGE_START) throw new Error('NODE_PORTS_RANGE_START missing from .env')

const env = {
  timezone: process.env.NODE_TZ || 'America/Toronto',
  env: process.env.NODE_ENV || 'development',
  name: process.env.NODE_NAME || 'API',
  ports: getCPUs().map((_, i) => NODE_PORTS_RANGE_START + i),
  proxy: process.env.NODE_PROXY || true,
  assets: process.env.NODE_ASSETS,
  public: process.env.NODE_PUBLIC,
  views: process.env.NODE_VIEWS,
}

if (cluster.isWorker) {
  const app = createApp(env)
  createRoutes(app)
  createServer(env.ports, app)
}
else {
  // Fork workers.
  const cpus = getCPUs()
  for (const _ in cpus) cluster.fork(env)
  
  // used if the worker doesn't connect in the specified timeout time
  const timeouts: Array<ReturnType<typeof setTimeout>> = []

  const timeoutTime = 2000

  const errorMsg = () => {
    console.error('Error something must have gone wrong.')
  }

  // when cluster forks a new worker
  cluster.on('fork', worker => {
    console.log(`forked worker ${worker.process.pid}`)
    timeouts[worker.id] = setTimeout(errorMsg, timeoutTime)
  })

  // called when the worker is online and read to take connections
  cluster.on('online', worker => {
    console.log(`online worker ${worker.process.pid}`)
  })

  // now the worker is listening, passed address information along with the worker details
  cluster.on('listening', (worker, address) => {
    console.log(`forked worker ${worker.process.pid} address port ${address.port}`)
    clearTimeout(timeouts[worker.id])
  })

  // now the worker is listening, passed address information along with the worker details
  cluster.on('disconnect', worker => {
    console.log(`disconnected worker ${worker.process.pid}`)
    clearTimeout(timeouts[worker.id])
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    clearTimeout(timeouts[worker.id])

    console.log(`worker %d died (%s). restarting... ${worker.process.pid} ${signal || code}`)
    cluster.fork(env)
  })
}