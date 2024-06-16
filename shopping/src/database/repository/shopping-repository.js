const { CartModel, OrderModel } = require('../models');
const { v4: uuidv4 } = require('uuid');
const { APIError, BadRequestError } = require('../../utils/app-errors')


//Dealing with data base operations
class ShoppingRepository {

    // payment

    async Orders(customerId){
        try{
            const orders = await OrderModel.find({customerId }).populate('items.product');        
            return orders;
        }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Orders')
        }
    }

    //methods to handle cart data

    async GetCart(customerId){
        try{
            console.log(customerId);
            const cart = await CartModel.find({customerId});
            
            return cart;
        }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Category')
        }
    }

    async AddCartItem(customerId, item, qty, isRemove){
        try{
            const cart = await CartModel.findOne({customerId});
            const { _id } = item;

            if(cart){
                let isExist = false;

                let cartItems = cart.items;

                if (cartItems.length > 0){
                    cartItems.map(item1 => {
                        if (item1.product._id) {
                            if(item1.product._id.toString() === _id.toString()){
                                if(isRemove){
                                    let index = cartItems.indexOf(item1);
                                    cartItems.splice(index, 1);
                                    console.log("removed");
                                    }else{
                                        item1.unit = qty;
                                        }
                                        isExist = true;
                                        }
                                 }
                        })

                }

                if (!isExist && !isRemove){ 
                    cartItems.push({ product: {...item}, unit: qty});
                }
                cart.items = cartItems; 
                return await cart.save();
                }
                else{
                return await CartModel.create({
                    customerId,
                    items: [{ product: {...item}, unit: qty}]
                })
            }
        }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Category')
        }
    }
 
 
    async CreateNewOrder(customerId, txnId){

        //check transaction for payment Status
        
        try{
            const cart = await CartModel.findOne({customerId}).populate('items');
            if(cart){
                
                let amount = 0;   
    
                let cartItems = cart.items;
    
                if(cartItems.length > 0){
                    //process Order
                    cartItems.map(item => {
                        amount += parseInt(item.product.price) *  parseInt(item.unit);   
                    });
        
                    const orderId = uuidv4();
        
                    const order = new OrderModel({
                        orderId,
                        customerId,
                        amount,
                        txnId,
                        status: 'received',
                        items: cartItems
                    })

                    console.log(order)
        
                    cart.items = [];
                    
                    // ord?Wer.populate('items.product').execPopulate();
                    const orderResult = await order.save();
                       
                    await cart.save();
    
                    return orderResult;
                }
            }
    
          return {}

        }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Category')
        }
        

    }
}

module.exports = ShoppingRepository;