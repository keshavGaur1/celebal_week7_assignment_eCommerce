"use client";

import { useState } from "react";
import { Filter, ChevronDown, ChevronUp, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: "Spider-Man: Web Slinger Graphic Tee",
    price: 799,
    image:
      "https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C91bGKdIRROL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_SY445_.png",
    rating: 4.5,
    category: "Marvel",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: "Batman: Dark Knight Oversized Tee",
    price: 899,
    image:
      "https://images.bewakoof.com/original/men-s-navy-blue-the-dark-knight-graphic-printed-oversized-t-shirt-592058-1731661124-1.jpg",
    rating: 5,
    category: "DC",
    subcategory: "Oversized",
    isNew: false,
    discount: 15,
  },
  {
    id: 3,
    name: "Iron Man: Arc Reactor Glow Print",
    price: 999,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.gMTqgQ-XtU97Z_tcDbLXQwHaHa&pid=Api&P=0&h=180",
    rating: 4,
    category: "MARVEL",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Naruto: Nine-Tails Mode Graphic Tee",
    price: 849,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.gMTqgQ-XtU97Z_tcDbLXQwHaHa&pid=Api&P=0&h=180",
    rating: 4.5,
    category: "ANIME",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 10,
  },
  {
    id: 5,
    name: "Superman: Man of Steel Acid Wash",
    price: 1099,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91wEQqCFURL.-BZ1000-.superman-classic-logo-s-t-shirt.jpg",
    rating: 3.5,
    category: "DC",
    subcategory: "Acid Wash",
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "Deadpool: Chimichangas Oversized Tee",
    price: 899,
    image:
      "https://www.redwolf.in/image/cache/catalog/t-shirts/oversized/deadpool-merc-with-a-mouth-oversized-t-shirt-mock-back-600x800.jpg?m=1728472094",
    rating: 5,
    category: "MARVEL",
    subcategory: "Oversized",
    isNew: true,
    discount: 0,
  },
  {
    id: 7,
    name: "One Punch Man: Saitama Graphic Tee",
    price: 799,
    image:
      "https://cdn.media.amplience.net/s/hottopic/20107884_hi?$productMainDesktop$",
    rating: 4,
    category: "ANIME",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 20,
  },
  {
    id: 8,
    name: "Wonder Woman: Amazonian Warrior Tee",
    price: 849,
    image:
      "https://mmv2api.s3.us-east-2.amazonaws.com/products/thumbs/2-image-tswwprdamaz-3-productimagenowatermark.jpg",
    rating: 4.5,
    category: "DC",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "Thor: Mjolnir Graphic Tee",
    price: 849,
    image:
      "https://cdn03.ciceksepeti.com/cicek/kcm76329998-1/L/thor-mjolnir-dijital-resimli-baski-hammer-siyah-tshirt-kcm76329998-1-192292648dd2491eb176dd0d3e5cf933.jpg",
    rating: 4.5,
    category: "Marvel",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 10,
    name: "Demon Slayer: Tanjiro Graphic Tee",
    price: 899,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.iosKPeA_9nl04nrXi8vnpgHaIJ&pid=Api&P=0&h=180",
    rating: 4.5,
    category: "Anime",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 0,
  },
  {
    id: 11,
    name: "Flash: Speedster Oversized Tee",
    price: 849,
    image:
      "https://tse4.mm.bing.net/th?id=OIP.ILcmxECqd5j2epD98MSOIAHaJ4&pid=Api&P=0&h=180",
    rating: 4,
    category: "DC ",
    subcategory: "Oversized",
    isNew: false,
    discount: 10,
  },
  {
    id: 12,
    name: "Black Panther: Wakanda Forever Tee",
    price: 899,
    image:
      "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-tsbpmtchalla-1-productimagenowatermark.jpg",
    rating: 5,
    category: "Marvel",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 13,
    name: "Wonder Woman: Amazonian Warrior Tee",
    price: 849,
    image:
      "https://realinfinitywar.com/wp-content/uploads/2018/08/wonderwoman-casual-t-shirt-1.jpg",
    rating: 4.5,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 10,
  },
  {
    id: 14,
    name: "Black Widow: Avenger Crop Top",
    price: 799,
    image: "https://static.qns.digital/img/p/2/4/9/0/4/4/2/2490442.jpg",
    rating: 4.0,
    category: "Women",
    subcategory: "Crop Tops",
    isNew: false,
    discount: 0,
  },
  {
    id: 15,
    name: "Captain Marvel: Higher Further Faster Tee",
    price: 899,
    image:
      "https://i5.walmartimages.com/seo/Captain-Marvel-Tshirt-Shirt-Tee_4b68b4f9-0b82-4017-b3a9-91c97602c237.e6c090abb6a933a6c562e176ba7731e8.jpeg",
    rating: 4.5,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 5,
  },
  {
    id: 16,
    name: "Sailor Moon: Cosmic Power Graphic Tee",
    price: 949,
    image:
      "https://i5.walmartimages.com/asr/7cb0237a-538b-4d83-9dea-35432ee10cb1_1.3fd4e72403f6b82ef62f7739ff36fa96.jpeg",
    rating: 5.0,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },

  {
    id: 17,
    name: "Harley Quinn: Mischief Maker Tee",
    price: 799,
    image:
      "https://i.pinimg.com/originals/2e/2e/7e/2e2e7e2e7e2e7e2e7e2e7e2e7e2e7e2e.jpg",
    rating: 4.2,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 18,
    name: "Supergirl: Krypton Power Crop Top",
    price: 849,
    image:
      "https://i5.walmartimages.com/asr/8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e_1.8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpeg",
    rating: 4.6,
    category: "Women",
    subcategory: "Crop Tops",
    isNew: true,
    discount: 10,
  },
  {
    id: 19,
    name: "She-Hulk: Strength Tee",
    price: 899,
    image:
      "https://cdn.shopify.com/s/files/1/0253/6561/0604/products/shehulk-tee.jpg?v=1629391234",
    rating: 4.3,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 5,
  },
  {
    id: 20,
    name: "Batgirl: Gotham Nights Hoodie",
    price: 1099,
    image:
      "https://i5.walmartimages.com/asr/9b9b9b9b-9b9b-9b9b-9b9b-9b9b9b9b9b9b_1.9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpeg",
    rating: 4.7,
    category: "Women",
    subcategory: "Hoodies",
    isNew: true,
    discount: 15,
  },
  {
    id: 21,
    name: "Storm: Weather Goddess Tee",
    price: 799,
    image:
      "https://cdn.shopify.com/s/files/1/0253/6561/0604/products/storm-tee.jpg?v=1629391234",
    rating: 4.4,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 0,
  },
  {
    id: 22,
    name: "Scarlet Witch: Chaos Magic Tee",
    price: 899,
    image:
      "https://cdn.shopify.com/s/files/1/0253/6561/0604/products/scarletwitch-tee.jpg?v=1629391234",
    rating: 4.8,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 20,
  },
  {
    id: 23,
    name: "Catwoman: Feline Femme Fatale Crop Top",
    price: 849,
    image:
      "https://i5.walmartimages.com/asr/7c7c7c7c-7c7c-7c7c-7c7c-7c7c7c7c7c7c_1.7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c.jpeg",
    rating: 4.1,
    category: "Women",
    subcategory: "Crop Tops",
    isNew: false,
    discount: 0,
  },
  {
    id: 24,
    name: "Raven: Azarath Metrion Zinthos Tee",
    price: 799,
    image:
      "https://cdn.shopify.com/s/files/1/0253/6561/0604/products/raven-tee.jpg?v=1629391234",
    rating: 4.5,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: true,
    discount: 10,
  },
  {
    id: 25,
    name: "Jean Grey: Phoenix Force Tee",
    price: 899,
    image:
      "https://cdn.shopify.com/s/files/1/0253/6561/0604/products/jeangrey-tee.jpg?v=1629391234",
    rating: 4.6,
    category: "Women",
    subcategory: "Graphic Printed",
    isNew: false,
    discount: 5,
  },
  {
    id: 26,
    name: "Invisible Woman: Fantastic Four Hoodie",
    price: 1099,
    image:
      "https://i5.walmartimages.com/asr/6a6a6a6a-6a6a-6a6a-6a6a-6a6a6a6a6a6a_1.6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a.jpeg",
    rating: 4.7,
    category: "Women",
    subcategory: "Hoodies",
    isNew: true,
    discount: 15,
  },
];

const ProductListingPage = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({
    categories: [],
    subcategories: [],
    priceRange: [0, 2000],
    onSale: false,
    newArrivals: false,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    subcategories: true,
    price: true,
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get category from URL
  const searchParams = new URLSearchParams(location.search);
  const urlCategory = searchParams.get("category");

  // Filter categories
  const categories = ["Marvel", "DC", "Anime", "Custom"];
  const subcategories = [
    "Graphic Printed",
    "Oversized",
    "Acid Wash",
    "Solid Color",
    "Sleeveless",
    "Long Sleeve",
    "Hooded",
  ];

  const toggleFilter = (filterType, value) => {
    setFilters((prev) => {
      const currentFilters = [...prev[filterType]];
      const index = currentFilters.indexOf(value);

      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }

      return {
        ...prev,
        [filterType]: currentFilters,
      };
    });
  };

  const toggleExpandFilter = (filterType) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      subcategories: [],
      priceRange: [0, 2000],
      onSale: false,
      newArrivals: false,
    });
  };

  // 1. Start with category filter
  let filteredProducts = sampleProducts;
  if (urlCategory) {
    if (urlCategory.toLowerCase() === "men") {
      // Show all Marvel and DC products for 'men', robust to whitespace/casing
      filteredProducts = sampleProducts.filter(
        (p) =>
          p.category &&
          ["marvel", "dc"].includes(p.category.trim().toLowerCase())
      );
    } else {
      filteredProducts = sampleProducts.filter(
        (p) =>
          p.category &&
          p.category.trim().toLowerCase().includes(urlCategory.toLowerCase())
      );
    }
  }

  // 2. Apply the rest of your filters
  filteredProducts = filteredProducts.filter((product) => {
    // Category filter
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    // Subcategory filter
    if (
      filters.subcategories.length > 0 &&
      !filters.subcategories.includes(product.subcategory)
    ) {
      return false;
    }

    // Price range filter
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    ) {
      return false;
    }

    // On sale filter
    if (filters.onSale && product.discount === 0) {
      return false;
    }

    // New arrivals filter
    if (filters.newArrivals && !product.isNew) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? -1 : a.isNew ? 1 : 0;
      default: // featured
        return 0;
    }
  });

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
      <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-950 to-green-900 relative overflow-hidden">
        {/* Container for stars */}
        <div id="starry-bg" className="absolute inset-0 overflow-hidden">
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
                "radial-gradient(circle, rgba(16, 163, 74, 0.3) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "nebula-pulse 8s infinite alternate ease-in-out",
            }}
          />

          <div
            className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
              animation:
                "nebula-pulse 12s infinite alternate-reverse ease-in-out",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Page Header */}
          <div className="mb-8">
            <h1
              className="text-3xl font-bold text-gray-900 mb-2 text-center"
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.15)" }}
            >
              Comic T-Shirts Collection
            </h1>
            <p className="text-gray-700 text-center">
              {sortedProducts.length} products found
            </p>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="w-full bg-background/40 backdrop-blur-md border border-primary/50 hover:bg-primary/30 text-primary font-medium py-2 px-4 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(0,191,255,0.3)]"
            >
              <Filter size={18} className="mr-2" />
              Filter & Sort
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-4">
                <div className="bg-background/40 backdrop-blur-md rounded-xl p-6 border border-primary/50 shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                  <div className="flex justify-between items-center mb-4">
                    <h2
                      className="text-lg font-bold text-gray-900"
                      style={{ textShadow: "0 0 5px rgba(0,0,0,0.10)" }}
                    >
                      Filters
                    </h2>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      Clear all
                    </button>
                  </div>

                  {/* Categories Filter */}
                  <div className="mb-6 border-b border-primary/30 pb-6">
                    <button
                      onClick={() => toggleExpandFilter("categories")}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                    >
                      <span>Categories</span>
                      {expandedFilters.categories ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {expandedFilters.categories && (
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <div key={cat} className="flex items-center">
                            <input
                              id={`category-${cat}`}
                              type="checkbox"
                              checked={filters.categories.includes(cat)}
                              onChange={() => toggleFilter("categories", cat)}
                              className="h-4 w-4 text-gray-900 focus:ring-primary border-primary rounded"
                            />
                            <label
                              htmlFor={`category-${cat}`}
                              className="ml-2 text-sm text-gray-900"
                            >
                              {cat}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Subcategories Filter */}
                  <div className="mb-6 border-b border-primary/30 pb-6">
                    <button
                      onClick={() => toggleExpandFilter("subcategories")}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                    >
                      <span>T-Shirt Types</span>
                      {expandedFilters.subcategories ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {expandedFilters.subcategories && (
                      <div className="space-y-2">
                        {subcategories.map((subcat) => (
                          <div key={subcat} className="flex items-center">
                            <input
                              id={`subcat-${subcat}`}
                              type="checkbox"
                              checked={filters.subcategories.includes(subcat)}
                              onChange={() =>
                                toggleFilter("subcategories", subcat)
                              }
                              className="h-4 w-4 text-gray-900 focus:ring-primary border-primary rounded"
                            />
                            <label
                              htmlFor={`subcat-${subcat}`}
                              className="ml-2 text-sm text-gray-900"
                            >
                              {subcat}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6 border-b border-primary/30 pb-6">
                    <button
                      onClick={() => toggleExpandFilter("price")}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                    >
                      <span>Price Range</span>
                      {expandedFilters.price ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {expandedFilters.price && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-900">
                            ₹{filters.priceRange[0]}
                          </span>
                          <span className="text-sm text-gray-900">
                            ₹{filters.priceRange[1]}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="2000"
                          step="100"
                          value={filters.priceRange[1]}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              priceRange: [
                                prev.priceRange[0],
                                Number.parseInt(e.target.value),
                              ],
                            }))
                          }
                          className="w-full h-2 bg-primary/30 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    )}
                  </div>

                  {/* Additional Filters */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">
                      Additional Filters
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="filter-sale"
                          type="checkbox"
                          checked={filters.onSale}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              onSale: !prev.onSale,
                            }))
                          }
                          className="h-4 w-4 text-gray-900 focus:ring-primary border-primary rounded"
                        />
                        <label
                          htmlFor="filter-sale"
                          className="ml-2 text-sm text-gray-900"
                        >
                          On Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-new"
                          type="checkbox"
                          checked={filters.newArrivals}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              newArrivals: !prev.newArrivals,
                            }))
                          }
                          className="h-4 w-4 text-gray-900 focus:ring-primary border-primary rounded"
                        />
                        <label
                          htmlFor="filter-new"
                          className="ml-2 text-sm text-gray-900"
                        >
                          New Arrivals
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filter Sidebar */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 overflow-hidden">
                <div
                  className="absolute inset-0 bg-background bg-opacity-75 transition-opacity backdrop-blur-sm"
                  onClick={() => setIsMobileFilterOpen(false)}
                ></div>
                <div className="fixed inset-y-0 right-0 max-w-full flex">
                  <div className="relative w-screen max-w-md">
                    <div className="h-full flex flex-col bg-gradient-to-b from-background to-primary shadow-xl overflow-y-scroll">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-primary/30">
                        <h2
                          className="text-lg font-medium text-primary"
                          style={{
                            textShadow: "0 0 5px rgba(0, 191, 255, 0.7)",
                          }}
                        >
                          Filters
                        </h2>
                        <button
                          type="button"
                          className="text-primary hover:text-primary"
                          onClick={() => setIsMobileFilterOpen(false)}
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <div className="p-4">
                        {/* Sort By */}
                        <div className="mb-6 border-b border-primary/30 pb-6">
                          <h3 className="font-medium text-primary mb-3">
                            Sort By
                          </h3>
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="block w-full py-2 px-3 border border-primary/50 bg-background/30 text-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary backdrop-blur-sm"
                          >
                            <option value="featured">Featured</option>
                            <option value="price-low-high">
                              Price: Low to High
                            </option>
                            <option value="price-high-low">
                              Price: High to Low
                            </option>
                            <option value="rating">Highest Rated</option>
                            <option value="newest">Newest First</option>
                          </select>
                        </div>

                        {/* Categories Filter */}
                        <div className="mb-6 border-b border-primary/30 pb-6">
                          <h3 className="font-medium text-primary mb-3">
                            Categories
                          </h3>
                          <div className="space-y-2">
                            {categories.map((cat) => (
                              <div key={cat} className="flex items-center">
                                <input
                                  id={`mobile-category-${cat}`}
                                  type="checkbox"
                                  checked={filters.categories.includes(cat)}
                                  onChange={() =>
                                    toggleFilter("categories", cat)
                                  }
                                  className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
                                />
                                <label
                                  htmlFor={`mobile-category-${cat}`}
                                  className="ml-2 text-sm text-primary"
                                >
                                  {cat}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Subcategories Filter */}
                        <div className="mb-6 border-b border-primary/30 pb-6">
                          <h3 className="font-medium text-primary mb-3">
                            T-Shirt Types
                          </h3>
                          <div className="space-y-2">
                            {subcategories.map((subcat) => (
                              <div key={subcat} className="flex items-center">
                                <input
                                  id={`mobile-subcat-${subcat}`}
                                  type="checkbox"
                                  checked={filters.subcategories.includes(
                                    subcat
                                  )}
                                  onChange={() =>
                                    toggleFilter("subcategories", subcat)
                                  }
                                  className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
                                />
                                <label
                                  htmlFor={`mobile-subcat-${subcat}`}
                                  className="ml-2 text-sm text-primary"
                                >
                                  {subcat}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Additional Filters */}
                        <div className="mb-6 border-b border-primary/30 pb-6">
                          <h3 className="font-medium text-primary mb-3">
                            Additional Filters
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                id="mobile-filter-sale"
                                type="checkbox"
                                checked={filters.onSale}
                                onChange={() =>
                                  setFilters((prev) => ({
                                    ...prev,
                                    onSale: !prev.onSale,
                                  }))
                                }
                                className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
                              />
                              <label
                                htmlFor="mobile-filter-sale"
                                className="ml-2 text-sm text-primary"
                              >
                                On Sale
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="mobile-filter-new"
                                type="checkbox"
                                checked={filters.newArrivals}
                                onChange={() =>
                                  setFilters((prev) => ({
                                    ...prev,
                                    newArrivals: !prev.newArrivals,
                                  }))
                                }
                                className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
                              />
                              <label
                                htmlFor="mobile-filter-new"
                                className="ml-2 text-sm text-primary"
                              >
                                New Arrivals
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={clearFilters}
                            className="flex-1 py-2 px-4 border border-primary/50 rounded-md text-sm font-medium text-primary hover:bg-primary/20 backdrop-blur-sm"
                          >
                            Clear All
                          </button>
                          <button
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="flex-1 bg-primary/30 py-2 px-4 border border-primary/50 rounded-md text-sm font-medium text-primary hover:bg-primary/50 shadow-[0_0_10px_rgba(0,191,255,0.3)]"
                          >
                            Apply Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {/* Sort and Results Count - Desktop */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <p className="text-sm text-primary">
                  Showing{" "}
                  <span className="font-medium">{sortedProducts.length}</span>{" "}
                  results
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-900 mr-2">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="py-1 px-2 border border-primary/50 bg-background/30 text-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm backdrop-blur-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(filters.categories.length > 0 ||
                filters.subcategories.length > 0 ||
                filters.onSale ||
                filters.newArrivals) && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-primary mb-2">
                    Active Filters:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.categories.map((cat) => (
                      <button
                        key={`filter-${cat}`}
                        onClick={() => toggleFilter("categories", cat)}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm"
                      >
                        {cat} <X size={14} className="ml-1" />
                      </button>
                    ))}
                    {filters.subcategories.map((subcat) => (
                      <button
                        key={`filter-${subcat}`}
                        onClick={() => toggleFilter("subcategories", subcat)}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm"
                      >
                        {subcat} <X size={14} className="ml-1" />
                      </button>
                    ))}
                    {filters.onSale && (
                      <button
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, onSale: false }))
                        }
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm"
                      >
                        On Sale <X size={14} className="ml-1" />
                      </button>
                    )}
                    {filters.newArrivals && (
                      <button
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            newArrivals: false,
                          }))
                        }
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm"
                      >
                        New Arrivals <X size={14} className="ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Products */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-background/40 backdrop-blur-md rounded-lg border border-primary/50 shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                  <h3 className="text-lg font-medium text-primary mb-2">
                    No products found
                  </h3>
                  <p className="text-primary/70 mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center px-4 py-2 border border-primary/50 rounded-md shadow-sm text-sm font-medium text-primary bg-primary/30 hover:bg-primary/50 shadow-[0_0_10px_rgba(0,191,255,0.3)]"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {sortedProducts.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center">
                    <button className="px-2 py-1 border border-primary/50 rounded-l-md text-sm font-medium text-primary hover:bg-primary/30 backdrop-blur-sm">
                      Previous
                    </button>
                    <button className="px-3 py-1 border-t border-b border-primary/50 text-sm font-medium text-primary bg-primary/50">
                      1
                    </button>
                    <button className="px-3 py-1 border-t border-b border-primary/50 text-sm font-medium text-primary hover:bg-primary/30 backdrop-blur-sm">
                      2
                    </button>
                    <button className="px-3 py-1 border-t border-b border-primary/50 text-sm font-medium text-primary hover:bg-primary/30 backdrop-blur-sm">
                      3
                    </button>
                    <button className="px-2 py-1 border border-primary/50 rounded-r-md text-sm font-medium text-primary hover:bg-primary/30 backdrop-blur-sm">
                      Next
                    </button>
                  </nav>
                </div>
              )}
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
        `}</style>
      </div>
    </MainLayout>
  );
};

export default ProductListingPage;
