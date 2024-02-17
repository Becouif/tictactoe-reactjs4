import React from "react";


const Footer = () => {
  const year = new Date().getFullYear();
    
  return (
    <footer>
      <p>Copyright &#169; {year} by <a href="https://github.com/Becouif">Becouif</a></p>
    </footer>
  )

}

export default Footer;