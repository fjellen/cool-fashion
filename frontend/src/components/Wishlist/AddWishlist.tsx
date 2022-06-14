import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { strapiClient } from "../../utils/strapiClient";
import { FaRegHeart } from "react-icons/fa";
import { info } from "console";

type cardProps = {
  item: {
    attributes: {
      brandLogo: {
        data: [
          {
            attributes: {
              url: string;
            };
          }
        ];
      };
      title: string;
      desc: string;
      slug: string;
      type: string;
      image: {
        data: [
          {
            attributes: {
              url: string;
            };
          }
        ];
      };
      price: number;
    };
  };
};

const AddWishlist = (wishlistItem: cardProps) => {
  const context = useContext(userContext);
  const handleWishlist = async () => {
    if (context?.loggedIn) {
      const response: any = await strapiClient("/api/wishlists", "POST", {
        data: {
          title: wishlistItem.item.attributes.title,
          desc: wishlistItem.item.attributes.desc,
          image: wishlistItem.item.attributes.image.data[0].attributes.url,
          brandLogo: null,
          price: wishlistItem.item.attributes.price,
          slug: wishlistItem.item.attributes.slug,
          users_permissions_user: {
            id: context?.loggedInUser?.id,
          },
        },
      });
    } else {
      alert("You cannot add items to your wishlist. Please login.");
    }
  };
  return (
    <>
      <FaRegHeart
        style={{ cursor: "pointer", fontSize: "25px", marginRight: "10px" }}
        onClick={handleWishlist}
      />
    </>
  );
};

export default AddWishlist;
