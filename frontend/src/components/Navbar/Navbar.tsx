import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { strapiClientGet } from "../../utils/strapiClient";
import Modal from "react-modal";
import AddProducts from "../ShoppingCart/AddProducts";

type wishlistItem = {
  id: number;
  brandLogo: string;
  desc: string;
  image: string;
  price: number;
  title: string;
  slug: string;
};

const LinkStyle = {
  marginRight: "30px" as "30px",
  fontSize: "1em" as "1em",
  justifyContent: "space-between" as "space-between",
  textDecoration: "none" as "none",
  color: "black" as "black",
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 50px;
  width: 100vw;
  justify-content: space-between;
  color: black;
`;

const Logo = styled.div`
  margin-right: 10rem;
  margin-left: 1rem;
  font-size: 1.3em;
`;

const Menu = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: center;
`;

const RightSideSearch = styled.div`
  height: 50px;
  width: 20vw;
  font-size: 1.4em;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const RightSideDiv = styled.div`
  height: 50px;
  width: 20vw;
  display: flex;
  text-align: center;
  color: #000000;
  margin-right: 2rem;
`;

const RightSideIconer = styled.div`
  height: 50px;
  width: 9vw;
  color: #000000;
  font-size: 1.2em;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;

const StyledInput = styled.input`
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: 0;
  border-bottom: 1px solid red;
  border-color: #000000;
  position: relative;
  padding-left: 0.5rem;
  color: #000000;
  ::placeholder {
    margin-left: 1rem;
    color: #000000;
  }
`;

const StyledIconer = styled.div``;

const Navbar: React.FC = () => {
  const context = useContext(userContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [userWishlist, setUserWishlist] = useState<wishlistItem[] | null>(null);
  const [userShopping, setUserShopping] = useState<wishlistItem[] | null>(null);

  const handleWishlist = () => {
    const response = strapiClientGet(
      `/api/users/${context?.loggedInUser?.id}?populate[0]=wishlists`,
      "GET"
    );
    response.then((data) => setUserWishlist(data.wishlists));
    setIsOpen(true);
  };

  const handleProducts = () => {
    const response = strapiClientGet(
      `/api/users/${context?.loggedInUser?.id}?populate[0]=shoppingcarts`,
      "GET"
    );
    response.then((data) => setUserShopping(data.shoppingcarts));
    setCartIsOpen(true);
  };

  const handleDelete = (deleteid: number) => {
    let updateWishlist: wishlistItem[] | null = userWishlist!.filter(
      (item) => item.id !== deleteid
    );
    setUserWishlist(updateWishlist);
    const response = strapiClientGet(`/api/wishlists/${deleteid}`, "DELETE");
  };

  const handleShoppingDelete = (deleteid: number) => {
    let updateShopping: wishlistItem[] | null = userShopping!.filter(
      (item) => item.id !== deleteid
    );
    setUserShopping(updateShopping);
    const response = strapiClientGet(
      `/api/shoppingcarts/${deleteid}`,
      "DELETE"
    );
  };

  console.log(userWishlist);
  return (
    <>
      <Container>
        <Menu>
          <Logo>
            <Link to="/">
              <svg
                width="25"
                height="20"
                viewBox="0 0 21 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.21162 8.96695C2.53002 8.96695 1.99722 8.87095 1.61322 8.67895C1.22922 8.48695 0.96042 8.19895 0.80682 7.81495C0.65322 7.43095 0.57642 6.95575 0.57642 6.38935V3.17815C0.57642 2.25655 0.78282 1.57975 1.19562 1.14775C1.60842 0.706149 2.28042 0.485349 3.21162 0.485349H7.54602C8.20842 0.485349 8.71242 0.523749 9.05802 0.600549C9.41322 0.66775 9.59082 0.739749 9.59082 0.816549L9.30282 2.01175C9.13962 1.98295 8.65482 1.95415 7.84842 1.92535C7.05162 1.88695 5.89002 1.86775 4.36362 1.86775H3.62922C2.86122 1.86775 2.47722 2.20855 2.47722 2.89015V6.56215C2.47722 6.88855 2.55882 7.14295 2.72202 7.32535C2.89482 7.49815 3.19722 7.58455 3.62922 7.58455H4.21962C5.81322 7.58455 7.04682 7.57015 7.92042 7.54135C8.80362 7.50295 9.35082 7.46455 9.56202 7.42615L10.1524 8.37655C10.1524 8.42455 10.0708 8.49655 9.90762 8.59255C9.75402 8.68855 9.46602 8.77495 9.04362 8.85175C8.62122 8.92855 8.01162 8.96695 7.21482 8.96695H3.21162ZM14.0819 8.96695C13.4099 8.96695 12.8819 8.87095 12.4979 8.67895C12.1139 8.48695 11.8403 8.19895 11.6771 7.81495C11.5235 7.43095 11.4467 6.95575 11.4467 6.38935V3.06295C11.4467 2.50615 11.5235 2.04055 11.6771 1.66615C11.8307 1.28215 12.0995 0.994149 12.4835 0.802149C12.8675 0.60055 13.4003 0.49975 14.0819 0.49975H18.2867C18.9587 0.49975 19.4819 0.60055 19.8563 0.802149C20.2403 0.994149 20.5091 1.28215 20.6627 1.66615C20.8259 2.04055 20.9075 2.50615 20.9075 3.06295V6.38935C20.9075 7.23415 20.7203 7.87735 20.3459 8.31895C19.9715 8.75095 19.2851 8.96695 18.2867 8.96695H14.0819ZM14.4995 7.58455H17.8835C18.2387 7.58455 18.5123 7.49335 18.7043 7.31095C18.9059 7.12855 19.0067 6.87895 19.0067 6.56215V2.89015C19.0067 2.61175 18.9059 2.37655 18.7043 2.18455C18.5027 1.98295 18.2291 1.88215 17.8835 1.88215H14.4995C14.1539 1.88215 13.8755 1.97335 13.6643 2.15575C13.4531 2.33815 13.3475 2.58295 13.3475 2.89015V6.56215C13.3475 6.88855 13.4483 7.14295 13.6499 7.32535C13.8611 7.49815 14.1443 7.58455 14.4995 7.58455ZM3.21162 22.9669C2.53962 22.9669 2.01162 22.8709 1.62762 22.6789C1.24362 22.4869 0.97002 22.1989 0.80682 21.8149C0.65322 21.4309 0.57642 20.9557 0.57642 20.3893V17.0629C0.57642 16.5061 0.65322 16.0405 0.80682 15.6661C0.96042 15.2821 1.22922 14.9941 1.61322 14.8021C1.99722 14.6005 2.53002 14.4997 3.21162 14.4997H7.41642C8.08842 14.4997 8.61162 14.6005 8.98602 14.8021C9.37002 14.9941 9.63882 15.2821 9.79242 15.6661C9.95562 16.0405 10.0372 16.5061 10.0372 17.0629V20.3893C10.0372 21.2341 9.85002 21.8773 9.47562 22.3189C9.10122 22.7509 8.41482 22.9669 7.41642 22.9669H3.21162ZM3.62922 21.5845H7.01322C7.36842 21.5845 7.64202 21.4933 7.83402 21.3109C8.03562 21.1285 8.13642 20.8789 8.13642 20.5621V16.8901C8.13642 16.6117 8.03562 16.3765 7.83402 16.1845C7.63242 15.9829 7.35882 15.8821 7.01322 15.8821H3.62922C3.28362 15.8821 3.00522 15.9733 2.79402 16.1557C2.58282 16.3381 2.47722 16.5829 2.47722 16.8901V20.5621C2.47722 20.8885 2.57802 21.1429 2.77962 21.3253C2.99082 21.4981 3.27402 21.5845 3.62922 21.5845ZM12.1954 22.9669L12.3394 21.8149V14.4997H14.2402V21.5845H20.2018L20.7778 22.8085C20.7778 22.8469 20.6482 22.8853 20.389 22.9237C20.1298 22.9525 19.6834 22.9669 19.0498 22.9669H12.1954Z"
                  fill="black"
                />
              </svg>

              <svg
                width="153"
                height="20"
                viewBox="0 0 195 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1713 21.5984V22.9744H0.843262V21.5984H3.94726V0.606424H18.8593L18.8273 4.12642H7.72326V10.2704H17.6433V13.7584H7.72326V21.5984H20.1713ZM47.0038 21.5984V22.9744H39.8678L37.6278 17.8864H26.4278L24.1878 22.9744H17.0518V21.5984H20.7638L30.0118 0.606424H34.0438L43.2918 21.5984H47.0038ZM36.0918 14.3984L32.0278 5.18242L27.9638 14.3984H36.0918ZM64.0658 21.5984V22.9744H43.9058V21.5984H48.0018C46.9778 21.0651 46.0391 20.4038 45.1858 19.6144L47.5538 16.7664C49.8151 18.7291 52.1618 19.7104 54.5938 19.7104C55.8098 19.7104 56.7698 19.4544 57.4738 18.9424C58.1991 18.4091 58.5618 17.7158 58.5618 16.8624C58.5618 15.9878 58.2204 15.3158 57.5378 14.8464C56.8764 14.3558 55.7244 13.9184 54.0818 13.5344C52.4391 13.1291 51.1911 12.7664 50.3378 12.4464C49.4844 12.1051 48.7271 11.6678 48.0658 11.1344C46.7431 10.1318 46.0818 8.59576 46.0818 6.52643C46.0818 4.45709 46.8284 2.86776 48.3218 1.75842C49.8364 0.627759 51.7031 0.0624256 53.9218 0.0624256C55.3511 0.0624256 56.7698 0.297092 58.1778 0.766426C59.5858 1.23576 60.8018 1.89709 61.8258 2.75043L59.8098 5.59842C59.1484 5.00109 58.2524 4.51042 57.1218 4.12642C55.9911 3.74242 54.8711 3.55042 53.7618 3.55042C52.6738 3.55042 51.7778 3.77442 51.0738 4.22243C50.3698 4.67043 50.0178 5.35309 50.0178 6.27043C50.0178 7.16643 50.3698 7.85976 51.0738 8.35043C51.7778 8.81976 53.2711 9.33176 55.5538 9.88643C57.8578 10.4411 59.5858 11.2198 60.7378 12.2224C61.9111 13.2251 62.4978 14.6331 62.4978 16.4464C62.4978 18.6438 61.6871 20.3611 60.0658 21.5984H64.0658ZM88.926 21.5984H85.822V0.606424H82.046V10.3024H70.942V0.606424H67.166V22.9744H70.942V13.8224H82.046V22.9744H88.926V21.5984ZM67.166 21.5984V22.9744H64.062V21.5984H67.166ZM92.041 21.5984V0.606424H95.817V21.5984H98.921V22.9744H88.937V21.5984H92.041ZM125.786 21.5984V22.9744H98.9058V21.5984H106.234C104.484 20.5958 103.098 19.2198 102.074 17.4704C101.071 15.7211 100.57 13.7691 100.57 11.6144C100.57 8.32909 101.7 5.58776 103.962 3.39042C106.223 1.17176 109.018 0.0624256 112.346 0.0624256C115.674 0.0624256 118.468 1.17176 120.73 3.39042C122.991 5.58776 124.122 8.32909 124.122 11.6144C124.122 13.7478 123.61 15.6998 122.586 17.4704C121.583 19.2411 120.207 20.6171 118.458 21.5984H125.786ZM117.946 5.88643C116.431 4.30776 114.564 3.51842 112.346 3.51842C110.127 3.51842 108.25 4.30776 106.714 5.88643C105.199 7.46509 104.442 9.38509 104.442 11.6464C104.442 13.8864 105.199 15.7958 106.714 17.3744C108.25 18.9531 110.127 19.7424 112.346 19.7424C114.564 19.7424 116.431 18.9531 117.946 17.3744C119.482 15.7958 120.25 13.8864 120.25 11.6464C120.25 9.38509 119.482 7.46509 117.946 5.88643ZM128.885 21.5984V0.606424H132.661L145.653 17.3104V0.606424H149.429V21.5984H152.533V22.9744H145.333L132.661 6.65442V22.9744H125.781V21.5984H128.885Z"
                  fill="black"
                />
              </svg>
            </Link>
          </Logo>

          <Link to="/" style={LinkStyle}>
            HOME
          </Link>
          <Link to="clothing" style={LinkStyle}>
            CLOTHING
          </Link>
          <Link to="accessories" style={LinkStyle}>
            ACCESSORIES
          </Link>
          <Link to="brands" style={LinkStyle}>
            BRANDS
          </Link>
          <Link to="skateboards" style={LinkStyle}>
            SKATEBOARDS
          </Link>
          <Link to="shoes" style={LinkStyle}>
            SHOES
          </Link>
          <Link to="contact" style={LinkStyle}>
            CONTACT
          </Link>
        </Menu>
        <RightSideDiv>
          <RightSideSearch>
            <FaSearch
              style={{
                height: "16px",
                width: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <StyledInput type="text" placeholder="Search..."></StyledInput>
          </RightSideSearch>
          <RightSideIconer>
            <FaRegHeart
              style={{ cursor: "pointer" }}
              onClick={handleWishlist}
            />
            <Modal
              ariaHideApp={false}
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
            >
              {userWishlist?.map((item, index) => {
                return (
                  <React.Fragment>
                    <img
                      src={`http://localhost:1337${item.image}`}
                      height={150}
                      width={130}
                    />
                    <button onClick={() => handleDelete(item.id)}>
                      DELETE
                    </button>
                    <div>
                      <div key={index}>{item.title}</div>
                    </div>
                  </React.Fragment>
                );
              })}
            </Modal>

            <Link
              to={context?.loggedIn ? "Account" : "Login"}
              style={{ color: "black" }}
            >
              <FaRegUserCircle />
            </Link>
            <FaCartArrowDown
              style={{ cursor: "pointer" }}
              onClick={handleProducts}
            />
            <Modal
              ariaHideApp={false}
              isOpen={cartIsOpen}
              onRequestClose={() => setCartIsOpen(false)}
            >
              {userShopping?.map((item, index) => {
                return (
                  <React.Fragment>
                    <img
                      src={`http://localhost:1337${item.image}`}
                      height={150}
                      width={130}
                    />
                    <button onClick={() => handleShoppingDelete(item.id)}>
                      DELETE
                    </button>
                    <div>
                      <div key={index}>{item.title}</div>
                    </div>
                  </React.Fragment>
                );
              })}
            </Modal>
          </RightSideIconer>
        </RightSideDiv>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
