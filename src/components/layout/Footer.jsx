import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Starry night effect at the top of the footer */}
      <div className="h-8 bg-gradient-to-b from-transparent to-green-950 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-4">
          {/* About */}
          <div className="md:col-span-3">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-300">
              Shopify
            </h3>
            <p className="text-green-200 mb-3 md:mb-4 text-sm md:text-base">
              {/* Your one-stop shop for premium superhero-themed t-shirts and
              merchandise. Bringing comic book magic to your wardrobe! */}
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-300">
              Quick Links
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {[
                "Shop All",
                "New Arrivals",
                "Best Sellers",
                "Discounts",
                "Size Guide",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-green-200 hover:text-green-400 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-300">
              Categories
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {[
                "Marvel Universe",
                "DC Comics",
                "Anime Superheroes",
                "Classic Comics",
                "Sci-Fi & Fantasy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-green-200 hover:text-green-400 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:max-w-xs w-full">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-300">
              Contact Us
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start text-sm md:text-base">
                <MapPin
                  className="text-green-400 mr-2 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-green-200">
                  123 Comic Lane, Superhero City, Universe 616
                </span>
              </li>
              <li className="flex items-center text-sm md:text-base">
                <Phone
                  className="text-green-400 mr-2 flex-shrink-0"
                  size={16}
                />
                <span className="text-green-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm md:text-base">
                <Mail className="text-green-400 mr-2 flex-shrink-0" size={16} />
                <span className="text-green-200">support@starrycomics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 md:mt-12 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-xs md:text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Shopify.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link
              to="#"
              className="text-green-300 text-xs md:text-sm hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-green-300 text-xs md:text-sm hover:text-green-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-green-300 text-xs md:text-sm hover:text-green-400 transition-colors"
            >
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
