const express = require('express')
, config = require(__dirname + '/config')
, appDir = config.appDir
, router = express.Router();

const calculus = require(appDir + 'app/controllers/codebase');
const release = require(appDir + 'app/controllers/release-service');


router.get('/calculus/lastbuild/status', calculus.lastbuild);
router.get('/release', release.getAllReleases);
router.get('/release/last', release.getLastRelease);


module.exports = router;