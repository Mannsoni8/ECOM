import React from "react";

const cartItems = [
  {
    id: 1,
    title: "Premium Sneakers",
    price: 129.99,
    quantity: 1,
    image: "https://picsum.photos/120?random=1",
  },
  {
    id: 2,
    title: "Casual Hoodie",
    price: 59.99,
    quantity: 2,
    image: "https://picsum.photos/120?random=2",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🛒 Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row items-center gap-5 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1 w-full">
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>

                  <div className="flex items-center justify-between mt-5">
                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                        −
                      </button>

                      <span className="px-5">{item.quantity}</span>

                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                        +
                      </button>
                    </div>

                    <button className="text-red-500 hover:text-red-700 font-medium">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-2xl font-bold text-green-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$8.50</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-black">
                <span>Total</span>
                <span>${(subtotal + 10 + 8.5).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition font-semibold text-lg">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 border border-gray-300 py-4 rounded-xl hover:bg-gray-100 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
