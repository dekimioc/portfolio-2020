import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import slide1 from '../../assets/images/slides/slide_1.jpg';
import slide2 from '../../assets/images/slides/slide_2.jpg';
import slide3 from '../../assets/images/slides/slide_3.jpg';

import './Slider.scss';


class Slider extends Component {
    render() {
        return(
            <div>
                <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={0} >  
           <div><img  className="sliderImg" src= {slide1}/></div>  
           <div><img  className="sliderImg" src= {slide2}/></div>  
           <div><img  className="sliderImg" src= {slide3}/></div>
      </OwlCarousel>  
            </div>
        )
    }
}

export default Slider;