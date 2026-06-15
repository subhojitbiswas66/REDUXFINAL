import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  // ✅ Toast message state
  const [message, setMessage] = useState("");

  const observer = useRef();
  const limit = 8;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Fetch products
  const fetchProducts = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      if (data.products.length === 0) {
        setLoading(false);
        return;
      }

      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + limit);
    } catch (error) {
      console.error("Error fetching products:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Infinite scroll
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchProducts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  // ✅ Handle Add to Cart
  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    dispatch(addToCart(product));

    // 🔔 Show toast
    setMessage(`${product.title} added to cart ✅`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white px-10 py-20 min-h-screen">

      {/* ✅ Toast UI */}
      {message && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {message}
        </div>
      )}

      <h2 className="text-4xl font-bold text-center mb-12">
        🛍 All Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => {
          const isLast = products.length === index + 1;

          return (
            <div
              ref={isLast ? lastProductRef : null}
              key={product.id}
              className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition duration-300 flex flex-col"
            >
              {/* CLICKABLE AREA */}
              <div
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                  className="h-40 w-full object-contain bg-white rounded-xl mb-4"
                />

                <h3 className="text-lg font-semibold mb-2">
                  {product.title.slice(0, 40)}...
                </h3>

                <p className="text-green-400 font-bold">
                  ${product.price}
                </p>

                <p className="text-yellow-400 text-sm mb-3">
                  ⭐ {product.rating}
                </p>
              </div>

              {/* ✅ ADD TO CART BUTTON */}
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="mt-auto bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-400 w-full font-semibold"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-10 text-gray-400">
          Loading more products...
        </p>
      )}
    </div>
  );
};

export default Products;