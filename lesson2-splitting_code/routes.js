const fs= require('fs');

const RequestHandler =(req, res) =>{
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

            console.log(parsedBody);
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
}

module.exports = RequestHandler;