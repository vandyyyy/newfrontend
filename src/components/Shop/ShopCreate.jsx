import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePrepareContractWrite,useContractWrite } from "wagmi";
import { abi } from "../abi/vendor"
 //import firebase from "firebase/app"
// import "firebase/database"
// import { getDatabase } from "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set } from "firebase/database";

const ShopCreate = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [price,setPrice] = useState("");
  const [stock, setStock] = useState("");

  const { config,error } = usePrepareContractWrite({
    address: "0x5fDf5B9cc9369e0Ec9daA749eabe4fA151D7e8B2",
    abi: abi,
    functionName: "listProduct",
    args: [title,desc,price,stock],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedImage);
    write?.();
  };

  const postData = async(e) => {
    e.preventDefault();
    console.log(selectedImage);
  
    // Create a reference to the Firebase database
    // const database = firebase.database();
    // const databaseRef = ref(database, "products");
  
    // Create a new "products" node in the database and generate a unique key for the new product
    // const productRef = database.ref("products").push();
  
    // Set the product data in the newly generated key
    // productRef.set({
    //   title: title,
    //   description: desc,
    //   price: price,
    //   stock: stock,
    // })
    //   .then(() => {
    //     console.log("Product data saved successfully.");
    //     // Perform any necessary navigation or display success message
    //   })
    //   .catch((error) => {
    //     console.log("Error saving product data: ", error);
    //     // Display error message or handle the error
    //   });
    // set(databaseRef, {
    //   title: title,
    //   description: desc,
    //   price: price,
    //   stock: stock,
    // })
    // .then(() => {
    //   console.log("Product data saved successfully.");
    //   // Perform any necessary navigation or display success message
    // })
    // .catch((error) => {
    //   console.log("Error saving product data: ", error);
    //   // Display error message or handle the error
    // });
    
  };
  

  useEffect(()=>{
    if(isLoading){
      console.log("Loading");
    }
    if(isSuccess){
      console.log("Success");
      console.log(data);
    }
  },[isLoading,isSuccess,data])

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
         Upload your product
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" method="POST" onSubmit={postData}>

          <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Product Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
             
            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Earlier Product description
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="description"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                 Product description
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="description"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
  <label htmlFor="imageInput" className="block text-sm font-medium text-gray-700">
    Product Image
  </label>
  <div className="mt-1">
    <input
      id="imageInput"
      type="file"
      accept="image/*"
      onChange={(e) => setSelectedImage(e.target.files[0])}
      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
               Price
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="price"
                  autoComplete="email"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Stock available
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="stock"
                  required
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

          
            {/* <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>*/}

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
           {/* <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/shop-login" className="text-blue-600 pl-2">
                Sign in
              </Link>
            </div>*/}
          </form>
        </div>
      </div>
    </div>
  );
};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCCOJ8sCELKAuvilCH6Tip4A6W1usiDRms",
//   authDomain: "omega-cider-326514.firebaseapp.com",
//   projectId: "omega-cider-326514",
//   storageBucket: "omega-cider-326514.appspot.com",
//   messagingSenderId: "1037221820616",
//   appId: "1:1037221820616:web:f6d4671c031dddfe3c0dfd",
//   measurementId: "G-M4FMPVE6YL"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLvV_xuyRgX5pI0Bgl32WEfwH9SHONtKE",
  authDomain: "cybranex-65fc0.firebaseapp.com",
  databaseURL: "https://cybranex-65fc0-default-rtdb.firebaseio.com",
  projectId: "cybranex-65fc0",
  storageBucket: "cybranex-65fc0.appspot.com",
  messagingSenderId: "316557414028",
  appId: "1:316557414028:web:8c97d8072b7498a09475a9",
  measurementId: "G-14XFY7HJ5D"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase();

export default ShopCreate;
