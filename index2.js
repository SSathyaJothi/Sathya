var http=require('http'),host="127.0.0.1",port="8080";
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hey there");

});
server.listen(port,host,function()
{
console.log("server is listening to",port);
});