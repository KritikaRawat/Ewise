const mongoose = require("mongoose");

const ImageDetailSchema = new mongoose.Schema(
 {
  Image: String
 },
 {
  collection: "ImageDetails",
 }
);

mongoose.model("ImageDetails", ImageDEtailsSchema)