const http = require('http');
const fs= require('fs');



const server = http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
   

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write(
            `<body>
                <form action ="/message" method="POST">
                    <input type="text" name="mymessage">
                    <button type="submit">Submit</button>
                </form>
            </body>`
        );
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body =[];

        //Data receive krna
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });

       return req.on('end',()=>{
             // Buffer data ko string me convert
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);  // e.g. mymessage=hello
            const message = parsedBody.split('=')[1]; // "hello"

             // File me write krna
            fs.writeFileSync('myMsg.txt', message);

                    
                res.statusCode = 302;
                res.setHeader('Location', '/');
            return res.end();
        });

       

    }

   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World!');
    res.end(); 
});

server.listen(3000);


/**
// Node.js me server kaise banta hai – Explanation
// 
// -Node.js me server banane ke liye hume built-in http module ki jarurat hoti hai.
//
// gar tum http module ko console.log()` karo, to tumhe ek object milega jisme bahut saare 
// properties aur methods hote hain. Yeh object Node.js ka internal HTTP module hota hai, 
// jisme server banane ke liye required functions hote hain.
// 
// Is object ke andar functions jaise:
    createServer
    request
    get
    Server
    ServerResponse
    IncomingMessage
    METHODS
    STATUS_CODES
    Agent
    globalAgent


*/