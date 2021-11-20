import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="top-section flex flex-wrap content-center text-center  ">
                    
            <div className="top-text text-center  ">
                <h1 className=" font-bold text-6xl">MAKING THE WORLDS BEST HARD-ROCK BAND EVER!</h1>
                <h2 className="font-semibold text-2xl mt-2">Total Budget : <span className='text-black font-bold'>500 MILLION!!!</span> </h2>
                <h3 className="font-semibold text-3xl" >WORLD IS DYING FOR SOME LOUD NOISE</h3>
        </div>      
        </div>
        
    );
};

export default Header;