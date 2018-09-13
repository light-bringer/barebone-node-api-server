'use strict'

/*
*********** USER DETAILS SCHEMA ************
{
  '_id' : 1,
  'name' : {
    'first' : 'Den',
    'middle' : 'Kumar',
    'last' : 'Das'
  },
  'age' : 40,
  'mobile': '1234567890',
  'email' : 'yodebu@gmail.com'
  'password' : 'HASHVALUE_sdjahdkqheobeyehbjdkbdjHBDJKHDBS'
  'bookings' : [
    {
      'date' : 21-12-1994,
      'id' : bus._id,
      'seat' : 12
    }
  ]
}

*/

import { defer } from 'q';
import { isNil } from 'lodash';
const config = require(__dirname + '/../../config');
const appDir = config.appDir;
const collectionName = 'users';


export function add(userObj, options) {
  let q = defer()
  , db = options.db;

  if(isNil(db)) {
    console.error("Db object is undefined or null");
    q.reject("SOMETHING_WENT_WRONG");
    return q.promise;
  }
  db.collection(collectionName).insertOne(userObj, (err, doc) => {
    if(err) {
      q.reject(err);
      return q.promise;
    }
    console.log("Creating User object into Db");
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
    console.log("Retrieving User information");
    q.resolve(docs);

  });
  return q.promise;
}
