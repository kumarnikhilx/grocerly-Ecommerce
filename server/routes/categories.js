const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const pLimit = require("p-limit");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
});

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.get(`/:id`, async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res
      .status(500)
      .json({ message: "The category eith the given ID was not found." });
  }
  return res.status(200).send(category);
});
router.delete(`/:id`, async (req, res) => {
  const deleteUser = await Category.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    res.status(404).json({ message: "Category not found!", success: false });
  }
  res.status(202).json({ message: true, success: "Category Deleted!" });
});

// POST route to upload multiple images with concurrency limit
router.post("/create", async (req, res) => {
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
  let category = new Category({
    name: req.body.name,
    images: imgurl,
    color: req.body.color,
  });
  if (!category) {
    res.status(500).json({
      error: err,
      sucess: false,
    });
  }
  category = await category.save();
  res.status(201).json(category);
});

router.put("/:id", async (req, res) => {
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
      status: false
    });
  }

    
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    },
    { new: true }
  );
  if (!category) {
    return res.status(500).json({
      message: "Category cannot be updated!",
      sucess: false,
    });
  }
  res.send(category);
});
module.exports = router;
