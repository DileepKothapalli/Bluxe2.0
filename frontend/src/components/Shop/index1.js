import React from "react";

import {
  Div,
  MainContainer,
  MenuContainer,
  SearchContainer,
  SearchBar,
  I,
  CardsContainer,
  Cards,
  Img,
  CardInfo,
  Price,
  MintButton,
  Bid,
  CardsImg,
  CardTitle,
} from "./ShopElements.js";
import NavbarShoe from "../NavbarShoe/index";

import shoe1 from "../../images/shoe1.jpeg";
import shoe2 from "../../images/shoe2.jpeg";
import shoe3 from "../../images/shoe3.jpeg";
import shoe4 from "../../images/shoe4.jpeg";
import shoe5 from "../../images/shoe5.jpeg";
import shoe6 from "../../images/shoe6.jpeg";
import shoe7 from "../../images/shoe7.jpeg";
import shoe8 from "../../images/shoe8.jpeg";
import shoe9 from "../../images/shoe9.jpeg";
import shoe10 from "../../images/shoe10.jpeg";
import shoe11 from "../../images/shoe11.jpeg";
import shoe12 from "../../images/shoe12.jpeg";
import shoe13 from "../../images/shoe13.jpeg";
import shoe14 from "../../images/shoe14.jpeg";
import shoe15 from "../../images/shoe15.jpeg";
import Navbar from "../Navbar/index";

import IconButton from "@material-ui/core/IconButton";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Shop = () => {
  return (
    <Div>
      <NavbarShoe></NavbarShoe>
      <MainContainer>
        <MenuContainer>
          <SearchContainer>
            <I>
              <IconButton>
                <SearchOutlinedIcon style={{ color: "#ececed" }} />
              </IconButton>
            </I>{" "}
            <SearchBar placeholder="Search" />
          </SearchContainer>
        </MenuContainer>

        <CardsContainer>
          <Cards>
            <a href="/shoe">
              <CardsImg>
                <Img src={shoe1} />
              </CardsImg>
            </a>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0001</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <a href="/shoe">
              <CardsImg>
                <Img src={shoe2} />
              </CardsImg>
            </a>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0002</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe3} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0003</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe4} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0004</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe5} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0005</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe6} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0006</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe7} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0007</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe8} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0008</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe9} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0009</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe10} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0010</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe11} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0011</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
          <Cards>
            <CardsImg>
              <Img src={shoe12} />
            </CardsImg>
            <CardInfo>
              <CardTitle>
                <h4>Bluxe #0012</h4>
                <h4>0.08ETH</h4>
              </CardTitle>
              <Price>
                <MintButton>
                  <h4>Mint</h4>
                </MintButton>
              </Price>
            </CardInfo>
          </Cards>
        </CardsContainer>
      </MainContainer>
    </Div>
  );
};

export default Shop;
