import React from 'react';
import Carousel from './Carousel';
import ShopCard from './Card';
import './home.css';
    
function Home() {
  return (
    <>
        <div className='carousel__carousel'><Carousel style={{width: "100vh"}}/></div>
        <div className='Shoping__Cards px-5 mt-5'>
            <div className="row mt-5">
                <ShopCard className="mt-5"
                id="1233"
                title="The Lean Startup"
                image="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL._SX323_BO1,204,203,200_.jpg"
                rating={5}
                price={290.99}
                responsive="col-12 col-md-6 p-3"   
                />
                <ShopCard 
                 id="1133"
                title="Against the Gods"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/1.jpg"
                rating={3}
                price={280.99}
                responsive="col-12 col-md-6 p-3"/>
            </div>
            <div className="row">
                <ShopCard 
                 id="1233"
                title="Atlas Shrugged"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/2.jpg"
                rating={5}
                price={100.99}
                responsive="col-12 col-md-4 p-3"/>
                <ShopCard 
                 id="1333"
                title="Benjamin Franklin An American Life"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/3.jpg"
                rating={4}
                price={200.99}
                responsive="col-12 col-md-4 p-3"/>
                <ShopCard 
                 id="1433"
                title="Children of Dune"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/4.jpg"
                rating={5}
                price={170.99}
                responsive="col-12 col-md-4 p-3"/>
            </div>
            <div className="row">
                <ShopCard 
                 id="1533"
                title="Daemon"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/5.jpg"
                rating={5}
                price={150.99}
                responsive="col-12 col-md-4 p-3"/>
                <ShopCard 
                 id="1633"
                title="If the Universe Is Teeming with Aliens"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/6.jpg"
                rating={5}
                price={200.99}
                responsive="col-12 col-md-4 p-3"/>
                <ShopCard 
                 id="1733"
                title="Ignition"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/7.jpg"
                rating={2}
                price={210.99}
                responsive="col-12 col-md-4 p-3"/>
            </div>
            <div className="row">
                <ShopCard 
                 id="1833"
                title="Kapital Vol I"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/8.jpg"
                rating={5}
                price={90.99}
                responsive="col-12 col-md-12 p-3"/>
            </div>
            <div className="row">
                <ShopCard 
                 id="1933"
                title="Merchants of Doubt"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/9.jpg"
                rating={5}
                price={340.99}
                responsive="col-12 col-md-3 p-3"/>
                <ShopCard 
                 id="1033"
                title="Screw Business as Usual"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/10.jpg"
                rating={5}
                price={160.99}
                responsive="col-12 col-md-3 p-3"/>
                <ShopCard 
                 id="1213"
                title="Superintelligence_Paths Dangers Strategies"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/11.jpg"
                rating={5}
                price={110.99}
                responsive="col-12 col-md-3 p-3"/>
                <ShopCard 
                 id="1223"
                title="The Ultimate Hitchhiker's Guide to the Galaxy"
                image="https://notes.a2nitr.in/assets/Book/Recommended/elon%20musk/14.jpg"
                rating={4}
                price={190.99}
                responsive="col-12 col-md-3 p-3"/>
            </div>
        </div>
    </>
  )
}

export default Home