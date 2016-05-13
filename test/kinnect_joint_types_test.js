/**
 * Test case for kinnectJointTypes.
 * Runs with mocha.
 */
'use strict'

const kinnectJointTypes = require('../lib/kinnect_joint_types.js')
const assert = require('assert')
const co = require('co')

describe('kinnect-joint-types', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect joint types', () => co(function * () {
    for (let name of Object.keys(kinnectJointTypes)) {
      assert.ok(typeof kinnectJointTypes[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
