'use strict'

const {
  depthSpace,
  handState,
  jointTypes
} = require('sg-kinect-constants')

let frame = { /* ... */ }

// Get head joint from frame ata
let head = frame.joints(jointTypes.HEAD)
console.log(head)
