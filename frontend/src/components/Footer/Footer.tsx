import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const footer: React.FC = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const FlexBoxWrapper = styled.div`
    display: flex;
    justify-content: flex;
    flex: 1;
  `;
  const FlexBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem;
  `;

  const ListItem = styled.li`
    list-style-type: none;
  `;

  const Divider = styled.div`
    border: 1px solid #e4e4e4;
  `;
  const Button = styled.button`
    &:hover {
      color: lightgreen;
    }
    border: none;
    background-color: black;
    color: white;
  `;
  const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
  `;

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", width: "80vw" }}>
        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FlexBoxWrapper>
            <FlexBox>
              <h4>SUPPORT</h4>
              <ul>
                <ListItem>
                  <Link to="contact">FAQ</Link>
                </ListItem>
                <ListItem>
                  <Link to="contact">Contact Us</Link>
                </ListItem>
                <ListItem>
                  <Link to="contact">Help / Support</Link>
                </ListItem>
              </ul>
            </FlexBox>
            <FlexBox>
              <h4>INFORMATION</h4>
              <ul>
                <ListItem>
                  <a>About Us</a>
                </ListItem>
                <ListItem>
                  <a>Payment Methods</a>
                </ListItem>
                <ListItem>
                  <a>Delivery Costs</a>
                </ListItem>
                <ListItem>
                  <a>Returns</a>
                </ListItem>
                <ListItem>
                  <a>Privacy Policy</a>
                </ListItem>
                <ListItem>
                  <a>Terms & Conditions</a>
                </ListItem>
                <ListItem>
                  <a>Newsletter</a>
                </ListItem>
              </ul>
            </FlexBox>
          </FlexBoxWrapper>

          <FlexBox>
            <h4>SIGN UP FOR NEWSLETTER</h4>
            <FlexBoxWrapper>
              <StyledInput
                type="text"
                style={{ maxHeight: "20px" }}
              ></StyledInput>
              <Button type="submit" style={{ maxHeight: "23px" }}>
                CONFIRM
              </Button>
            </FlexBoxWrapper>
            <div>
              <h4>IMAGES FOR PAYMENT METHODS</h4>
            </div>
          </FlexBox>

          <FlexBox>
            <h4>WHY COOL FASHION</h4>
            <p style={{ maxWidth: "55ch", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultrices at lectus id ornare. Fusce consectetur eleifend orci vel
              tincidunt. Mauris tempus, ligula nec ornare vestibulum, lorem enim
              semper metus, eu efficitur turpis sem vel magna. Duis eros eros,
              bibendum et arcu non, dictum maximus orci. Curabitur porttitor
              ligula vel nunc bibendum dignissim. Quisque neque diam, tempus
              eget convallis in, varius eu nisi. Sed in auctor tellus. Duis a
              elementum ligula, in tempor augue. Duis iaculis enim ut convallis
              volutpat. Sed id aliquet eros, id venenatis quam. Vestibulum
              pulvinar, tortor et iaculis scelerisque, lorem mauris porta arcu,
              a volutpat urna lectus sit amet mauris. Ut a rhoncus lacus. Nullam
              ut nisl urna Duis eleifend commodo vestibulum. Nulla nec nulla
              justo.
            </p>
          </FlexBox>
        </div>
        <Divider />
      </div>
    </Container>
  );
};

export default footer;
