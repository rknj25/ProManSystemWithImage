import mongoose from "mongoose";

const proSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String,required:true},
    quantity:{type:String,required:true},
    image:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
},
{timestamps:true}
)
const product =mongoose.model("product",proSchema);
export default product;