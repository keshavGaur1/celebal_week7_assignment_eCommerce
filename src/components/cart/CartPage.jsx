"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import MainLayout from "../layout/MainLayout";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Spider-Man: Web Slinger Graphic Tee",
    price: 799,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    size: "L",
    color: "Red",
    quantity: 1,
  },
  {
    id: 2,
    name: "Batman: Dark Knight Oversized Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    size: "M",
    color: "Black",
    quantity: 2,
  },
  {
    id: 6,
    name: "Deadpool: Chimichangas Oversized Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    size: "XL",
    color: "Red",
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      setCouponError("Please enter a coupon code");
      return;
    }

    // Simulate coupon validation
    if (couponCode.toUpperCase() === "HERO10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setCouponApplied(false);
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const shipping = subtotal > 499 ? 0 : 49;
  const total = subtotal - discount + shipping;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Generate glowing stars dynamically
  const renderGlowingStars = () => {
    const stars = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 3 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      stars.push(
        <div
          key={i}
          className="glowing-star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            boxShadow: `0 0 ${size * 2}px ${
              size / 2
            }px rgba(255, 255, 255, 0.8)`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  // Generate shooting stars
  const renderShootingStars = () => {
    const shootingStars = [];
    for (let i = 0; i < 5; i++) {
      const width = Math.random() * 100 + 50;
      const top = Math.random() * 100;
      const left = Math.random() * 50;
      const delay = Math.random() * 15;
      const duration = Math.random() * 2 + 1;
      const angle = Math.random() * 60 - 30;

      shootingStars.push(
        <div
          key={i}
          className="shooting-star"
          style={{
            width: `${width}px`,
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${angle}deg)`,
            animation: `shoot ${duration}s ${delay}s linear infinite`,
          }}
        />
      );
    }
    return shootingStars;
  };

  // Generate pulsating stars
  const renderPulsatingStars = () => {
    const stars = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 2 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 3;

      stars.push(
        <div
          key={i}
          className="pulsating-star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            boxShadow: `0 0 ${size * 3}px ${size}px rgba(100, 200, 255, 0.8)`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-950 to-indigo-900 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Container for stars */}
        <div id="starry-cart-bg" className="absolute inset-0 overflow-hidden">
          {/* Enhanced star layers */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 25% 25%, white 1%, transparent 1%),
                radial-gradient(2px 2px at 75% 75%, rgba(255, 255, 255, 0.8) 1%, transparent 1%),
                radial-gradient(1.5px 1.5px at 50% 50%, rgba(255, 255, 255, 0.9) 1%, transparent 1%),
                radial-gradient(1px 1px at 30% 70%, rgba(200, 200, 255, 0.7) 1%, transparent 1%),
                radial-gradient(2.5px 2.5px at 80% 20%, rgba(255, 255, 255, 0.7) 1%, transparent 1%)
              `,
              backgroundSize:
                "200px 200px, 150px 150px, 100px 100px, 250px 250px, 300px 300px",
              animation: "star-rotation 500s linear infinite",
            }}
          />

          {/* Secondary rotating star layer */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 10% 10%, white 1%, transparent 1%),
                radial-gradient(1.5px 1.5px at 60% 40%, white 1%, transparent 1%),
                radial-gradient(1px 1px at 30% 80%, white 1%, transparent 1%)
              `,
              backgroundSize: "250px 250px, 300px 300px, 350px 350px",
              animation: "star-rotation-reverse 600s linear infinite",
            }}
          />

          {/* Deep space nebula effects */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 70% 20%, rgba(32, 43, 100, 0.4) 0%, transparent 25%), radial-gradient(circle at 30% 70%, rgba(43, 36, 82, 0.4) 0%, transparent 25%)",
            }}
          />

          {/* Animated star clusters */}
          <div className="star-cluster-1 absolute w-32 h-32 opacity-40"></div>
          <div className="star-cluster-2 absolute w-40 h-40 opacity-40 right-0"></div>

          {/* New enhanced glowing stars */}
          {renderGlowingStars()}
          {renderPulsatingStars()}
          {renderShootingStars()}

          {/* Additional nebula glow */}
          <div
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 150, 255, 0.3) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "nebula-pulse 8s infinite alternate ease-in-out",
            }}
          />

          <div
            className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(100, 0, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
              animation:
                "nebula-pulse 12s infinite alternate-reverse ease-in-out",
            }}
          />
        </div>

        {/* Centered cart content with max width and comic border */}
        <div className="w-full flex justify-center items-center relative z-10">
          <div className="container max-w-5xl mx-auto px-4 py-8">
            <h1
              className="text-3xl font-bold text-yellow-400 mb-6 flex items-center drop-shadow-lg"
              style={{ textShadow: "0 0 10px #facc15, 0 0 20px #6366f1" }}
            >
              <ShoppingBag className="mr-2 text-indigo-400" size={28} />
              Your Cosmic Cart ({totalItems}{" "}
              {totalItems === 1 ? "item" : "items"})
            </h1>

            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-4xl comic-border">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-indigo-950/70 backdrop-blur-md rounded-xl overflow-hidden border-4 border-yellow-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] comic-border">
                    <div className="divide-y divide-indigo-900/30">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 sm:p-6 flex flex-col sm:flex-row"
                        >
                          <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-indigo-900/20 rounded-md overflow-hidden mb-4 sm:mb-0 border border-indigo-800/30">
                            <img
                              src={
                                !item.image || item.image.startsWith("/")
                                  ? "https://images.unsplash.com/photo-1517841905240-472988babdf9"
                                  : item.image
                              }
                              alt={item.name}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="sm:ml-6 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-base font-bold text-yellow-300">
                                  <Link
                                    to={`/product/${item.id}`}
                                    className="hover:text-indigo-400 transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-indigo-200">
                                  Size: {item.size} | Color: {item.color}
                                </p>
                                <p className="mt-1 text-sm font-medium text-indigo-100">
                                  ₹{item.price}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-yellow-400 transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                              <div className="flex items-center border-2 border-yellow-400 rounded-md bg-indigo-900/40">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-2 text-indigo-400 hover:text-yellow-400"
                                >
                                  <Minus size={14} />
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateQuantity(
                                      item.id,
                                      Number.parseInt(e.target.value) || 1
                                    )
                                  }
                                  className="w-12 text-center border-x-2 border-yellow-400 py-1 text-white bg-transparent"
                                />
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-2 text-indigo-400 hover:text-yellow-400"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <div className="text-right">
                                <p className="text-base font-bold text-yellow-300">
                                  ₹{(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Link
                      to="/products"
                      className="flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Continue Exploring
                    </Link>

                    <button
                      onClick={() => setCartItems([])}
                      className="text-red-400 hover:text-yellow-400 font-bold transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-indigo-950/70 backdrop-blur-md rounded-xl p-6 border-4 border-yellow-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] comic-border">
                    <div>
                      <h2
                        className="text-xl font-bold text-yellow-400 mb-4 drop-shadow-lg"
                        style={{
                          textShadow: "0 0 8px #facc15, 0 0 16px #6366f1",
                        }}
                      >
                        Order Summary
                      </h2>

                      {/* Coupon Code */}
                      <div className="mb-6">
                        <label
                          htmlFor="coupon"
                          className="block text-sm font-bold text-indigo-200 mb-2"
                        >
                          Discount Code
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            id="coupon"
                            value={couponCode}
                            onChange={(e) => {
                              setCouponCode(e.target.value);
                              setCouponError("");
                            }}
                            disabled={couponApplied}
                            placeholder="Enter code"
                            className="flex-grow px-3 py-2 border-2 border-yellow-400 bg-indigo-900/40 text-white rounded-l-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 placeholder-indigo-200/70"
                          />
                          <button
                            onClick={applyCoupon}
                            disabled={couponApplied}
                            className={`px-4 py-2 rounded-r-md font-bold transition-all duration-300 ${
                              couponApplied
                                ? "bg-green-800/70 text-white"
                                : "bg-yellow-400 text-indigo-900 hover:bg-yellow-300 border-yellow-400 border-2"
                            }`}
                          >
                            {couponApplied ? "Applied" : "Apply"}
                          </button>
                        </div>
                        {couponError && (
                          <p className="text-sm text-red-400 mt-1">
                            {couponError}
                          </p>
                        )}
                        {couponApplied && (
                          <p className="text-sm text-green-400 mt-1">
                            Coupon applied: 10% discount
                          </p>
                        )}
                        {!couponApplied && !couponError && (
                          <p className="text-xs text-indigo-200/70 mt-1">
                            Try "HERO10" for 10% off your order
                          </p>
                        )}
                      </div>

                      {/* Price Details */}
                      <div className="space-y-3 border-b-2 border-yellow-400 pb-4 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-indigo-200">Subtotal</span>
                          <span className="text-white font-bold">
                            ₹{subtotal.toFixed(2)}
                          </span>
                        </div>
                        {couponApplied && (
                          <div className="flex justify-between text-sm">
                            <span className="text-indigo-200">Discount</span>
                            <span className="text-green-400 font-bold">
                              -₹{discount.toFixed(2)}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-indigo-200">Shipping</span>
                          <span className="text-white font-bold">
                            {shipping === 0
                              ? "Free"
                              : `₹${shipping.toFixed(2)}`}
                          </span>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex justify-between mb-6">
                        <span className="text-lg font-bold text-yellow-400">
                          Total
                        </span>
                        <span
                          className="text-lg font-bold text-indigo-400 drop-shadow-lg"
                          style={{
                            textShadow: "0 0 8px #6366f1, 0 0 16px #facc15",
                          }}
                        >
                          ₹{total.toFixed(2)}
                        </span>
                      </div>

                      {/* Checkout Button */}
                      <Link
                        to="/checkout"
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                      >
                        <CreditCard size={20} />
                        Proceed to Checkout
                      </Link>

                      {/* Payment Methods */}
                      <div className="mt-4 text-center">
                        <p className="text-xs text-indigo-200/70 mb-2">
                          We accept
                        </p>
                        <div className="flex justify-center space-x-2">
                          <div className="w-10 h-6 bg-yellow-400 rounded border-2 border-indigo-900"></div>
                          <div className="w-10 h-6 bg-yellow-400 rounded border-2 border-indigo-900"></div>
                          <div className="w-10 h-6 bg-yellow-400 rounded border-2 border-indigo-900"></div>
                          <div className="w-10 h-6 bg-yellow-400 rounded border-2 border-indigo-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-indigo-950/70 backdrop-blur-md rounded-xl border-4 border-yellow-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] comic-border">
                <div className="w-24 h-24 bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-yellow-400">
                  <ShoppingBag className="text-indigo-400" size={32} />
                </div>
                <h2
                  className="text-2xl font-bold text-yellow-400 mb-2 drop-shadow-lg"
                  style={{ textShadow: "0 0 10px #facc15, 0 0 20px #6366f1" }}
                >
                  Your cosmic cart is empty
                </h2>
                <p className="text-indigo-200 mb-6">
                  Looks like you haven't added any heroic items to your cart
                  yet.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                >
                  Start Shopping
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </div>
            )}

            {/* Comic-style decorative elements */}
            <div className="absolute -top-6 right-10 transform rotate-12 z-20 hidden md:block">
              <div className="bg-yellow-400 text-indigo-900 font-bold py-2 px-4 rounded-lg shadow-lg border-4 border-indigo-900 comic-border">
                POW!
              </div>
            </div>
            <div className="absolute -bottom-6 left-10 transform -rotate-12 z-20 hidden md:block">
              <div className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg border-4 border-indigo-900 comic-border">
                BOOM!
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes star-rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes star-rotation-reverse {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          .shooting-star {
            position: absolute;
            height: 2px;
            background: linear-gradient(
              to right,
              transparent,
              white,
              white,
              transparent
            );
            border-radius: 50%;
            box-shadow: 0 0 5px 1px rgba(0, 191, 255, 0.6);
            animation: shoot linear forwards;
          }

          @keyframes shoot {
            0% {
              transform: translateX(0) translateY(0) rotate(inherit);
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateX(400px) translateY(400px) rotate(inherit);
              opacity: 0;
            }
          }

          .pulsating-star {
            position: absolute;
            border-radius: 50%;
            background-color: white;
            animation: pulsate 3s infinite ease-in-out;
          }

          @keyframes pulsate {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1);
              box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
              box-shadow: 0 0 10px 4px rgba(100, 200, 255, 0.7);
            }
          }

          .glowing-star {
            position: absolute;
            border-radius: 50%;
            background-color: white;
            animation: glow 4s infinite ease-in-out alternate;
          }

          @keyframes glow {
            0% {
              transform: scale(0.8);
              opacity: 0.6;
              box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
            }
            100% {
              transform: scale(1.2);
              opacity: 1;
              box-shadow: 0 0 15px 5px rgba(100, 200, 255, 0.8);
            }
          }

          .star-cluster-1 {
            top: 20%;
            left: 15%;
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 8px 8px;
            border-radius: 50%;
            animation: cluster-drift 60s infinite linear alternate;
            box-shadow: 0 0 20px 10px rgba(100, 200, 255, 0.2);
          }

          .star-cluster-2 {
            bottom: 30%;
            right: 20%;
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 10px 10px;
            border-radius: 50%;
            animation: cluster-drift 70s infinite linear alternate-reverse;
            box-shadow: 0 0 20px 10px rgba(100, 200, 255, 0.2);
          }

          @keyframes cluster-drift {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            50% {
              transform: translate(30px, 20px) rotate(180deg);
            }
            100% {
              transform: translate(-30px, -20px) rotate(360deg);
            }
          }

          @keyframes nebula-pulse {
            0% {
              opacity: 0.15;
              transform: scale(1);
            }
            50% {
              opacity: 0.25;
              transform: scale(1.1);
            }
            100% {
              opacity: 0.15;
              transform: scale(1);
            }
          }

          .comic-border {
            box-shadow: 0 0 0 4px #fff, 0 0 0 8px #6366f1, 0 0 0 12px #facc15;
            border-radius: 1rem;
          }
        `}</style>
      </div>
    </MainLayout>
  );
};

export default CartPage;
