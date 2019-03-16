'use strict'

const Q = require('q')
  , _ = require('lodash')
  , config = require(__dirname + '/../../config')
  , appDir = config.appDir



/*
*********** BUS SCHEMA ************
{
  '_id' : 1,
  'number' : "KA 01 HK 1234",
  'capacity' : 40,
  'departs' : {
    'city': "BLR",
    'time': "19.45"
  },
  'arrives' : {
    'city': "MYS",
    'time': "21.45"
  },
  'booked' : 12
}

*/

let register = (req, res, next) => {

    let busobj = {
        'number' : null,
        'capacity' : null,
        'departs' : {
            'city': null,
            'time': null
          },
          'arrives' : {
            'city': null,
            'time': null
          },
          'booked' : null
    }
    

}