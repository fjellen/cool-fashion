import styled from "styled-components";
import Card from "../Card/Card";
import { strapiClientGet } from "../../utils/strapiClient";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: "none" as "none",
  color: "black" as "black",
};

const ClothingList = styled.ul`
  list-style-type: none;
  border-right: 1px solid red;
  width: 200px;
  height: 100%;
`;

const HeaderText = styled.h1`
  width: 100%;
  text-align: center;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const FlexHolder = styled.div`
  display: flex;
`;

const GridView = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-column-gap: 20px;
`;
const TypeSelector = styled.select`
  width: 7rem;
  margin-left: 1rem;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;

  border: none;
`;

const SelectionHolder = styled.div`
  display: flex;
  width: 100%;
  margin-left: 5rem;
  justify-content: center;
`;

const Clothing = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const response = strapiClientGet("/api/hoodies?populate=*", "GET");
    response.then((data) => setItems(data.data));
  }, []);
  return (
    <>
      <HeaderText>All Clothing items</HeaderText>
      <SelectionHolder>
        <TypeSelector name="size" required>
          <option value="" disabled selected hidden>
            Size
          </option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </TypeSelector>
        <TypeSelector name="size" required>
          <option value="" disabled selected hidden>
            Pris
          </option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </TypeSelector>
        <TypeSelector name="size" required>
          <option value="" disabled selected hidden>
            Brand
          </option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </TypeSelector>
        <TypeSelector name="size" required>
          <option value="" disabled selected hidden>
            Brand
          </option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </TypeSelector>
      </SelectionHolder>
      <FlexHolder>
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
        <GridView>
          {items.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <Card item={item} />
              </React.Fragment>
            );
          })}
        </GridView>
      </FlexHolder>
    </>
  );
};

export default Clothing;
