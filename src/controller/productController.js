const Product = require("../model/Product");

//get all products

const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};
// get product details
const product_details = async (req, res) => {
  try {
      const product = await Product.findById(req.params.productId);
      res.json(product)
  }
  catch(error){
      res.json({message: error});
  }
};
//add product
const product_create = async (req, res) => {
  const { title, price, details } = req.body;
  const product = new Product({
    title: title,
    price: price,
    details: details,
    // image: req.body.image,
  });
  try {
    const saveProduct = await product.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//edit product
const product_update = async (req, res) => {
  const {title, details, price} = req.body
  const product = {
      title: title,
      details: details,
      price: price,
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      {_id: req.params.productId},product
    );
    res.send(updateProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
// delete product
 const product_delete = async(req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(
      {_id: req.params.productId}
    );
    res.send(deleteProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
};
