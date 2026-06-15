import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        
      
        <div className="h-64 flex justify-center items-center bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-56 object-contain"
          />
        </div>

     
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2">
            {product.name}
          </h2>

          <p className="text-gray-600 text-sm mb-3">
            {product.description}
          </p>

          <p className="text-green-600 font-bold text-lg">
            ${product.price}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
