/**
 * Constans of kinect
 * @module sg-kinect-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get depthSpace () { return d(require('./depth_space')) },
  get handState () { return d(require('./hand_state')) },
  get jointTypes () { return d(require('./joint_types')) }
}
