import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import slide1 from '../../assets/images/slides/slide_1.jpg';
import slide2 from '../../assets/images/slides/slide_2.jpg';
import slide3 from '../../assets/images/slides/slide_3.jpg';

import {Animated} from "react-animated-css";
import './Slider.scss';


class Slider extends Component {
    render() {
        return(
            <div>
                <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          dots={false}
          margin={0} >  
           <div className="sliImgContainer" ><img  className="sliderImg" src= {slide1}/>
           <Animated animateOnMount animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
            <h1 >Hello, I'm Dejan Miocinovic.<br/>I'm front-end developer.</h1>
            </Animated>
           </div>  
           <div className="sliImgContainer"><img  className="sliderImg" src= {slide2}/>
           <h1>I write clean and reviewed code</h1></div>  
           <div className="sliImgContainer"><img  className="sliderImg" src= {slide3}/>
           <h1>I have a constant desire for improvement and advancement</h1>
           </div>
      </OwlCarousel>  
            </div>
        )
    }
}

export default Slider;