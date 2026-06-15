import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl">
        Product not found
      </div>
    );
  }

  // ✅ Similar Products
  const similarProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="bg-base-100 min-h-screen p-10">

      {/* PRODUCT DETAILS */}
      <div className="card lg:card-side bg-base-200 shadow-xl p-6">

        {/* IMAGE */}
        <figure className="lg:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[350px] object-contain"
          />
        </figure>

        {/* DETAILS */}
        <div className="card-body lg:w-1/2">

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-lg text-gray-400">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mt-4">

            <span className="text-3xl font-bold text-primary">
              ${product.price}
            </span>

            <div className="badge badge-warning">
              ⭐ {product.rating}
            </div>

          </div>

          <div className="mt-4">
            <span className="badge badge-secondary">
              {product.category}
            </span>
          </div>

          {/* BUTTONS */}
          <div className="card-actions mt-6">

            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-warning"
            >
              Add to Cart
            </button>

            <button className="btn btn-success">
              Buy Now
            </button>

          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div className="mt-20">

        <h2 className="text-4xl font-bold mb-10">
          Similar Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {similarProducts.map((item) => (
            <div
              key={item.id}
              className="card bg-base-200 shadow-xl hover:scale-105 transition duration-300"
            >

              {/* IMAGE */}
              <figure
                onClick={() => navigate(`/product/${item.id}`)}
                className="cursor-pointer p-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-48 object-contain"
                />
              </figure>

              {/* BODY */}
              <div className="card-body">

                <h2 className="card-title text-lg">
                  {item.title.slice(0, 40)}...
                </h2>

                <p className="text-primary font-bold">
                  ${item.price}
                </p>

                <p className="text-warning">
                  ⭐ {item.rating}
                </p>

                {/* BUTTON */}
                <div className="card-actions justify-end">

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-warning btn-sm"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;

