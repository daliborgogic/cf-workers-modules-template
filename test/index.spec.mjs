import test from 'ava'
import { Miniflare } from 'miniflare'

test.beforeEach(t => {
  const mf = new Miniflare({
    modules: true,
    buildCommand: undefined
  })
  t.context = { mf }
})

test('should return \'Wohoo!\'', async t => {
  const { mf } = t.context
  const res = await mf.dispatchFetch('http://localhost:8787')
  const txt = await res.text()
  t.is(txt, 'Wohoo!')
})