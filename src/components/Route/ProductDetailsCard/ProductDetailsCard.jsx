import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import styles from "../../../styles/styles";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
//   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#f0f4f730] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
          
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={`${backend_url}${data.images && data.images[0]}`} alt="" />
                <div className="flex">

                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                  <img
                    src={`${backend_url}${data?.shop?.avatar}`}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
      <h1>Vouchers</h1>
      <h2>Categories</h2>
      <p>Electronics</p>
      <h2>Countries</h2>
      <p>Code: IN</p>
      <p>Name: India</p>
      <h2>Country Code</h2>
      <p>IN</p>
      <h2>Country Name</h2>
      <p>India</p>
      <h2>Currency Code</h2>
      <p>INR</p>
      <h2>Currency Name</h2>
      <p>rupees</p>
      <h2>Delivery Type</h2>
      <p>realtime</p>
      <h2>Description</h2>
      <div dangerouslySetInnerHTML={{ __html: "<p>Croma has always been dedicated towards giving its customers an easy and hassle-free access to best consumer electronics products. Croma Gift Card is a perfect gifting option for your loved ones to choose from categories such as Phones, Camera, Computers, Entertainment, Home Appliances, Kitchen Appliances, Gaming and Accessories.</p>" }} />
      <h2>Discount</h2>
      <p>0</p>
      <h2>Exchange Rate</h2>
      <p>null</p>
      <h2>Expiry and Validity</h2>
      <div dangerouslySetInnerHTML={{ __html: "<p>12 months</p>" }} />
      <h2>Fee</h2>
      <p>0</p>
      <h2>Image URL</h2>
      <img src="https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,h_280,w_420,c_fill/gift_vouchers/php5vVUiv_kipktl.jpg" alt="voucher" />
      <h2>Is Phone Number Mandatory</h2>
      <p>false</p>
      <h2>Last Update Date</h2>
      <p>2023-05-24 06:33:13</p>
      <h2>Max Value</h2>
      <p>0</p>
      <h2>Min Value</h2>
       <p>0</p>
      <h2>Name</h2>
      <p>Croma</p>
      <h2>Order Quantity Limit</h2>
      <p>10</p>
      <h2>Product ID</h2>
      <p>14383</p>
      <h2>Redemption Instructions</h2>
      <div dangerouslySetInnerHTML={{ __html: "<div><ol><li>Visit the outlet near you.</li><li>Before making the purchase confirm about the acceptance of Gift Card at the store.</li><li>Choose the products you would like to buy.</li><li>Show your Gift Card details to the cashier at the time of billing & pay any balance amount by cash or card.</li></ol></div><p>&nbsp;</p>" }} />
      <h2>TAT in Days</h2>
      <p>0</p>
      <h2>Terms and Conditions Instructions</h2>
      <div dangerouslySetInnerHTML={{ __html: "<p>To activate the gift card, please send SMS text as</p>" }} />
      <h2>Usage Type</h2>
      <p>both</p>
      <h2>Value Denominations</h2>
      <p>5000, 4500, 4000, 3500, 3000, 2500, 2000, 1500, 1000, 500, 100, 50</p>
      <h2>Value Type</h2>
      <p>fixed_denomination</p>
    </div>
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      (4.5) Ratings
                    </h5>
                  </div>
                  </Link>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  (50) Sold out
                </h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>

                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? data.originalPrice + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
