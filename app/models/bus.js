'use strict'

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
  'duration': '2 Hours',
  'bookings' : [
    {
      date : 21-Dec-1993,
      seat : 10
    }
  ]
}
*/

import { defer } from 'q';
import { isNil } from 'lodash';
const config = require(__dirname + '/../../config');
const appDir = config.appDir;
const collectionName = 'bus';


export function add(busObj, options) {
    let q = defer()
    , db = options.db;
  
    if(isNil(db)) {
      console.error("Db object is undefined or null");
      q.reject("SOMETHING_WENT_WRONG");
      return q.promise;
    }
    db.collection(collectionName).insertOne(busObj, (err, doc) => {
      if(err) {
        q.reject(err);
        return q.promise;
      }
      console.log("Creating Bus object into Db");
      q.resolve(doc.ops[0]);
      return q.promise;
      });
    return q.promise;
  
}

export function get(...args) {
    let q = defer()
    , options = {}
    , queryOption = {}
    , selectionCriteria = {};
  
    if(args.length==1) {
        options = args[0];
    }
    else if(args.length == 2) {
      selectionCriteria = args[0];
      options = args[1];
    }
    else if(args.length == 3) {
      selectionCriteria = args[0];
      queryOption = args[1];
      options = args[2];
    }
    else {
      q.reject("SOMETHING_WENT_WRONG");
    }
  
    let db = options.db;
  
    if(isNil(db)) {
      console.error("DB object is undefined or null");
      q.reject("SOMETHING_WENT_WRONG");
      return q.promise;
    }
    if(isNil(selectionCriteria))
      selectionCriteria = {};
  
    db.collection(collectionName).find(selectionCriteria, queryOption).toArray((err,docs) => {
      if(err) {
        console.error(err);
        q.reject(err);
        return q.promise;
      }
      console.log("Retrieving Bus information");
      q.resolve(docs);
  
    });
    return q.promise;
}
