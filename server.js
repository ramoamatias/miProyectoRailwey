import express, { json, urlencoded } from "express";
import connectMongoDB from "./persistencia/dbConfigMongo.js";
import dotenv from "dotenv";
import routerProducts from "./routes/products.js";
dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({extended:true}))
app.use(express.static("./public"));
app.use("/products",routerProducts);


app.set("views","./views");
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

const PORT = process.env.PORT || 9090;
const URL = process.env.URLMONGO;

try {    
    connectMongoDB(URL);
    app.listen(PORT,()=>{
        console.log(`Escuchando el puerto ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
} catch (error) {
    console.log(error);
}
