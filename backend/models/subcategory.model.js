import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    categoryId:[{
         type:mongoose.Schema.ObjectId,
         ref:"category"
    }
    ]},{
        timestamps:true
    

})

const SubcategoryModel = mongoose.model('subcategory',categorySchema)

export default SubcategoryModel