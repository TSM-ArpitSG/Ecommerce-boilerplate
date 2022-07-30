import styled from "styled-components";

const Container = styled.div`
  height: 30px;                     //fixed size
  background-color: #FFE53B;
  background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);

         
  color: white;                 
  display: flex;                    // to give it a box model 
  align-items: center;              // align to the centre of the screen
  justify-content: center;      
  font-size: 14px;                  // fixed font size of text
  font-weight: 500;
`;

const Announcement = () => {                                // Here we have a added a announecment to the navbar and given it some styling with styled component container
  return <Container>Krypto! is Hiring</Container>;
};

export default Announcement;