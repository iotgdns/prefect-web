const add_data = require('./add-data.js');
const get_data = require('./get-data.js');

const functions = require('firebase-functions');
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp({
      credential: admin.credential.applicationDefault()
  });
}
const db = admin.firestore();
 
exports.put = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  add_data.handler(req, res, db);
});
exports.get = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  get_data.handler(req, res, db);
});

