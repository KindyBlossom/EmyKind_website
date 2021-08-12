import React, { useState, useEffect } from 'react';
import './Countdown.css';
import { FaHeart } from "react-icons/fa";

const Countdown = ({id})=> {
    const[timeDays, setTimeDays] = useState("00");
    const[timeHours, setTimeHours] = useState("00");
    const[timeMinutes, setTimeMinutes] = useState("00");
    const[timeSeconds, setTimeSeconds] = useState("00");
    const [show, setShow] = useState(false);
    const [showafter, setShowafter] = useState(false);

    

    useEffect(()=>{
        let countDownDate = new Date("Aug 28, 2021 00:00:00").getTime();
          let interval = setInterval(function(){
            let now = new Date().getTime()
            let distance = countDownDate - now;

            let days = Math.floor(distance/(1000 * 60 * 60 * 24));
            let hours = Math.floor(
            (distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distance %(1000 * 60 * 60)) / (1000 * 60)
                );
            let seconds = Math.floor(
                (distance %(1000 * 60)) / 1000);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes; 
            seconds = seconds < 10 ? "0" + seconds : seconds; 
             
            let afterdays = "00";
            let afterhours = "00";
            let aftermins = "00";
            let aftersecs = "00";

            setTimeDays(days);
            setTimeHours(hours);
            setTimeMinutes(minutes);
            setTimeSeconds(seconds);

            
            
            if (distance < 0){
                clearInterval(interval);
                setShow(true);
                 
                setTimeDays(afterdays);
                setTimeHours(afterhours);
                setTimeMinutes(aftermins);
                setTimeSeconds(aftersecs);   
            }
            

             if (distance < -86400000 ){
                setShowafter(true);
                setShow(false);
            }

            
        }, 1000);
    },[])  

    let iconStyles = { color: "#FF7063", fontSize: "15px" };
 


    return ( 
        <div className= "container-fluid" id = {id}>
            <div className ="row">
                <div className ="col pt-4">
                    <h1 style= {{color:"#0F2A5F"}}>August 28th, 2021</h1>
                    <div className ="row justify-content-center">
                        <div className ="col-3 col-sm-2 col-md-2">
                            <div className ="Style">{timeDays}</div>
                            <h3 className="countdown-text">Days</h3>
                        </div>
                        <div className ="col-3 col-sm-2 col-md-2">
                            <div className ="Style">{timeHours}</div>
                            <h3 className="countdown-text">Hours</h3>
                        </div>
                        <div className ="col-3 col-sm-2 col-md-2">
                            <div className ="Style">{timeMinutes}</div>
                            <h3 className="countdown-text">Minutes</h3>
                        </div>
                        <div className ="col-3 col-sm-2 col-md-2">
                           <div className ="Style">{timeSeconds}</div>
                           <h3 className="countdown-text">Seconds</h3>
                        </div>
                        
                        <h3 className="display-text" style={{ display: show ? "block" : "none" }} > <FaHeart style={iconStyles}/>Yay! It's Our Wedding Day! <FaHeart style={iconStyles}/> </h3> 

                        <h3 className="display-text" style={{ display: showafter ? "block" : "none" }} > <FaHeart style={iconStyles}/> Thank You for being part of Our Day! <FaHeart style={iconStyles}/> </h3> 

                    </div>
                </div>
            </div>
        </div>
     );
};
export default Countdown;

