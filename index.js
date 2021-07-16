const path = require('path')
const fs = require('fs')
const http = require('http')
const { RSA_NO_PADDING } = require('constants')
    http.createServer((req,res)=>{
        if(req.url === "/"){

            fs.readFile(path.join(__dirname, "index.html"), (err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end()  
            })
        }
        if(req.url === "/another-page"){
            fs.readFile(path.join(__dirname, "another-page.html"), (err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end()  
            })
        }
    }).listen(process.env.PORT || 5000, console.log("Server is launched and running"))
