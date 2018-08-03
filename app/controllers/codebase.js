'use strict'

const Q = require('q')
  , _ = require('lodash')
  , config = require(__dirname + '/../../config')
  , appDir = config.appDir
  , db = require(appDir + 'config/db')
  , collection_name = 'requests';

let showlastrequest = (req, res, next)=> {
    if(_.isNull(req.headers)) {
        res.status(500).send(
            {
                status: "fail",
                message : "send codebase version"
            }
        );
    }
    let flame6 =  [
        {
          title: 'IDC 1RIP',
    
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 1RIP',
          active : true,
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 2RIP',
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
      ];

      let flame7 =  [
        {
          title: 'IDC 1RIP',
    
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 1RIP',
          active : true,
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 2RIP',
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
      ];

      let flame8 =  [
        {
          title: 'IDC 1RIP',
    
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 1RIP',
          active : true,
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'fail', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'pass', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'fail', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
        {
          title: 'FM 2RIP',
          products: [
            { product: 'FieryDemo', type: 'debug', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'FieryDemo', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
            { product: 'Phantom', type: 'debug', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'Phantom', type: 'release', build: 'fail', install: 'fail', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'debug', build: 'fail', install: 'pass', test: 'fail' },
            { product: 'FieryDemoHSIJ', type: 'release', build: 'pass', install: 'pass', test: 'fail' },
          ],
        },
      ];
      let hardcodedoutput;
      if(req.headers.codebase == 'flame60')
      hardcodedoutput = flame6;
      else if(req.headers.codebase == 'flame70')
      hardcodedoutput = flame7;
      else if (req.headers.codebase == 'flame80')
      hardcodedoutput = flame8;
      else {
          hardcodedoutput = {
              message: "WRONG CODEBASE"
            };
            res.status(500).json(hardcodedoutput);
            next();

      }

      res.json(hardcodedoutput);    
}

module.exports = {
    lastbuild : showlastrequest
}