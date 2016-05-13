/**
 * Test case for kinnectHandState.
 * Runs with mocha.
 */
'use strict'

const kinnectHandState = require('../lib/kinnect_hand_state.js')
const assert = require('assert')
const co = require('co')

describe('kinnect-hand-state', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect hand state', () => co(function * () {
    for (let name of Object.keys(kinnectHandState)) {
      assert.ok(typeof kinnectHandState[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
