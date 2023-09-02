import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("<h1><em>Home Page</em></h1>");
});

app.get("/about",(req,res) =>{
    res.send("<h1>About Me</h1><p>My name is Aditya Meshram and I code</p>")
})

app.get("/contact",(req,res) =>{
    res.send("<h1>Contact Me</h1><p>Phone Number:7057318288</p><p>EmailID: adityameshram126@gmail.com</p>")
})

app.listen(port,() =>{
    console.log(`The Server is active on port ${port}`)
}); //Used for listening for any request and is executed once the server is on