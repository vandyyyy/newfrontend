// import React from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// // const FeaturedProduct = () => {
// //   const {allProducts} = useSelector((state) => state.products)
// import React, { useEffect } from 'react';
// import firebase from './firebase';

// const FeaturedProduct = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const productsRef = db.collection('products');
//       const snapshot = await productsRef.get();

//       snapshot.forEach((doc) => {
//         console.log(doc.id, '=>', doc.data());
//       });
//     };

//     fetchData();
//   }, []);

//   return <div>Product List</div>;
// };

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
// import React, { useEffect, useState } from "react";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
// import axios from "axios";

// const FeaturedProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://stagingaccount.xoxoday.com/chef/v1/oauth/api");
//         setAllProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div style={{ color: 'white' }} >Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1 style={{ color: 'white' }}>Featured Products</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {allProducts &&
//             allProducts.map((product, index) => (
//               <ProductCard data={product} key={index} />
//             ))}
//         </div>
//       </div>
//     </div>
//  );
// };

// export default FeaturedProduct;

// import React, { useState } from "react";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
// import { app } from '../../../firebaseconfig';
// import 'firebase/firestore';
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
// // import Navbar from '../../Layout/Navbar'
// const db = getFirestore(app);
// function FeaturedProduct() {
//   const [info, setInfo] = useState([]);

//   window.addEventListener('load', () => {
//     fetchdata();
//   });
//   const newData = [];
//   async function fetchdata() {
//     const querysnapshot = await getDocs(collection(db, "vouchers"));
//     querysnapshot.forEach((snapshot) => {
//       newData.push(JSON.parse(JSON.stringify(snapshot.data())));
//     });
//     // console.log(newData);
//     setInfo(newData);
//   }
//   return (
//     <div>
//        {/* <Navbar active={4} />  */}
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1 style={{ color: "white" }}>Featured Vouchers</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//         {info &&
//             info.slice(2,22).map((product, index) => (
//               <ProductCard data={product} key={index} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );

// }
// export default FeaturedProduct;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
// import { app } from "../../../firebaseconfig";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

// const db = getFirestore(app);
// function FeaturedProduct() {
//   const [open, setOpen] = useState(false);
//   const [info, setInfo] = useState([]);

//   window.addEventListener("load", () => {
//     fetchdata();
//   });

//   const fetchdata = async () => {
//     const querySnapshot = await getDocs(collection(db, "vouchers"));
//     const newData = querySnapshot.docs.map((doc) => doc.data());
//     setInfo(newData);
//   };

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1 style={{ color: "white" }}>Featured Vouchers</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {info &&
//             info.slice(2, 22).map((product, index) => (
//               <Link to={`/product/${product.productId}`} key={index}>
//                 <ProductCard data={product} />
//               </Link>
//             ))}
//         </div>
//       </div>
//       {open && (
//         <ProductDetailsCard setOpen={setOpen} data={info[0]} />
//       )}
//     </div>
//   );
// }
// export default FeaturedProduct;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { app } from "../../../firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { useNavigate } from "react-router-dom";
import ProductDisplayPage from "./ProductDisplayPage";
const db = getFirestore(app);
function FeaturedProduct() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  window.addEventListener("load", () => {
    fetchdata();
  });

  const fetchdata = async () => {
    const querySnapshot = await getDocs(collection(db, "vouchers"));
    const newData = querySnapshot.docs.map((doc) => doc.data());
    setInfo(newData);
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 style={{ color: "white" }}>Featured Vouchers</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {info &&
            info.slice(2, 22).map((product, index) => (
              // Use onClick to handle navigation when the product card is clicked
              <div>
                <Link to={"product/gift"}>
                  <ProductCard data={product} />
                </Link>
              </div>
            ))}
        </div>
      </div>
      {open && <ProductDetailsCard setOpen={setOpen} data={info[0]} />}
    </div>
  );
}
export default FeaturedProduct;
