const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productList = await Product.find().populate("category");

    if (!productList) {
      return res.status(500).json({ success: false });
    }

    res.send(productList);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
router.get(`/:id`, async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res
      .status(500)
      .json({ message: "The product eith the given ID was not found." });
  }
  return res.status(200).send(product);
});

router.post("/create", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Category!" });
  }
  const limit = pLimit(2);
  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });
  const uploadStatus = await Promise.all(imagesToUpload);
  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload!",
      status: false,
    });
  }
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imgurl,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });

  const savedProduct = await product.save();
  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
  res.status(201).json(product);
});

router.delete(`/:id`, async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deleteProduct) {
    res.status(404).json({ message: "Product not found!", success: false });
  }
  res.status(200).json({ message: true, success: "Product Deleted!" });
});

router.put("/:id", async (removeEventListener, res) => {

    const limit = pLimit(2);
  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });
  const uploadStatus = await Promise.all(imagesToUpload);
  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload!",
      status: false,
    });
  }
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      images: imgurl,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    },
    { new: true }
  );
  if (!product) {
    res.status(404).json({
      message: "the product can not be updated!",
      status: false,
    });
  }

  res.status(200).json({
    message: "the product is updated!",
    status: true,
  });
});

module.exports = router;
