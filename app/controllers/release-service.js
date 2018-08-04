'use strict'

const Q = require('q')
  , _ = require('lodash')
  , config = require(__dirname + '/../../config')
  , appDir = config.appDir;

const releasemodel = require('../models/release')
, utils = require(appDir + 'app/utils');

module.exports.getAllReleases = (req, res, next) => {
    let dataobj = releasemodel.get();
    let codebase, build;
    if (_.isNil(req.headers.codebase)) {
        codebase = null;
    }
    else {
        codebase = req.headers.codebase;
    }

    if (_.isNil(req.headers.build)) {
        build = null;
    }
    else {
        build = req.headers.build;
    }
    let results = (search(dataobj, codebase, build));

    res.json(results);
}

module.exports.getLastRelease = (req, res, next) => {
    let dataobj = releasemodel.get();
    let codebase, build;
    if (_.isNil(req.headers.codebase)) {
        codebase = null;
        res.status(500).json({message : "Select CODEBASE"});
        next();
    }
    else {
        codebase = req.headers.codebase;
    }

    let results = (search(dataobj, codebase, build));

    res.json(results[0]);
}


let search = (obj, codebase, build)=> {
    let searchobj = {}
    if(codebase) {
        searchobj['codebase'] = codebase;
    }
    if(build) {
        searchobj['release'] = build;
    }
    var results = utils.findByMatchingProperties(obj, searchobj);
    return results;
}