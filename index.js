var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";

/////////////////////// connection creation DATABASE IN MONGODB/////////////////////////////////
// MongoClient.connect(url, function(err, database){
//     if(err) throw err;
//     console.log("Database created")
// });

/////////////////////////CREATING TABLE in database////////////////////////////////////
MongoClient.connect(url, function(err, database){
    if(err) throw err;

    var db=database.db("Ecart");
    db.createCollection("products", function(err, result){
        if(err) throw err;
        console.log("Collection created");
    });
});



