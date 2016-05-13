'use strict'

const {
  kinnectDepthSpace,
  kinnectHandState,
  kinnectJointTypes
} = require('sg-kinect-constants')

let frame = { /* ... */ }

// Get head joint from frame ata
let head = frame.joints(kinnectJointTypes.HEAD)
console.log(head)
