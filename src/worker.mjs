export default {
  async fetch(request, env) {
    try {
      return await new Response('Wohoo!')
    } catch (e) {
      return new Response(e.message)
    }
  }
}
