import server from "~/server.js";

const port = process.env.PORT||5000;

function startServer(){
  server.listen(port,function(){
    console.log(`Server running on port ${port}`)
  })
}

startServer()