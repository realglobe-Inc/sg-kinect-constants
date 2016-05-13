/**
 * Test case for kinnectHandState.
 * Runs with mocha.
 */
'use strict'

const handState = require('../lib/hand_state.js')
const assert = require('assert')
const co = require('co')

describe('hand-state', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect hand state', () => co(function * () {
    for (let name of Object.keys(handState)) {
      assert.ok(typeof handState[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
