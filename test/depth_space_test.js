/**
 * Test case for kinnectDepthSpace.
 * Runs with mocha.
 */
'use strict'

const depthSpace = require('../lib/depth_space.js')
const assert = require('assert')
const co = require('co')

describe('depth-space', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect depth space', () => co(function * () {
    for (let name of Object.keys(depthSpace)) {
      assert.ok(typeof depthSpace[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
