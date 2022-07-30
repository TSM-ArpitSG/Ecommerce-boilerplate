import styled from "styled-components";
import { popularProducts } from "../data";          // from this all the data as provided in the dumy data will be imported
import Product from "./Product";                    // Product component

const Container = styled.div`                       
    padding: 20px;  //padding to seprate it from slider                        // the container is styled here 
    display: flex;  // as the products are horizontally aligned    
    flex-wrap: wrap; // wrap around   
    justify-content: space-between; // to fill the whole div evenly
`;

const Products = () => {        // arrow function
  return (
    <Container>                 
      {popularProducts.map((item) => (  // Here the item is our prop var used to store the array data from Products
        <Product item={item} key={item.id} />   // the unit key is used to map the product 
      ))} 
    </Container>
  );
};

export default Products;       