import styled from "styled-components";
import Card from "../Card/Card"
const ClothingList = styled.ul`
list-style-type: none;
border-right: 1px solid red;
width: 200px;
height: 100%;

`


const HeaderText = styled.h1`
width: 100%;
text-align: center;
margin-left: 5rem;
`

const FlexHolder = styled.div`
display: flex;
`

const GridView = styled.div`
padding: 1em;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
width: 100%;
grid-column-gap: 10px;

`
const TypeSelector = styled.select`
  width: 7rem;
  margin-left: 1rem;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
 
  border:none;
  

`

const SelectionHolder = styled.div`
display: flex;
width: 100%;
margin-left: 5rem;
justify-content: center

`


const randomPicture = "https://api.lorem.space/image/movie?w=344&h=374"


const Clothing = () => {
    return <>
    <HeaderText>All Clothing items</HeaderText>
    <SelectionHolder>
      <TypeSelector name="size" required>
        <option  value="" disabled selected hidden>Size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>


      </TypeSelector>
      <TypeSelector name="size" required>
        <option value="" disabled selected hidden>Pris</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>


      </TypeSelector>
      <TypeSelector name="size" required>
        <option value="" disabled selected hidden>Brand</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>


      </TypeSelector>
      <TypeSelector name="size" required>
        <option value="" disabled selected hidden>Brand</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>


      </TypeSelector>
    </SelectionHolder>
    <FlexHolder>
    <ClothingList>
      <li>ALLA PRODUKTER</li>
      <li>NYHETER</li>
      <li>BYXOR</li>
      <li>HOODIES</li>
      <li>T-SHIRTS</li>
      <li>ACCESSORIES</li>
    </ClothingList>
    <GridView>
    <Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/>
    <Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/>
    <Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/>
    <Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/>
   
    </GridView>
    </FlexHolder>
    </>
  };
  
  export default Clothing;