/**
 * Test case for kinnectDepthSpace.
 * Runs with mocha.
 */
'use strict'

const kinnectDepthSpace = require('../lib/kinnect_depth_space.js')
const assert = require('assert')
const co = require('co')

describe('kinnect-depth-space', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect depth space', () => co(function * () {
    for (let name of Object.keys(kinnectDepthSpace)) {
      assert.ok(typeof kinnectDepthSpace[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
