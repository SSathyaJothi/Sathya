var express = require('express');
var router = express.Router();
var mongoClient=require("mongodb").MongoClient;
var db;
mongoClient.connect("mongodb://127.0.0.1:27017",function(err,connection){
db=connection.db("projector");
})
/* GET users listing. */
router.get('/all', function(req, res, next) {
 var movieCollection=db.collection("movies")
 movieCollection.find().toArray(function(err,data){
   res.json(data);
 })
});
router.get('/:movieName', function(req, res, next) {
  var mn=req.params.movieName;
  var movieCollection=db.collection("movies");
  movieCollection.find({"name":mn}).toArray(function(err,data){
    res.json(data);
  })
  
});
router.post('/addMovie',function(req,res,next)
{ 
  console.log(req.body);
  var movie = req.body;
  var movieCollection=db.collection("movies");
  movieCollection.insert(movie,function(err,data){

  if(!err){
  res.json({
    isSuccess: true
  });}
  else{
    res.json({
    isSuccess:false
  });
}
})
});
module.exports = router;
