/**
 * Constans of kinect
 * @module sg-kinect-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get kinnectDepthSpace () { return d(require('./kinnect_depth_space')) },
  get kinnectHandState () { return d(require('./kinnect_hand_state')) },
  get kinnectJointTypes () { return d(require('./kinnect_joint_types')) }
}
