const http = require("http");
const httpserver = http.createServer(function(req,res){
    res.end("HTTP Server is Running");
});
httpserver.listen(4000,()=>{
    console.log("Listening on port 4000...");
})