import CartModel from "../models/cartModel.js";

export const addToCart = async (req, res) => {
  try {
    console.log(req)
    
    const { productId, name, price, image, size } = req.body;
    const userId = req.user.id;

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({
        userId,
        items: [
          {
            productId,
            name,
            price,
            image,
            size,
            quantity: 1,
          },
        ],
        totalPrice: price,
      });

      await cart.save();
      return res.json({ success: true, cart });
    }

    // 🔹 Check if item already exists
    const existingItem = cart.items.find(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size
    );

    if (existingItem) {

      existingItem.quantity += 1;
    } else {
   
      cart.items.push({
        productId,
        name,
        price,
        image,
        size,
        quantity: 1,
      });
    }


    cart.totalPrice += price;

    await cart.save();

    res.json({
      success: true,
      message: "Item added to cart",
      cart,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

export const deleteFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.params.id; // ✅ correct source

    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    // ✅ find item first
    const item = cart.items.find(
      (item) => item._id.toString() === itemId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    // ✅ remove item
    cart.items = cart.items.filter(
      (item) => item._id.toString() !== itemId
    );

    // ✅ update total price
    cart.totalPrice -= item.price * item.quantity;

    // safety (avoid negative)
    if (cart.totalPrice < 0) cart.totalPrice = 0;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed",
      cart,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const listCartItems = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await CartModel.findOne({ userId });

    
    if (!cart) {
      return res.json({
        success: true,
        cart: { items: [], totalPrice: 0 }
      });
    }

 
    res.json({
      success: true,
      cart
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};