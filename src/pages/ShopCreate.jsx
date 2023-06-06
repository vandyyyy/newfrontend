import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate";
import ShopCreate2 from "../components/Shop/ShopCreate2";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
  return (
    <div className="flex">
    <div className="flex-1">
      <ShopCreate />
    </div>
    <div className="flex-1">
      <ShopCreate2 />
    </div>
  </div>
  )
}

export default ShopCreatePage