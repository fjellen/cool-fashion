import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { Attributes, useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import AddWishlist from "../Wishlist/AddWishlist";
import AddProducts from "../ShoppingCart/AddProducts";

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

type RouteState = {
  product: [];
};

const Title = styled.p``;

const Description = styled.p`
  display: flex;
  flex: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ItemContainer = styled.div`
  text-align: left;
`;

const Image = styled.img`
  height: 344px;
  height: 374px;
`;

const Card = (props: cardProps) => {
  const context = useContext(WishlistContext);

  return (
    <>
      <FlexContainer>
        <ItemContainer>
          <Link to={`${props.item.attributes.slug}`} state={{ props }}>
            <Image
              src={`http://localhost:1337${props.item.attributes.image.data[0].attributes.url}`}
            />
          </Link>

          <Title>{props.item.attributes.title}</Title>
          <div style={{ display: "flex" }}>
            <Description>{props.item.attributes.title}</Description>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <AddWishlist item={props.item} />
              <AddProducts item={props.item} />
            </div>
          </div>
        </ItemContainer>
      </FlexContainer>
    </>
  );
};

export default Card;
