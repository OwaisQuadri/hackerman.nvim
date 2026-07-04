// hackerman preview: open this file with the theme active.
// Comments are bright grey and italic, easy on the eyes, still readable.
// TODO: todo tags get the full neon-block treatment

import { createServer } from 'node:http' // import/preproc: purple

// types and interfaces: aqua
interface Payload {
  id: number // numbers: lime
  name: string // strings: mint
  active: boolean // booleans: purple
}

type Handler = (req: Payload) => Promise<string | null>

// decorators: purple (the magic stuff)
@sealed
class Mainframe {
  // keywords: neon bold; functions: spring green
  private readonly port: number = 0x1f90 // hex numbers: lime

  constructor(private handlers: Handler[]) {}

  async breach(target: string, retries = 3.14): Promise<Payload> {
    // `this` is a builtin: purple italic
    const banner = `breaching ${target} on port ${this.port}\n` // escapes: teal

    for (const handler of this.handlers) {
      if (retries > 0 && this.port !== null) {
        return { id: 42, name: banner, active: true }
      }
    }
    throw new Error('access denied') // Error type: aqua, string: mint
  }
}

// regex and special chars: teal
const HEX_RE = /0x[0-9a-f]+/gi
export const mainframe = new Mainframe([async (req) => (req.active ? req.name : null)])
