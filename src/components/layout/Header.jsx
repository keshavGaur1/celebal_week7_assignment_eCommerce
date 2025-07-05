"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const createShootingStar = () => {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting-star");

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * 100;
      const length = Math.random() * 50 + 30;
      const duration = Math.random() * 1500 + 500;
      const angle = Math.random() * 20 + 35;

      shootingStar.style.left = `${startX}px`;
      shootingStar.style.top = `${startY}px`;
      shootingStar.style.width = `${length}px`;
      shootingStar.style.transformOrigin = "left";
      shootingStar.style.transform = `rotate(${angle}deg)`;
      shootingStar.style.animationDuration = `${duration}ms`;

      document.getElementById("starry-bg").appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, duration);
    };

    const createPulsatingStar = () => {
      const star = document.createElement("div");
      star.classList.add("pulsating-star");

      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * 150;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 3000 + 2000;
      const delay = Math.random() * 2000;

      star.style.left = `${posX}px`;
      star.style.top = `${posY}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${duration}ms`;
      star.style.animationDelay = `${delay}ms`;

      document.getElementById("starry-bg").appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 30000);
    };

    const createGlowingStar = () => {
      const star = document.createElement("div");
      star.classList.add("glowing-star");

      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * 150;
      const size = Math.random() * 4 + 2;
      const intensity = Math.random() * 0.7 + 0.3;
      const duration = Math.random() * 5000 + 3000;
      const hue = Math.random() > 0.7 ? 220 : 240;

      star.style.left = `${posX}px`;
      star.style.top = `${posY}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = `hsla(${hue}, 100%, 80%, ${intensity})`;
      star.style.boxShadow = `0 0 ${
        size * 2
      }px ${size}px hsla(${hue}, 100%, 70%, ${intensity * 0.5})`;
      star.style.animationDuration = `${duration}ms`;

      document.getElementById("starry-bg").appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 30000);
    };

    for (let i = 0; i < 15; i++) {
      createPulsatingStar();
      if (i % 3 === 0) createGlowingStar();
    }

    const shootingStarInterval = setInterval(createShootingStar, 2000);
    const pulsatingStarInterval = setInterval(createPulsatingStar, 3000);
    const glowingStarInterval = setInterval(createGlowingStar, 5000);

    return () => {
      clearInterval(shootingStarInterval);
      clearInterval(pulsatingStarInterval);
      clearInterval(glowingStarInterval);
    };
  }, []);

  return (
    <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col bg-background border-r border-secondary z-50 shadow-lg relative">
      {/* Starry Background for sidebar */}
      <div
        id="starry-bg"
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ overflow: "hidden" }}
      ></div>
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-secondary">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary font-comic relative">
            Shopify
            <span className="absolute inset-0 blur-sm text-accent opacity-70 animate-pulse">
              Shopify
            </span>
          </span>
        </Link>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-8 px-6">
        {["Home", "Shop", "Men", "Women", "About"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-primary hover:text-accent transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary"
          >
            {item}
          </Link>
        ))}
      </nav>
      {/* Icons and Auth */}
      <div className="flex flex-col gap-4 mt-auto mb-8 px-6">
        <div className="flex gap-4 justify-center mb-4">
          <Link
            to="/wishlist"
            className="text-primary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <Heart size={24} />
          </Link>
          <Link
            to="/cart"
            className="text-primary hover:text-accent transition-all duration-300 transform hover:scale-110 relative"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-accent text-background rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-[0_0_5px_rgba(0,191,255,0.5)]">
              3
            </span>
          </Link>
          <Link
            to="/profile"
            className="text-primary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <User size={24} />
          </Link>
        </div>
        <Link
          to="/login"
          className="text-sm bg-accent text-white px-3 py-2 rounded-lg border border-accent hover:bg-accent/80 transition-all shadow"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="text-sm bg-accent text-white px-3 py-2 rounded-lg border border-accent hover:bg-accent/80 transition-all shadow"
        >
          Sign Up
        </Link>
      </div>
      {/* Mobile menu remains as overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-md p-4 border-t border-accent animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {["Home", "Shop", "Men", "Women", "About"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-primary hover:text-accent transition-colors font-medium py-2 border-b border-accent/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/signin"
              className="text-sm bg-accent text-white px-3 py-2 rounded-lg border border-accent hover:bg-accent/80 transition-all shadow"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-sm bg-accent text-white px-3 py-2 rounded-lg border border-accent hover:bg-accent/80 transition-all shadow"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
            <div className="flex items-center bg-background/50 rounded-full px-4 py-2 border border-accent/50 shadow-[0_0_8px_rgba(0,191,255,0.3)]">
              <input
                type="text"
                placeholder="Search for superhero tees..."
                className="bg-transparent text-primary placeholder-accent focus:outline-none w-full"
              />
              <Search
                className="text-accent ml-2 hover:text-accent/40 transition-colors cursor-pointer"
                size={20}
              />
            </div>
          </nav>
        </div>
      )}
    </aside>
  );
}
