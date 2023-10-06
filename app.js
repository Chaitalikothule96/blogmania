import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

app.get("/",(req,res) => {
    res.status.send("<h1>Welcome to Blog World</h1>")
});

mongoose.connect('mongodb+srv://admin:UTLVeZy4uQYVPq3C@cluster0.ohnzrzl.mongodb.net/?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("connected to database")).catch((err)=>console.log(err));

// app.use("/api", (req, res, next) => {
//     res.send("Hello world");
// });




//admin - UTLVeZy4uQYVPq3C