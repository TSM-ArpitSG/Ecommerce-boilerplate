import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`     //  here we are using styled components as they are more convinient..
   height : 60px;  
   background-color: #85FFBD;
   background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
   ${mobile({ height: "50px" })};

`;
const Wrapper = styled.div `
${mobile({ padding: "10px 0px" })};
   padding : 10px 20px; //to seprate the elements in the navbar
   display : flex;     //to five a box - model and adjust accordingly(horizontal) 
   justify-content : space-between;      // occupy whole space in div
`;
const Left = styled.div`
   flex:1;            //to give equal partition to each section we give flex 1     
   display: flex;    // to align the lang and serach field 
   align-items: center;
 `;
const Lang = styled.span`     display the lang EN
   font-size : 15px;
   cursor : pointer;
   ${mobile({ padding: "10px 0px" })};
 `;
const SearchContainer = styled.div`
   border: 0.5px solid lightblack;     // to give some styling to search materialUI
   display: flex;
   align-items: center;
   margin-left: 26px;
   padding: 5px;
 `;

const Input = styled.input`     // to style the search field
  border : 0.2;   
  border-radius : 0.2;
  width:70%;
  ${mobile({ padding: "10px 0px" })};
  
`;
const Logo = styled.h1` // to give a text logo in Nav
  font-weight: bold;
  color: blue;
  cursor: pointer;
`;

const Middle = styled.div`
    flex : 1;
    text-align: center;    // to make the logo shopcart appear at the centre of the midle section
    ${mobile({ padding: "10px 0px" })};
`;
const Right = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;      // to shift the elements to the right side
    ${mobile({ padding: "10px 0px" })};
 `;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ padding: "10px 0px" })};
 `;
//  Arrow function
const Navbar = ({ event }) => {
   return (
      <Container className="Navbar">
         <Wrapper>               {/*  Styled components used with the Css above */}
            <Left>
               <Lang>EN</Lang>     {/*the lang displayed at right */}
               <SearchContainer>
                  <Input />
                  <SearchIcon style={{ color: "black", fontSize: 15 }} />     {/* styling the search icon  */}
               </SearchContainer>
            </Left>
            <Middle>
               <Logo>ShopCart.</Logo>
            </Middle>
            <Right>
               <MenuItem>Products</MenuItem>
               <MenuItem>SIGN IN</MenuItem>
               <MenuItem>
                   <Badge badgeContent={0} color="primary">   {/*  imported the badge(Cart) item from materialUI */}
                     <ShoppingCartOutlined />
                  </Badge>
               </MenuItem>
            </Right>
         </Wrapper>
      </Container>

   )
}

export default Navbar