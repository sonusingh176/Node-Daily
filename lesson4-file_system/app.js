const http =require("http");
const fs = require("fs/promises");
const path = require("path");


const filePath =path.join(__dirname, "users.json");

// Create file if not exists
async function initFile(){
    try {
        await fs.access(filePath);
    } catch (error) {
        await fs.writeFile(filePath,JSON.stringify([]));
    }
}
initFile();


const server = http.createServer(async (req, res) => {
    
    if(req.url === '/' && req.method === "GET"){

        res.setHeader('Content-Type', 'text/html');

        res.write(`<h2>Add User</h2>
            <form action="/add-user" method="POST">
                <input type="text" name="name" placeholder="Enter name" required />
                <button type="submit">Submit</button>
            </form>`);
        
        return res.end();
    }


    if(req.url ==='/add-user' && req.method ==="POST"){

        let body ="";

        req.on('data', chunk =>{
            console.log(chunk);
            body += chunk.toString();
        });

        // console.log(body);

        req.on("end",async()=>{
           // const fullBuffer = Buffer.concat(body);
           // console.log(fullBuffer)
           console.log(body);
            // body: "name=sonu"
            const name = body.split("=")[1];  // manual parsing

            // Read existing users from file
            const data = await fs.readFile(filePath, 'utf-8');
           
            const users = JSON.parse(data);

            // Add new user
            users.push({ id: Date.now(), name });

            // Save to file
            await fs.writeFile(filePath, JSON.stringify(users, null, 2));

            res.setHeader("Content-Type", "text/html");
            res.write(`<h3>User Added Successfully</h3>`);
            res.write(`<p>Name: <strong>${name}</strong></p>`);
            res.write(`<a href="/">Go Back</a>`);
            return res.end();

        })
        return;
    }
    
    res.statusCode = 404;
    res.end("Not Found");

});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
