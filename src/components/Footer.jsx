import {
  MailOutline,          // here i have used 3 icons to make a basic footer
  Phone,
  Room,
} from "@material-ui/icons";        // imported from material UI
import styled from "styled-components";     // styled component
import { mobile } from "../responsive";

const Container = styled.div`       
  display: flex;        // horizontal 
  ${mobile({ flexDirection: "column" })}
`;


const Title = styled.h3`
  margin-bottom: 30px;      // to seprate the logos from bottom a little
`;



const Data = styled.div`
  flex: 1;              // data to show in footer 
  padding: 20px;        // seperate a bit
  
`;

const ContactDetails = styled.div`
  margin-bottom: 20px;      // to align the position
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;     // payment width icon
`;

const Footer = () => {
  return (
    <Container>
      
       <Data>                                {/* basic structure with styled components */}
        <Title>Contact</Title>
        <ContactDetails>
          <Room style={{marginData:"10px"}}/> Arpit Singh 19BCG10069
        </ContactDetails>
        <ContactDetails>
          <Phone style={{marginData:"10px"}}/> +91 9479383581
        </ContactDetails>
        <ContactDetails>
          <MailOutline style={{marginData:"10px"}} /> arpit.singh2019@vitbhopal.ac.in
        </ContactDetails>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Data>
    </Container>
  );
};

export default Footer;