import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  usePrepareContractWrite,
  useContractWrite,
  useAccount,
  useContractEvent,
} from "wagmi";
import { abi } from "../abi/vendor";
import { Alert, Snackbar } from "@mui/material";

const ShopCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [success, setSuccess] = useState(false);
  const [productKey, setProductKey] = useState(null);

  const { isConnected } = useAccount();
  useContractEvent({
    address: "0x5fDf5B9cc9369e0Ec9daA749eabe4fA151D7e8B2",
    abi: abi,
    eventName: "listedProduct",
    listener(_vendor, _title, _key) {
      setProductKey(_key);
    },
  });

  const { config, error } = usePrepareContractWrite({
    address: "0x5fDf5B9cc9369e0Ec9daA749eabe4fA151D7e8B2",
    abi: abi,
    functionName: "listProduct",
    args: [title, desc, price, stock],
  });
  

<<<<<<< HEAD
  const { data, isLoading, isSuccess, write } = useContractWrite(config)
  const [selectedImage, setSelectedImage] = useState(null);
=======
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
>>>>>>> refs/remotes/origin/new_branch

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedImage);

    write?.();
  };

  function successClose() {
    setSuccess(false);
  }

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-black-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
         Upload your product
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>

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

           {/*  <div>
             <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="zipcode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                /> 
              </div>
            </div>*/}

           {/* <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>*/}
          
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
=======
  const shopBody = () => {
    if (isConnected) {
      return (
        <div className="min-h-screen bg-black-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Upload your product
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
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
>>>>>>> refs/remotes/origin/new_branch
                    />
                  </div>
                </div>

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
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    className="sr-only"
                  />
                </label>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <Snackbar
                autoHideDuration={3000}
                open={success}
                onClose={successClose}
              >
                <Alert severity="success">Succesfully listed</Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-white flex flex-col items-center m-20">
          Please connect your wallet to continue
        </div>
      );
    }
  };

  useEffect(() => {
    if (isLoading) {
      console.log("Loading");
    }
    if (isSuccess) {
      setSuccess(true);
    }
  }, [isLoading, isSuccess, data]);

  return <div className="">{shopBody()}</div>;
};

export default ShopCreate;
