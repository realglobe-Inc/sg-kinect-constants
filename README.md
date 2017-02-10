sg-kinect-constants
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-kinect-constants
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-kinect-constants
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-kinect-constants.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-kinect-constants
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-kinect-constants.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-kinect-constants/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-kinect-constants
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-kinect-constants.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-kinect-constants.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-kinect-constants
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-kinect-constants.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-kinect-constants
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-kinect-constants.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Constans of kinect

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-kinect-constants --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Values.md.hbs" Start -->

<a name="section-doc-guides-03-values-md"></a>

Values
------

##### depthSpace

| Key | Value |
| --- | ---- |
| BOUND_WIDTH | 512 |
| BOUND_HEIGHT | 424 |


##### handState

| Key | Value |
| --- | ---- |
| UNKNOWN | 0 |
| NOT_TRACKED | 1 |
| OPEN | 2 |
| CLOSED | 3 |
| LASSO | 4 |


##### jointTypes

| Key | Value |
| --- | ---- |
| SPINE_BASE | 0 |
| SPINE_MID | 1 |
| NECK | 2 |
| HEAD | 3 |
| SHOULDER_LEFT | 4 |
| ELBOW_LEFT | 5 |
| WRIST_LEFT | 6 |
| HAND_LEFT | 7 |
| SHOULDER_RIGHT | 8 |
| ELBOW_RIGHT | 9 |
| WRIST_RIGHT | 10 |
| HAND_RIGHT | 11 |
| HIP_LEFT | 12 |
| KNEE_LEFT | 13 |
| ANKLE_LEFT | 14 |
| FOOT_LEFT | 15 |
| HIP_RIGHT | 16 |
| KNEE_RIGHT | 17 |
| ANKLE_RIGHT | 18 |
| FOOT_RIGHT | 19 |
| SPINE_SHOULDER | 20 |
| HAND_TIP_LEFT | 21 |
| THUMB_LEFT | 22 |
| HAND_TIP_RIGHT | 23 |
| THUMB_RIGHT | 24 |




<!-- Section from "doc/guides/03.Values.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sg-kinect-constants/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------



<!-- Links End -->
