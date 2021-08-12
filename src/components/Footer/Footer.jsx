import React from 'react'
import './Footer.css';
import { FaHeart } from "react-icons/fa";;

const Footer = () => {
    let iconStyles = { color: "#FF7063", fontSize: "12px" };
    return (
        <footer className="footer text-center" >
    <section className="special text-center p-3">
      <p className="copyright">&copy; EmyKind
  {new Date().getFullYear()}. Design with <FaHeart style={iconStyles}/> by <a href="https://www.facebook.com/kindness.okoli.3">Kind</a>.</p><p className="copyright">All Rights Reserved.</p>
    </section>
    </footer>
    )
}

export default Footer;
