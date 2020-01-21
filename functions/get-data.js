exports.handler = function(req, res, db) {
  if (req.body.index && req.body.key == 1234) {
    const prefect = db.collection("prefects").doc(req.body.index);
    prefect
      .get()
      .then(doc => {
        if (!doc.exists) {
          res.send({ data: "e" });
        } else {
          console.log("Document data:", doc.data());
          res.send({ data: doc.data() });
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
        res.send({ data: err });
      });
  }
};
