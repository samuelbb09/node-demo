const express = require("express");
const app = express();
require("../Model/Databaseconn");
const router = require("./apiroutes/userRoutes");
const port = process.env.port || 3000;

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);

app.get("/",(req,res) => res.send("Welcome to Users api!"))

app.listen(port, () => console.log("server running..."))

