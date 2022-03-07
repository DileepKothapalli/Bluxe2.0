import styled from "styled-components";
import bg from "../../images/bluxe7.jpg";
import shoe5 from "../../images/shoe5.jpeg";
import IconButton from "@material-ui/core/IconButton";

export const Div = styled.div`
  // flex: ${(props) => props.flex};
  display: flex;
  // background-color: black;
  background-image: url(${bg});

  text-align: center;
  height: 100vh;
  background-size: 100vw 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 40px 65px 0px;
  justify-content: space-between;
  // background-color: #121215;
  border-radius: 5px;
  background-color: transparent;
  padding: 0px 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  margin-top: 340px;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
  border-radius: 10px;
  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  & > a:hover {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;
export const SearchBar = styled.input`
  height: 40px;
  display: inline-flex;
  width: 300px;
  border-radius: 0px 3px 3px 0px;
  outline: none;
  border: none;
  padding: 10px;
  align-items: center;
  caret-color: #ececed;
  &:placeholder-shown {
    font-style: italic;
  }
  &::placeholder {
    color: #b1b1b5;
  }
  background-color: #1e1f24;
  &:focus {
    border-left: none;
  }
`;
export const IconButtons = styled(IconButton)`
  margin: 0px;
  height: 5px;
  width: 5px;
  position: relative;
  &:focus ${DropdownContent} {
    display: block;
    font-size: 16px;
  }
`;
export const I = styled.i`
  background-color: #1e1f24;
  height: 40px;
  border-radius: 3px 0px 0px 3px;
  margin: 0px;
  border: none;
`;
export const Filters = styled.div`
  padding: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FilterDiv = styled.div`
  display: flex;
  width: max-content;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  margin: 11px;
  background-color: #1e1f24;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const Filter = styled.div`
  display: flex;
  // width: 100px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: #ececed;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 900px;
  background-color: #121215;
  background-color: transparent;
  margin: 0px 75px;
  margin-top: 30px;
  border-radius: 5px;
  padding: 0px 10px;
`;

export const Cards = styled.div`
  height: 350px;
  width: 250px;
  border-radius: 10px;
  margin: 30px 15px;
  overflow: hidden;
  box-shadow: 1px 1px 1px 1px #121215;
`;

export const CardsImg = styled.div`
  height: 250px;
  width: 250px;
  // border: 2px solid gray;
  overflow: hidden;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
`;

export const Img = styled.img`
  height: 250px;
  width: 250px;
  // border: 2px solid gray;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.15, 1.15);
    z-index: -1;
    z-index: 999;
  }
`;

export const CardInfo = styled.div`
  border-radius: 0px 0px 10px 10px;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #0c0c0e;
  background-color: #24252b;
  color: #ececed;
  & > h3 {
    float: left;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ececed;

  & > h4 {
    font-size: 20px;
    margin: 10px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  & > h4 {
    font-size: 18px;
    margin: 10px;
  }
`;
export const MintButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0px 10px;
  width: 70px;
  padding: 0px 10px;
  background-color: #fff;
  transition: all 0.2s;
  border-radius: 40px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  & > h4 {
    font-size: 18px;
    margin: 0px;
    padding: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const Bid = styled.div`
  display: flex;
  justify-content: space-between;
  & > input {
    width: 90px;
    margin: 10px;
  }
  & > h4 {
    font-size: 18px;
    margin: 10px;
  }
`;
