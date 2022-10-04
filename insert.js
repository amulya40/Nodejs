var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/Ecart";


// MongoClient.connect(url, function(err, database){
//     if(err) throw err;
//     var db = database.db("Ecart");
//     db.collection("products").insertOne({productid:1, p_name:"laptop", price:"80000"}, function(err, result){
//         if (err) throw err;
//         console.log("these record are added :" +result.insertedId);
//     })
// })

MongoClient.connect(url, function(err, database){
    if(err) throw err;
    var db = database.db("Ecart");
    var product_array =[
        {productid:2, p_name:"phone", price:"80000"},
        {productid:3, p_name:"keyboard", price:"500"},
        {productid:4, p_name:"mouse", price:"2000"}
    ];
    db.collection("products").insertMany(product_array, function(err, result){
        if(err) throw err;
        console.log("these record are added "+result.insertedCount);
    })
    });

