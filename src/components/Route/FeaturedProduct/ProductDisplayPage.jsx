// import React, { useEffect } from "react";

// const ProductDisplayPage = () => {
//   // Sample product data
//   const product = {
//     name: "Example Product",
//     price: "$19.99",
//     description: "This is a sample product description.",
//     imageUrl:
//       "https://img.freepik.com/free-vector/gift-card-template_23-2147503047.jpg?w=2000",
//   };

//   return (
//     <div className="product-display">
//       <div className="text-white">
//         <h2>{product.name}</h2>
//         <p>{product.price}</p>
//         <p>{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplayPage;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
// import { app } from "../../../firebaseconfig";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
// import { useNavigate } from "react-router-dom";

// const db = getFirestore(app);
// function ProductDisplayPage() {
//   const [open, setOpen] = useState(false);
//   const [product, setProduct] = useState(null); // State to hold the fetched product
//   const navigate = useNavigate();
//   // const [open, setOpen] = useState(false);
//   // const [info, setInfo] = useState([]);
//   // const navigate = useNavigate();
//   useEffect(() => {
//     fetchProduct(); // Fetch the product when the component mounts
//   }, []);
//   window.addEventListener("load", () => {
//     fetchdata();
//   });
//   const fetchProduct = async () => {
//     const querySnapshot = await getDocs(collection(db, "vouchers"));
//     const products = querySnapshot.docs.map((doc) => doc.data());

//     if (products.length > 0) {
//       setProduct(products[0]); // Set the first product as the current product
//     }
//   };

//   // const fetchdata = async () => {
//   //   const querySnapshot = await getDocs(collection(db, "vouchers"));
//   //   const newData = querySnapshot.docs.map((doc) => doc.data());
//   //   // setInfo(newData);
//   //   if (products.length > 0) {
//   //     setProduct(products[0]); // Set the first product as the current product
//   //   }
//   // };

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1 style={{ color: "white" }}>Featured Vouchers</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//         {product && ( // Render the ProductCard if a product is available
//             <div>
//               <Link to={"product/gift"}>
//                 <ProductCard data={product} />
//               </Link>
//             </div>
//           )}
//           {/* {info &&
//             info.slice(2, 22).map((product, index) => (
//               // Use onClick to handle navigation when the product card is clicked
//               <div>
//                 <Link to={"product/gift"}>
//                   <ProductCard data={product} />
//                 </Link>
//               </div>
//             ))} */}
//         </div>
//       </div>
//       {open && <ProductDetailsCard setOpen={setOpen} data={info[0]} />}
//     </div>
//   );
// }
//  export default ProductDisplayPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { app } from "../../../firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

function ProductDisplayPage() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null); // State to hold the fetched product
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(); // Fetch the product when the component mounts
  }, []);

  const fetchProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "vouchers"));
    const products = querySnapshot.docs.map((doc) => doc.data());

    if (products.length > 0) {
      setProduct(products[3]); // Set the first product as the current product
    }
  };

  return (
  
      <div className="white-bg">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 style={{ color: "white" }}>Featured Vouchers</h1>
        </div>
        <div className="as">
          {product && ( // Render the ProductCard if a product is available
            <div>
              <Link to={"product/gift"}>
                <ProductCard data={product} />
              </Link>
            </div>
          )}
        </div>
      </div>
      {open && <ProductDetailsCard setOpen={setOpen} data={product} />}
    </div>
  );
}

export default ProductDisplayPage;
