import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`       // styled components 
  width: 100%;                  //full screen slider
  height: 100vh;
  display: flex;                // as the slider is horiozontal
  position: relative;           // relative to the main screen that is the default browser/App absolute postions
  overflow: hidden;             // in order to display 1 image at a time and avoid scrollbar
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`       // here we add 2 arrows using props and position and style them
  width: 50px;                  // size of the arrows small      
  height: 50px;
  background-color: #fff7f7;    // white color to give it a clean look
  border-radius: 50%;           // round shaped so 50% radius 
  display: flex;                // again as they have a specific postion flex is used and to centre the arrows
  align-items: center;          // to make the <> appear in the centre (symbols within the circle)
  justify-content: center;      
  position: absolute;           // postion is absolute to the container parent element 
  top: 0;                       // this will centre the arrow in the middle of the screen 
  bottom: 0;
  left: ${(props) => props.direc === "left" && "10px"};     // here we are using (Js condition) props to put the arrows to left
                                                                // centre or right centre of the screen i.e. if arrow is left than 10px from left 
  right: ${(props) => props.direc === "right" && "10px"};      //similarly if arrow is right than 10 px from right it is placed
  margin: auto;                 // to centre along with top and bottom 0
  cursor: pointer;              // to change pointer on hover
  opacity: 0.7;                 // to make the bg a bit transparent of the arrows
  z-index: 2;                   // so that the arrows appear above the bg color/image that we have added in the slider
`;

const Wrapper = styled.div`         // this contains the images/desc and buy now button along with the arrows
                                    // that will be put under slider and this will be slided to achieve the animation
  height: 100%;                     // 100% of the container height    
  display: flex;                    // to postion the image and the description along wiht it 
  transition: all 1.5s ease;        // to show the slideshow effect i have added a ease effect
  transform: translateX(${(props) => props.slideIndx * -100}vw);   // As we are moiving the slider in the X-axis i have manipulated
                                                                    // viewwidth(vw) with the slideIndx which is returned as a prop
                                                                    // to the arrow function multipled and subtracted it with 100
                                                                    // creating a slideshow like 100-100 = 0vw which is first slide..next 200-100 =100 2nd slide like this 
`;                                                                              

const Slide = styled.div`       // this contains the image/title/desc/button without the image
  width: 100vw;                 // 100% of the Wrapper width the slide will take
  height: 100vh;
  display: flex;                // here as the slide will be horizontal we added display flex
  align-items: center;          // all the items are centred 
  background-color: #${(props) => props.bg};    // here i have used props to change the color as per the slide number instead of manualy typing again and again
`;

const ImgContainer = styled.div`    // this contains the image alone of the sliding window
  height: 100%;                     
  flex: 1;                          // eqaul partition within the slide for image and its desc/buy button
`;

const Image = styled.img`           //this is to style the image
  height: 80%;                      // to avoid varied sizes of images 
  padding: 50px;  
  border-radius : 30%;
  `;

const InfoContainer = styled.div`   
  flex: 1;                          // other half of the Wrapper 
  padding: 50px;                    // some padding to distance it from the left image
`;

const Title = styled.h1`            // to make the title appear bigger
  font-size: 70px;
`;

const Desc = styled.p`             // small descrioption about the product styled 
  margin: 50px 0px;                 // seprated from title 
  font-size: 20px;                  // font size made smaller 
  font-weight: 500;                 // the contrast of the text made as per the visual appearance 
  letter-spacing: 3px;              // letter spacing inc. to make text appear clear 
`;

const Button = styled.button`       // basic styling done to buy button 
  padding: 10px;                    // seprate it from above description 
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;                  // change cursor on hover
`;

const Slider = () => {
  const [slideIndx, setslideIndx] = useState(0);     // state hook with intial value as 0 and the array setslideIndx 


  const handleClick = (direc) => {                         // here the simple logic is if the direc prop is left then dec the value of index by one or inc it by 2 
    if (direc === "left") {
      setslideIndx(slideIndx > 0 ? slideIndx - 1 : 4);
    } else {                                                     // this is done to keep the slides in range(0-4) else blank container will be shown       
      setslideIndx(slideIndx < 4 ? slideIndx + 1 : 0);       // else if the direc is right and greater than 1 dec inc the slideindx by 1 else by 0.
    }
  };

  return (
    <Container>
     <Arrow direc="left" onClick={() => handleClick("left")}>           {/*  Two arrows called styled component 
                                                                                 here I have given a prop direc and assigned it 
                                                                                left or right according to which it will be used above 
                                                                                in the styled component which is one of the advantages 
                                                                                of using styled comp. over Css files     */}
        <ArrowLeftOutlined />               {/* left arrow*/}
      </Arrow>                                                                 {/*Also here i have used a onClick event and 
                                                                                took the parameter as left or rightand 
                                                                                passed it with the help of arrow function */}
      <Wrapper slideIndx={slideIndx}>
        {sliderItems.map((item) => (                           
            //  Here i have mapped the data from sliderImage array variable to item and used it in the Wrapper
           <Slide bg={item.bg} key={item.id}>        
            {/* item --> event and event to dot function is used to call data from data.js like item.img,item.title etc..
            Unit key represents ID*/}
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direc="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />         {/*  right arrow */}
      </Arrow>
    </Container>
  );
};

export default Slider;