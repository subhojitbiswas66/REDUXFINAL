import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: products, loading } = useSelector(
    (state) => state.products
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayProducts = filteredProducts.slice(0, 8);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen">

      {/* HERO */}
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">

            <h1 className="text-5xl font-bold">
              Discover Amazing Products
            </h1>

            <p className="py-6">
              Modern shopping experience using React Redux Toolkit and DaisyUI.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="btn btn-primary"
            >
              Shop Now
            </button>

          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center py-10">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 pb-20">

        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="card bg-base-200 shadow-xl hover:scale-105 transition"
          >

            <figure
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer p-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 object-contain"
              />
            </figure>

            <div className="card-body">

              <h2 className="card-title">
                {product.title.slice(0, 30)}
              </h2>

              <p className="text-primary font-bold">
                ${product.price}
              </p>

              <div className="card-actions justify-end">

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-warning"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;