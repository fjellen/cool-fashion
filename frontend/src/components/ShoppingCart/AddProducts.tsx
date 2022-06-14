import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { strapiClient } from "../../utils/strapiClient";
import { FaCartArrowDown } from "react-icons/fa";

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

const AddProducts = (productItem: cardProps) => {
  const context = useContext(userContext);
  const handleAddProducts = async () => {
    const response: any = await strapiClient("/api/shoppingcarts", "POST", {
      data: {
        title: productItem.item.attributes.title,
        desc: productItem.item.attributes.desc,
        image: productItem.item.attributes.image.data[0].attributes.url,
        brandLogo: null,
        price: productItem.item.attributes.price,
        slug: productItem.item.attributes.slug,
        users_permissions_user: {
          id: context?.loggedInUser?.id,
        },
      },
    });
  };
  return (
    <>
      <svg
        style={{
          height: "32px",
          width: "29px",
          bottom: "1.5rem",
          cursor: "pointer",
        }}
        onClick={handleAddProducts}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
      </svg>
    </>
  );
};

export default AddProducts;
