var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";

    MongoClient.connect(url, function(err, database){
        if(err) throw err;
        var db = database.db("Ecart");
        var query = {productid:"02"};
        db.collection("products").findOne(query, function(err, result) {
            if (err) throw err;
            console.log("Result is " +result);  ////////////////////////////no work
    })

    db.collection("products").find({}).toArray (function(err, res) {
        if (err) throw err;
        console.log(res);
    });        
    });

    