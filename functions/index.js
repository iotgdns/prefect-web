const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
     }
    
    const db = admin.firestore();
    if (req.body.index && req.body.key == 1234) {
        const prefect = db.collection('prefects').doc(req.body.index);
        prefect.get()
        .then(doc => {
          if (!doc.exists) {
            res.send({"data":"e"});
          } else {
            console.log('Document data:', doc.data());
            res.send({"data":doc.data()});
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
          res.send({"data":err});
        });
      
    }
    
});

