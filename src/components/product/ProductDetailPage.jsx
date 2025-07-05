"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Share2,
  Star,
  Truck,
  RotateCcw,
  Shield,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import RelatedProducts from "./RelatedProducts";

// Sample product data
const product = {
  id: 1,
  name: "Spider-Man: Web Slinger Graphic Tee",
  price: 799,
  originalPrice: 999,
  description:
    "Swing into action with this premium Spider-Man graphic tee featuring the iconic web-slinger in a dynamic pose. Made from high-quality cotton for maximum comfort and durability.",
  longDescription: `
    <p>Swing into action with this premium Spider-Man graphic tee featuring the iconic web-slinger in a dynamic pose. Made from high-quality cotton for maximum comfort and durability.</p>
    <p>This officially licensed Marvel merchandise is perfect for fans of all ages. The vibrant print showcases Spider-Man against a stunning starry night background, creating a unique and eye-catching design that stands out from typical superhero merchandise.</p>
    <p>Whether you're heading to a comic convention, movie premiere, or just want to show off your superhero fandom in style, this t-shirt is the perfect choice.</p>
  `,
  // Fixed the image URLs to use a placeholder for reliable display
  images: [
    "/api/https://i5.walmartimages.com/asr/f22f3d69-cc59-4f85-9b9e-91554c4bb2de.37bf95f19e2f49f18a35db2d18cf81f4.jpeg/400/500",
    ,
    "https://i5.walmartimages.com/asr/f22f3d69-cc59-4f85-9b9e-91554c4bb2de.37bf95f19e2f49f18a35db2d18cf81f4.jpeg",
    "/api/https://i5.walmartimages.com/asr/f22f3d69-cc59-4f85-9b9e-91554c4bb2de.37bf95f19e2f49f18a35db2d18cf81f4.jpeg/400/500",
    "/api/placeholder/400/500",
    "https://i5.walmartimages.com/asr/f22f3d69-cc59-4f85-9b9e-91554c4bb2de.37bf95f19e2f49f18a35db2d18cf81f4.jpeg",
  ],
  category: "Marvel",
  subcategory: "Graphic Printed",
  rating: 4.5,
  reviewCount: 128,
  inStock: true,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Red", hex: "#e53e3e" },
    { name: "Blue", hex: "#3182ce" },
    { name: "Black", hex: "#2d3748" },
  ],
  features: [
    "100% premium cotton material",
    "Officially licensed Marvel merchandise",
    "Vibrant, long-lasting print",
    "Comfortable ribbed crew neck",
    "Machine washable",
    "Regular fit",
  ],
};

const ProductDetailPage = () => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedSection, setExpandedSection] = useState("description");

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <>
      <Navbar />
      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link
              to="/products"
              className="text-gray-500 hover:text-indigo-600"
            >
              Products
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link
              to={`/category/${product.category.toLowerCase()}`}
              className="text-gray-500 hover:text-indigo-600"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Images - Fixed to ensure proper display */}
            <div>
              {/* Main Image - Using a reliable placeholder */}
              <div className="mb-4 rounded-lg overflow-hidden border border-primary relative">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full font-bold">
                    {discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`rounded-md overflow-hidden border-2 ${
                      mainImage === image
                        ? "border-primary"
                        : "border-secondary hover:border-primary"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "stroke-current fill-none"
                      }
                    />
                  ))}
                </div>
                <span className="text-secondary">
                  {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-primary mr-3">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-secondary line-through mr-3">
                      ₹{product.originalPrice}
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Short Description */}
              <p className="text-secondary mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedColor === color.name
                          ? "ring-2 ring-offset-2 ring-primary"
                          : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <span className="text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-primary">Size</h3>
                  <Link
                    to="/size-guide"
                    className="text-sm font-medium text-primary hover:text-primary-focus"
                  >
                    Size guide
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-md text-center ${
                        selectedSize === size
                          ? "bg-primary text-primary border-primary"
                          : "border-secondary text-secondary hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary mb-3">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 border border-secondary rounded-l-md hover:bg-secondary"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Number.parseInt(e.target.value) || 1)
                    }
                    className="w-16 text-center border-t border-b border-secondary py-2"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 border border-secondary rounded-r-md hover:bg-secondary"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  className={`flex-1 bg-primary text-primary font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    !product.inStock || !selectedSize || !selectedColor
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-focus"
                  }`}
                  disabled={!product.inStock || !selectedSize || !selectedColor}
                >
                  <ShoppingCart size={20} />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-lg border ${
                    isFavorite
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "border-secondary text-secondary hover:border-primary"
                  }`}
                >
                  <Heart
                    size={20}
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
                <button className="p-3 rounded-lg border border-secondary text-secondary hover:border-primary">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="bg-secondary rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <Truck
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-primary">Free Shipping</h4>
                    <p className="text-sm text-secondary">
                      Free standard shipping on orders over ₹499
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <RotateCcw
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-primary">Easy Returns</h4>
                    <p className="text-sm text-secondary">
                      30-day return policy for unworn items
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-primary">
                      Secure Checkout
                    </h4>
                    <p className="text-sm text-secondary">
                      SSL encrypted payment processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border rounded-lg divide-y mb-16">
            {/* Description Section */}
            <div className="p-4">
              <button
                onClick={() => toggleSection("description")}
                className="w-full flex items-center justify-between font-medium text-primary"
              >
                <span>Description</span>
                {expandedSection === "description" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedSection === "description" && (
                <div
                  className="mt-4 text-secondary space-y-3"
                  dangerouslySetInnerHTML={{ __html: product.longDescription }}
                />
              )}
            </div>

            {/* Features Section */}
            <div className="p-4">
              <button
                onClick={() => toggleSection("features")}
                className="w-full flex items-center justify-between font-medium text-primary"
              >
                <span>Features</span>
                {expandedSection === "features" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedSection === "features" && (
                <div className="mt-4 text-secondary">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Materials Section */}
            <div className="p-4">
              <button
                onClick={() => toggleSection("materials")}
                className="w-full flex items-center justify-between font-medium text-primary"
              >
                <span>Materials & Care</span>
                {expandedSection === "materials" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedSection === "materials" && (
                <div className="mt-4 text-secondary space-y-3">
                  <p>100% premium cotton for maximum comfort and durability.</p>
                  <h4 className="font-medium">Care Instructions:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Machine wash cold with similar colors</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Iron on low heat if needed</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="p-4">
              <button
                onClick={() => toggleSection("reviews")}
                className="w-full flex items-center justify-between font-medium text-primary"
              >
                <span>Reviews ({product.reviewCount})</span>
                {expandedSection === "reviews" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedSection === "reviews" && (
                <div className="mt-4 text-secondary">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl font-bold text-primary mr-2">
                          {product.rating.toFixed(1)}
                        </span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < Math.floor(product.rating)
                                  ? "fill-current"
                                  : "stroke-current fill-none"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-secondary">
                        {product.reviewCount} reviews
                      </p>
                    </div>
                    <Link
                      to={`/product/${product.id}/reviews`}
                      className="bg-primary hover:bg-primary-focus text-primary font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Write a Review
                    </Link>
                  </div>

                  {/* Sample reviews would go here */}
                  <p className="text-center text-secondary my-4">
                    See all reviews for this product
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <RelatedProducts
            category={product.category}
            currentProductId={product.id}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
