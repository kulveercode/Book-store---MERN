const Order = require("./order.model")

const createAOrder = async(req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        console.error("Error while creating order",error);
        res.status(500).json({message: "Error while creating order"});
    }
};

const getOrdersByEmail = async(req, res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt: -1});
        if(!orders) {
            return res.status(404).json({message: "No orders found"});
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error while fetching orders",error);
        res.status(500).json({message: "Error while fetch orders"});
    }
}

module.exports = {
    createAOrder,
    getOrdersByEmail
}