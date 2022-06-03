import React, { useRef, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import ProductPreview from "../ProductPreview/ProductPreview";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { NONAME } from "dns";

// type locationProps = {
//  props: propAttributes;
// };

const LinkStyle = {
  textDecoration: "none" as "none",
  color: "black" as "black",
};

const ClothingList = styled.ul`
  list-style-type: none;
  border-right: 1px solid red;
  width: 200px;
  height: 80%;
`;

const SelectionHolder = styled.div`
  display: flex;
`;
const TypeSelector = styled.select`
  width: 7rem;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  border: none;
`;

type locationProps = {
  props: {
    item: {
      attributes: {
        id: number;
        desc: string;
        price: number;
        slug: string;
        title: string;
        type: string;
        brandLogo: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        image: {
          data: [
            {
              attributes: {
                url: string;
              };
            }
          ];
        };
      };
      id: number;
    };
    description: string;
    imgUrl: string;
    slug: string;
    type: string;
  };
};

const ProductDetails = () => {
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  // const { props } = location.state as locationProps;
  const { props } = location.state as locationProps;
  console.log(props.item.attributes.brandLogo.data.attributes.url);

  return (
    <div style={{ marginTop: "100px", display: "flex", minHeight: "75vh" }}>
      <SelectionHolder>
        <ClothingList>
          <li style={{ fontWeight: "bold" }}>
            <Link to="/clothing" style={LinkStyle}>
              ALL PRODUCTS{" "}
            </Link>
          </li>
          <li>
            <Link to="/pants" style={LinkStyle}>
              PANTS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/hoodies" style={LinkStyle}>
              HOODIES
            </Link>
          </li>
          <li>
            <Link to="/accessories" style={LinkStyle}>
              ACCESSORIES
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/shoes" style={LinkStyle}>
              SHOES
            </Link>
          </li>
          <li>
            <Link to="/skateboards" style={LinkStyle}>
              SKATEBOARDS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/brands" style={LinkStyle}>
              BRANDS
            </Link>
          </li>
          <li>
            <Link to="/tshirts" style={LinkStyle}>
              T-SHIRTS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/accessories" style={LinkStyle}>
              ACCESSORIES
            </Link>
          </li>
        </ClothingList>
      </SelectionHolder>
      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <div>
          <ProductPreview {...props} />
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ maxWidth: "500px" }}>
          <h3>{props.item.attributes.title}</h3>
          <ReactMarkdown>{props.item.attributes.desc}</ReactMarkdown>
          <div style={{ display: "flex" }}>
            <h3 style={{ flex: 1 }}>Price:</h3>
            <p style={{ flex: 1, textAlign: "right" }}>
              ${props.item.attributes.price}
            </p>
          </div>
          <form>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <h3>Size:</h3>
              </div>
              <div
                style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
              >
                <TypeSelector name="size" required>
                  <option value="" disabled selected hidden>
                    Size
                  </option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">XL</option>
                </TypeSelector>
              </div>
            </div>
            <button
              style={{
                width: "100%",
                backgroundColor: "green",
                border: "none",
                padding: "0.5em 0.25em",
                borderRadius: "3px",
                color: "white",
              }}
            >
              Add to cart
            </button>
          </form>
        </div>
        <div style={{ margin: "1rem" }}>
          <img
            height="25px"
            src={`http://localhost:1337${props.item.attributes.brandLogo.data.attributes.url}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
