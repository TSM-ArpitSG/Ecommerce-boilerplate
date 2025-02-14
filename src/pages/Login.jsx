import styled from "styled-components";
    
import {mobile} from "../responsive";

const Container = styled.div`                                   //container with full screen capture 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(                                   // linear gradiant color   
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("data:image/jpeg;base64,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")
      center;           //bg image
  background-size: cover;   
  display: flex;    
  align-items: center;      // items within the container need to be centred
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;               // wrapper to display the form
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`        // title styling
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`   // from styling
  display: flex;
  flex-direction: column;       // column wise fields
`;

const Input = styled.input`
  flex: 1;              // equal input field 
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;       //button style
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;      //link custom style
  font-size: 12px;  
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    
    <Container>
        
       <Wrapper>  {/*  basic form structure with styled components */}
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>New User?
          CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;