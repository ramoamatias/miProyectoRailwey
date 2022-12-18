import MongoClass  from "../containers/MongoClass.js"
import {modelProducts}  from "../models/productsMongo.js"

class ProductsMongoDAO extends MongoClass {
  constructor() {
    super(modelProducts);
  }

}
export default ProductsMongoDAO