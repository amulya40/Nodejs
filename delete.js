var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";

MongoClient.connect(url, function(err, database){
    if(err) throw err;
    var dbo = database.db("Ecart");
    dbo.collection("products").deleteOne({p_name :"mouse"}, function(err, result) {
        if (err) throw err;
        console.log("Deleted  " +result.deletedCount); 
})
});