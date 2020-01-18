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
    let data = {}
    console.log(req.body.index)
    if (req.body.index) {
        const prefect = db.collection('prefects').doc(req.body.index);
        prefect.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
            res.send({p:1234,"data":doc.data()});
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
          res.send({p:1234,"data":err});
        });
      
    }
    
});

