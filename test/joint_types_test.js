/**
 * Test case for kinnectJointTypes.
 * Runs with mocha.
 */
'use strict'

const jointTypes = require('../lib/joint_types.js')
const assert = require('assert')
const co = require('co')

describe('joint-types', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Kinnect joint types', () => co(function * () {
    for (let name of Object.keys(jointTypes)) {
      assert.ok(typeof jointTypes[ name ] !== 'undefined')
    }
  }))
})

/* global describe, before, after, it */
