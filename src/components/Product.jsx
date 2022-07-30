import {                            // here we have imported all the dependencies
    FavoriteBorderOutlined,         // materail ui icons used
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";


import styled from "styled-components";       // styled components

const Info = styled.div`                                      // so here the 3 icons are styled and displayed such that when you hover over 
    opacity: 0;    //default without hover                      // the image they appear else normal image is displayed        
    width: 100%;   //100% of the container 
    height: 100%;
    position: absolute; //absolute with the child/parent div being relative 
    top: 0;             //positioning
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);   // background with a little bit of opacity to give some good effect
    z-index: 3;                             // icons appear at the top so 3 index
    display: flex;                          // horizontal view
    align-items: center;                    // centre alignment of all icons
    justify-content: center;
    transition: all 0.5s ease;              // to give a fading effect on hover and removal of cursor over the icons
    cursor: pointer;
  `;

const Container = styled.div`
    flex: 1;                            // to seprate out images equally 
    margin: 6px;                        // margin to create some border from image
    min-width: 281px;                   // to adjust the images min width
    height: 345px;          
    display: flex;                      // horizontal alignment 
    align-items: center;                //centre of the container
    justify-content: center;
    background-color: #f5fbfd;          // ligth black bg color
    position: relative;                 // relative to the icons
    &:hover ${Info}{                    // here we use the Info prop to trigger the opacity of the image and icons i.e. Info Element
      opacity: 1;
    }
  `;

const Circle = styled.div`           // to insert the icons in a circular shape 
    width: 200px;
    height: 200px;
    border-radius: 50%;             // ro round it up (shape)
    background-color: white;        // bg color white
    position: absolute;             // absolute to the parent container
  `;

const Image = styled.img`     // image styling
    height: 75%;
    z-index: 2;                 // second i.e. after the icons images appear
  `;

const Icon = styled.div`      // here we style the icons 
    width: 40px;                // smaller size
    height: 40px;
    border-radius: 50%;         // to fit them in circular shape
    background-color: white;
    display: flex;              // horizontal alignment
    align-items: center;        // centre of the circle
    justify-content: center;
    margin: 10px;               // to seprate the symbols from the shape 
    transition: all 0.5s ease;     // animation of popping out a little on hovering over
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;


const Product = ({ item }) => {
    // so here i have used one container and a circle to give 2 shades of backgroud one squared out as 
    // a Containerand the other circle having a white bg along with the image to give it a better look
    return (
        <Container>
            <Circle />
            <Image src={item.img} />      {/*  here item is used as a prop and image is being called from data.js */}
            <Info>
                <Icon>
                    <ShoppingCartOutlined />    {/*the 3 icons are called as components here*/}
                </Icon>
                <Icon>

                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                 </Icon>                                {/* here i have used css styling for amount and title display */}
                <div style={{position:"absolute",left:"0",bottom:"30px",color:"white",fontSize:"100%"}}><b>T-Shirt for Formal Men</b></div>
                <span style={{position:"absolute",left:"0",bottom:"0",color:"white",fontSize:"150%"}}>&#8377;{item.amount}</span>
                <img style={{position:"absolute",right:"0",bottom:"0",background:"transparent",fontSize:"150%"}}src="https://i0.wp.com/themarvelreport.com/wp-content/uploads/2017/10/4.0Stars-1.png?ssl=1" alt=''width="100px"/>
            </Info>
            
        </Container>
    );
};

export default Product; 