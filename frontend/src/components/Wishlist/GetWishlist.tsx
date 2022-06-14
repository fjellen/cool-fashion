import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";

type wishlistItem = {
  data: [
    {
      brandLogo: string;
      desc: string;
      image: string;
      price: number;
      title: string;
    }
  ];
};

const GetWishlist = (props: wishlistItem, []) => {
  const context = useContext(userContext);
  console.log(context?.loggedInUser?.id);
  console.log(props);
  return <div></div>;
};

export default GetWishlist;
