// // // import React, { useEffect } from "react";
// // // import { useSelector } from "react-redux";
// // // import styles from "../../../styles/styles";
// // // import ProductCard from "../ProductCard/ProductCard";

// // // const FeaturedProduct = () => {
// // //   const {allProducts} = useSelector((state) => state.products);
   
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

// // // export default FeaturedProduct;
// // import React, { useEffect, useState } from "react";
// // import styles from "../../../styles/styles";
// // import ProductCard from "../ProductCard/ProductCard";
// // import axios from "axios";

// // const FeaturedProduct = () => {
// //   const [allProducts, setAllProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("https://stagingaccount.xoxoday.com/chef/v1/oauth/api"); // Replace "your-api-endpoint" with the actual API endpoint
// //         setAllProducts(response.data); // Assuming the response data is an array of products
// //         setLoading(false);
// //       } catch (error) {
// //         setError(error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div style={{ color: 'white' }} >Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <div>
// //       <div className={`${styles.section}`}>
// //         <div className={`${styles.heading}`}>
// //           <h1 style={{ color: 'white' }}>Featured Products</h1>
// //         </div>
// //         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
// //           {allProducts &&
// //             allProducts.map((product, index) => (
// //               <ProductCard data={product} key={index} />
// //             ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedProduct;

// import React, { useEffect, useState } from "react";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
// import firebase from "firebase/app";
// import "firebase/database";
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// const FeaturedProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// //   const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
//     // Initialize Firebase app
   
//     // Add your Firebase app configuration here
//     const firebaseConfig = {
//       apiKey: "AIzaSyBLvV_xuyRgX5pI0Bgl32WEfwH9SHONtKE",
//       authDomain: "cybranex-65fc0.firebaseapp.com",
//       databaseURL: "https://cybranex-65fc0-default-rtdb.firebaseio.com/app/vouchers",
//       projectId: "cybranex-65fc0",
//       storageBucket: "cybranex-65fc0.appspot.com",
//       messagingSenderId: "316557414028",
//       appId: "1:316557414028:web:8c97d8072b7498a09475a9",
//       measurementId: "G-14XFY7HJ5D"
    
//   };

//   firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const snapshot = await database.ref('https://cybranex-65fc0-default-rtdb.firebaseio.com/app/vouchers').once('value');
//       const data = snapshot.val();
//       // Use the data retrieved from the database
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, []);
//   useEffect(() => { 


//     // Create a reference to the "products" collection in the Firebase Realtime Database
//     const productsRef = firebase.database().ref("app");

//     // Fetch products data from the database 
//     productsRef.on("value", (snapshot) => {
//       const productsData = snapshot.val();
//       if (productsData) {
//         const productsArray = Object.values(productsData);
//         setAllProducts(productsArray);
//       }
//       setLoading(false);
//     }, (error) => {
//       setError(error);
//       setLoading(false);
//     });

//     return () => {
//       // Unsubscribe from the database reference when the component is unmounted
//       productsRef.off();
//     };
//   }, []);

//   if (loading) {
//     return <div style={{ color: "white" }}>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1 style={{ color: "white" }}>Featured Products</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {allProducts &&
//             allProducts.map((product, index) => (
//               <ProductCard data={product} key={index} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;

import StartFirebase from '../../../firebaseconfig';
import styles from "../../../styles/styles";
import React from 'react';
import { useState } from 'react';
// import {ref, onValue} from 'firebase/database';
// import firebase from "firebase/app";
import "firebase/database";
import ProductCard from "../ProductCard/ProductCard";
// const firebase = require('firebase');
import 'firebase/firestore';

const db = StartFirebase(); 
// export class FeaturedProduct extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             tableData: []
//         }
//     }
//     componentDidMount(){
//         const dbRef = ref(db, 'vouchers');

//         onValue(dbRef, (snapshot)=>{
//             let records = [];
//             snapshot.forEach(childSnapshot=>{
//                 let keyName = childSnapshot.key;
//                 let data = childSnapshot.val();
//                 records.push({"key":keyName, "data": data});
//                 console.log(data.name);
//             });
//             this.setState({tableData: records});
//         });
//     }
    

//     render(){
//         return (
//             <div>
//               <div className={`${styles.section}`}>
//                 <div className={`${styles.heading}`}>
//                   <h1 style={{ color: "white" }}>Featured Products</h1>
//                 </div>
//                 <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//                   {
//                         this.state.tableData.slice(0, 20).map((data, index) => (
//                       <ProductCard data={data} key={index} />
//                     ))}
//                 </div>
//               </div>
//             </div>
//           );
//     };

// }
// export default FeaturedProduct;

function FeaturedProduct(){
      const [info, setInfo] = useState([]);
      window.addEventListener('load', () => {
        Fetchdata();
      });
      const Fetchdata = () => {
        db.collection("vouchers").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
                // console.log(data.name);
            });
        })
      }

      return (
        <div>
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1 style={{ color: "white" }}>Featured Products</h1>
            </div>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
              {
                  info.slice(0, 20).map((data) => (
                  <ProductCard data={data} />
                ))}
            </div>
          </div>
        </div>
      );

}
export default FeaturedProduct;