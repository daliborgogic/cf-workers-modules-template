import { txt } from './txt.mjs'

export default {
  async fetch() {
    try {
      return await new Response(txt)
    } catch (error) {
      return new Response(error.message)
    }
  }
}
