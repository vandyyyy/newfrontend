// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// const FeaturedProduct = () => {
//   const {allProducts} = useSelector((state) => state.products);
   
//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Featured Products</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {allProducts &&
//             allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;
import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const FeaturedProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://stagingaccount.xoxoday.com/chef/v1/oauth/api"); // Replace "your-api-endpoint" with the actual API endpoint
        setAllProducts(response.data); // Assuming the response data is an array of products
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ color: 'white' }} >Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 style={{ color: 'white' }}>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts &&
            allProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

