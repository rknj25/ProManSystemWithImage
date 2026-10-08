
// import product from '../models/product.js';

// export const createProduct=async(req,res)=>{
//    try{
//      const {
//         name,
//         price,
//         category,
//         description,
//         quantity,
//         userId
//     }=req.body;
//     const product=await product.create({
//         name,
//         price,
//         category,
//         description,
//         quantity,
//         image:req.file.filename,
//         userId
//     })
//     return res.status(201).json({message:"Product Added..",product});
//    }
//    catch(error){
//     return res.status(500).json({message:error.message})
//    }
// }

// import product from '../models/product.js';
import product from '../models/product.js';
import Product from '../models/product.js';

export const createProduct = async (req, res) => {

  try {

    const {
      name,
      price,
      category,
      description,
      quantity,
      userId
    } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
      description,
      quantity,
      image: req.file ? req.file.filename : "",
      userId
    });

    return res.status(201).json({
      message: "Product Added..",
      product
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: error.message
    });

  }
};

export const getData=async(req,res)=>{
  try{
    const products=await Product.find();
    return res.status(200).json(products)
  }
  catch (error) {

    console.log(error);

    return res.status(500).json({
      message: error.message
    });

  }
  
}

export const deleteData=async(req,res)=>{
  try{  
      const {id}=req.params;
      await Product.findByIdAndDelete(id);
      return res.json({message:"Product deleted"});

  }
  catch{
    return res.json({message:"Product Deleted"})
    
  }
}
// export const deleteData = async (req, res) => {
//   try {

//     const { id } = req.params;

//     const deletedProduct = await Product.findByIdAndDelete(id);

//     if (!deletedProduct) {
//       return res.status(404).json({
//         message: "Product not found"
//       });
//     }

//     return res.status(200).json({
//       message: "Product deleted successfully"
//     });

//   } catch (error) {

//     console.log(error);

//     return res.status(500).json({
//       message: "Delete failed"
//     });

//   }
// };

export const updateData = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      name,
      price,
      category,
      description,
      quantity
    } = req.body;

    const updateData = {
      name,
      price,
      category,
      description,
      quantity
    };

    // If new image is selected
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const product = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};