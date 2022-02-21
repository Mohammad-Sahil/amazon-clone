import React from 'react'
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import slideOne from './img/slide_1.jpg';
import slideTwo from './img/slide_2.jpg';
import slideThree from './img/slide_3.jpg';
import slideFour from './img/slide_4.jpg';
import slideFive from './img/slide_5.jpg';
import slideSix from './img/slide_6.jpg';
import slideSeven from './img/slide_7.jpg';

function Carousell() {
  return (
    <Carousel className='carousel__carousel'>
    <div>
        <img src={slideOne}/>
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={slideTwo} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={slideThree} />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={slideFour}/>
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={slideFive} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={slideSix} />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={slideSeven} />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  )
}

export default Carousell;