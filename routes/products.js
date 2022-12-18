import { Router } from "express";
import ProductsMongoDAO from "../persistencia/daos/productsMongoDAO.js";
import {modelProducts}  from "../persistencia/models/productsMongo.js"

let routerProducts = Router();
const dbProducts = new ProductsMongoDAO(modelProducts);

routerProducts.get("/", async (req, res) => {
  // console.log(await modelProducts.collection.find({}));
  // console.log(dbProducts.find({}));
  const listproducts = await modelProducts.find({});
  console.log( listproducts );
  res.render("products.ejs", { listproducts });
  // res.send("Productss")
});

routerProducts.post("/", (req, res) => {
  const { body } = req;
  dbProducts.save(body);
  res.redirect("/products");
});

export default routerProducts;
