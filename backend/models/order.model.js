import { useThemeProvider } from "flowbite-react";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

      userId:{
        type:mongoose.Schema.ObjectId,
           ref: "User"
    },
    orderId:{
        type : String,
        required :[true,"Provide orderId"],
        unique:true
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref :"product"

    },
    product_details: {
        name:String,
        image:Array,
        

    },
    paymentId: {
        type:String,
        default : ""
    },
    payment_Status:{
        type : String,
        default:""

    },
    subTotAmt:{
        type:Number,
        default : 0
    },
    tolAmt:{
        type : Number,
        default:0
    },
    invoice_receipt: {
        type : String,
        default :""
    }
    },
     {
        timestamps:true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel