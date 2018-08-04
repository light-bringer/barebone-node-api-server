var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("codebase");
  var myobj = {
    codebase : 'flame80',
    release : '010',
    date : new Date('25-july-2018'),
    product : 'fierydemo_release',
    narnia_url : 'https://',
    server_spec : {
        name : 'server.fierydemo_flame8.0_211123131',
        spec_details : 'fpss : 3.0, os : 17.09'
    },
    client_spec : {
        name : 'client.fierydemo_flame8.0_211123131',
        spec_details : 'cws6.2 : 328321093, fierydriver : 6.2'
    },
    usb_installer : null,
    status : 'release_to_test',
    region : 'fm'
};
  dbo.collection("release-info").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});