import React, { Component } from "react";
//import './Home.css';
import volo from './legume.jpeg';
import de from './milk.jpeg';
import telo from './pizza.jpeg'
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Slider extends Component {
  render() {
    return (
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 image" id="slide" src={volo} alt="First slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="h3-responsive">"Le meilleur site pour apprendre à cuisiner"</h3>
                <p>Mohith Agadi</p>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img className="d-block w-100 image" id="slide" src={de} alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">" Les représentations sociales de l'alimentation "</h3>
                
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100 image" id="slide" src={telo}  width="700px" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"une accumulation anormale ou excessive de graisse corporelle qui peut nuire à la santé". Il est alors important "</h3>
              
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100 image" src={de} alt="Burnedforest" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"Favoriser les aliments à faible densité énergétique"</h3>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default Slider;