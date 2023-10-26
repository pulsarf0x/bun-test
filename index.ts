type Techno = {
  id: number,
  name: string,
  type: 'Front' | 'Back' | 'Full-stack'
}

const technos: Techno[] = [
  {
    id: 1,
    name: 'Node',
    type: 'Back'
  },
  {
    id: 2,
    name: 'Bun',
    type: 'Back'
  },
  {
    id: 3,
    name: 'Qwik',
    type: 'Full-stack'
  }
]

Bun.serve({
  hostname: "localhost",
  port: 3000,
  fetch(req: Request): Response | Promise<Response> {

    const url = new URL(req.url)

    if (url.pathname === '/ping') {
      return new Response('pong')
    }

    if (url.pathname === '/technos') {
      return new Response(JSON.stringify(technos));
    }

    return new Response('Not found')
  }
})