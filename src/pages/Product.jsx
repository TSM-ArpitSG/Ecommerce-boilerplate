import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";      // all the previosuly created components are imported along with materialUI and style.css
import { mobile } from "../responsive";

const Container = styled.div``;             // Container style

const Wrapper = styled.div`
  padding: 52px;                // for spaceing
  display: flex;                // horizontal view
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;                      // image equal partition with data
`;

const Image = styled.img`       
  width: 100%;              // image styling
  height: 91vh;
  object-fit: cover;        // to avoid overlapping 
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;                  // other half of container
  padding: 0px 50px;          // right space
 
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`            // styling of text/price and title
  font-weight: 200;         
`;

const Desc = styled.p`
  margin: 22px 0px;
`;

const Price = styled.span`
  font-weight: 100;     
  font-size: 41px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 32px 0px;                                 // styling of filter dropdown box
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`              // items within the drop down
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 21px;                  // Title set of filter
  font-weight: 210;
`;

const FilterColor = styled.div`
  width: 20px;                          // here i have used props to select the color the 3 colors instead of writing againg and again
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`       // size of the filter and its position and styling
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`            // add button style 
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`     // shows styled amount text
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor:pointer;
`;

const Amount = styled.span`     // shows the value inside the amountcontainer
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`       // add to card and buy now design 
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{                      // hover animation
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
     <Navbar />         {/*  predefined components called */}
      <Announcement />
      <Wrapper>      {/* here the changes are made to show a product and its details */}
        <ImgContainer>
          <Image src="https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg" />
        </ImgContainer>
        <InfoContainer>          {/*the infocontainer consits of title desc and price tag  */}
          <Title>EYEBOGLER Regular Fit Men's Cotton T-Shirt</Title>
          <Desc>
          What does it feel like to witness climate change playing out in real-time? #notcool. 
          Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our 
          Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade 
          into something new. That's what real sustainability means to us.
          </Desc>
          <Price>&#8377; 200</Price>
          <FilterContainer>
            <Filter>
               <FilterTitle>Color</FilterTitle>      {/*the colors as shown on the page */}
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
            <Button>Buy Now</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;