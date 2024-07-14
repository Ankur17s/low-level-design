import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  /**
   *  current page   skip     limit
   *      0           0         10
   *      1           10        10
   *      2           20        10
   *      current page * limit = skip
   */
  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${10}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,discountPercentage,thumbnail`
    );
    const data = await response.json();
    setProducts(data.products);
    setNoOfPages(Math.ceil(data.total / LIMIT));
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center flex-wrap">
        {currentPage > 0 && (
          <p
            className="p-2 m-4 border border-black cursor-pointer"
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </p>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <p
            key={pN}
            className={`py-2 px-4 m-4 border border-black cursor-pointer ${
              currentPage === pN && "bg-orange-200"
            }`}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </p>
        ))}

        {currentPage < noOfPages - 1 && (
          <p
            className="p-2 m-4 border border-black cursor-pointer"
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </p>
        )}
      </div>
    </div>
  );
};

export default Pagination;
