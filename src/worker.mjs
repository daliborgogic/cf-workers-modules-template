import { txt } from './txt.mjs'

export default {
  async fetch(request, env) {
    try {
      return await new Response(txt)
    } catch (e) {
      return new Response(e.message)
    }
  }
}
