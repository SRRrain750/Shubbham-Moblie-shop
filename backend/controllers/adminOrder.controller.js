import OrderModel from "../models/order.model.js"

export const getAllOrdersAdmin = async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate("userId", "name mobile")
      .populate("productId", "name price image")
      .populate("delivery_address", "address_line") 
      .sort({ createdAt: -1 })

    return res.json({
      success: true,
      error: false,
      data: orders
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message
    })
  }
}
