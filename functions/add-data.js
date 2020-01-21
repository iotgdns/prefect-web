exports.handler = (req, res, db) => {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    db.collection("prefects").doc(req.body.index).set(req.body)
    req.body.due = 0;
    req.body.duty = [4,5]
    res.send({'state':'success'})
};