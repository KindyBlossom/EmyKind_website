import React from 'react';
import './Infosec.css';
import { FaHeart } from "react-icons/fa";;

const Infosec = ({id}) => {

    let iconStyles = { color: "#FF7063", fontSize: "15px" };
    return (
        <div className="container" id={id}>
            <div className="row justify-content-center">
                <div className=" col-md-5 m-3 p-4">
                    <h3><FaHeart style={iconStyles}/> Our Love <FaHeart style={iconStyles}/></h3>
                    <p>To the Best Partner! It's blissful seeing our wish finally come true. I can't imagine doing Life with anyone else but you! It's so great to find that special person you want to annoy for the rest of your life. May Our Love continue to grow in Abundance! Love you Forever and Always. </p>
                </div>
                <div className=" col-md-5 m-3 p-4">
                    
                    <h3> <FaHeart style={iconStyles}/> Our Wedding Details <FaHeart style={iconStyles}/> </h3>
                    <p><b>Date:</b> Share in Our Special day on  Saturday, 28th August, 2021. <br/><b>Venue:</b> Okoli Boniface Compound, Afube Amichi, Nnewi South LGA,Anambra.<br/><b>Time:</b> 12Noon Prompt || Color of the day: Navy Blue, Gold, Coral.</p>
                </div>
            </div>
            
        </div>
    )
    
}

export default Infosec;

 