const express = require('express')
, config = require(__dirname + '/config')
, appDir = config.appDir
, router = express.Router();

const calculus = require(appDir + 'app/controllers/codebase');


router.get('/calculus/lastbuild/status', calculus.lastbuild);


module.exports = router;