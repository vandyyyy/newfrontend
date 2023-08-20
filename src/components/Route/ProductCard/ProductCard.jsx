import React, { useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { backend_url } from "../../../server";
import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ( data ) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(data);
  const d = data.data.name;
  const product_name = d.replace(/\s+/g, "-");
  
  return (
    <>
      <div className="w-full h-[370px] bg-black rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={`${data.data.imageUrl}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.data.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.data.name.length > 40 ? data.data.name.slice(0, 40) + "..." : data.data.name}
          </h4>

          {/* <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiOutlineStar
              size={20}
              className="mr-2 cursor-pointer"
              color="#F6BA00"
            />
          </div> */}

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.data.discount === 0 ? data.data.discount : data.data.discount}$
              </h5>
              <h4 className={`${styles.price}`}>
                {data.data.discount ? data.data.discount + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#9393b8]">
              {data.data.valueDenominations.length > 8 ? data.data.valueDenominations.slice(0, 8) + "..." : data.data.valueDenominations}
            </span>
            {/* <p className="font-[400] text-[17px] text-[#68d284]">
              {data.data.description.length > 8 ? data.data.description.slice(0, 8) + "..." : data.data.description}
            </p> */}
          </div>
        </Link>
        <p className="font-[400] text-[17px] text-[#9393b8]">
              {data.data.description.length > 1000 ? data.data.description.slice(0, 1000) + "..." : data.data.description}
            </p>
            <h4 className="font-[4000] text-[32px] text-[#51b37e]">Product ID</h4>
            <p className="font-[400] text-[17px] text-[#9393b8]">
              {data.data.productId.length > 1000 ? data.data.productId.slice(0, 1000) + "..." : data.data.productId}
            </p>
          {/* side options */}
          <div>
            {click ? (
              <AiFillHeart
                size={22}
                className="cursor-pointer absolute right-2 top-5"
                onClick={() => setClick(!click)}
                color={click ? "red" : "#333"}
                title="Remove from wishlist"
              />
            ) : (
              <AiOutlineHeart
                size={22}
                className="cursor-pointer absolute right-2 top-5"
                onClick={() => setClick(!click)}
                color={click ? "red" : "#333"}
                title="Add to wishlist"
              />
            )}
            <AiOutlineEye
                size={22}
                className="cursor-pointer absolute right-2 top-14"
                onClick={() => setOpen(!open)}
                color="#333"
                title="Quick view"
              />
              <AiOutlineShoppingCart
               size={25}
               className="cursor-pointer absolute right-2 top-24"
               onClick={() => setOpen(!open)}
               color="#444"
               title="Add to cart"
               />
               {
                open ? (
                    <ProductDetailsCard setOpen={setOpen} data={data} />
                ) : null
               }
          </div>
      </div>
    </>
  );
};

export default ProductCard;
