import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopCreate from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, []);
  return (
<<<<<<< HEAD
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
=======
    <div>
      <ShopCreate />
    </div>
  );
};
>>>>>>> refs/remotes/origin/new_branch

export default ShopCreatePage;
