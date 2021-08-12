import React,{useState} from 'react'
import { carouseldata } from '../Carousel/carouseldata'
import Thecarousel from '../Carousel/Thecarousel'
import Countdown from '../Count-down/Countdown'
import Footer from '../Footer/Footer'
import Gallery from '../Imagegrid/gallery'
import Infosec from '../InfoCards/Infosec'
import Navbar from '../Navbar'
import Sidebar from '../sidebar'
import MyMapComponent from '../Directions/mainmap';
import Mapinfo from '../Directions/Map'
import Waveinfo from '../Waveinfo/Waveinfo'

const Home = () => {
    const[isOpen, setIsOpen]= useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Thecarousel slides={carouseldata}/>
            <Waveinfo/>
            <Infosec id="loveToast"/> 
            <Countdown id = "countdown"/>
            <Gallery id = "gallery"/>
            <Mapinfo id = "invite"/>
            <MyMapComponent isMarkerShown />
            <Footer/>
        </>
    )
}

export default Home;
