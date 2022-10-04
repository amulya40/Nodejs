var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";

MongoClient.connect(url, function(err, database){
    if(err) throw err;
    var dbo = database.db("Ecart");
    dbo.collection("products").drop(function(err, res) {
        if (err) throw err;
        else if (res) console.log("Collection dropped"); 
})
});