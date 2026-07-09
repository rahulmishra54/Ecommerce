import productModel from "../models/productModel.js   "
import uploadImage from "../config/imageKit.js";
async function addProduct(req, res) {
 
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    } = req.body;
    console.log(name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller)
    const files = req.files;


    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images uploaded"
      });
    }

    const imageUrls = [];


    for (const file of files) {
      const url = await uploadImage({
        buffer: file.buffer,
        originalname: file.originalname,
       
      });
      
      imageUrls.push(url);
    }

    
    const product = await productModel.create({
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      image: imageUrls
    });

    
    res.status(201).json({
      success: true,
      product
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function listProduct(req, res) {
 
  try {
    const products = await productModel.find(
      
    );

    res.status(200).json({
      success: true,
      products
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}



async function removeProduct(req, res) {
console.log(req)
  try {
    console.log(req.params.id)
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required"
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product removed successfully"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}



async function singleProduct(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required"
      });
    }

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      product
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}


export { listProduct, addProduct, removeProduct, singleProduct }