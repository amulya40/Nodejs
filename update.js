var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";

MongoClient.connect(url, function(err, database){
    if(err) throw err;
    var db = database.db("Ecart");
    var oldquery = {p_name: "phone"};
    var newquery ={$set: { price: "21000",productid:"101"}}
    db.collection("products").updateOne(oldquery, newquery, function(err, res) {
        if (err) throw err;
        console.log("Updated this  " +res.modifiedCount); 
})
});