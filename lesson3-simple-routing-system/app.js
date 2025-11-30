const http= require('http');

const server= http.createServer((req, res) =>{

    //--- HOME ROUTE ---
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Home Page</h1>");
        return res.end();
    }

    //--- REDIRECT ROUTE ---
    if(req.url === "/old-page" && req.method === 'GET'){
        res.statusCode = 301; // Permanent Redirect
        res.setHeader('Location', '/new-page');
        return res.end();
    }

    //--- NEW PAGE ROUTE ---
    if(req.url === "/new-page" && req.method === 'GET' ){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>This is the New Page</h1>");
        return res.end();
    }

    // --- 404 PAGE ---
    res.writeHead(404, {"Content-Type":"text/html"});
    res.write("<h1>404 - Page Not Found</h1>");
    res.end();

});


server.listen(3000);