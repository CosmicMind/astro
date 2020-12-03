/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import http from 'http'

export function createServer(ports: Array<string>, app: any): Array<any> {
  const servers = []
  for (const p of ports) {
    const server = http.createServer(app.callback())
    server.listen(p)
    servers.push(server)
  }
  return servers
}
