import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <h1 className="font">&#9829; THE DETECTOR &#9829;</h1>

    <div className="footer__info">
      <ul className="footer__infol">
        <li className="skewText">COMPANY</li>
        <li className="skewText">CONTACT US</li>
        <li className="skewText">CARRER</li>
        <li className="skewText">PRIVACY POLICY</li>
        <li className="skewText">TERMS</li>
      </ul>

      <div className="footer__infor">
        <p>
          The Detector&#169; website is designed by Gobind Jha. Using this
          design without permission is illegal under the Copyright Act.
        </p>
      </div>
    </div>

    <h1 className="footer__developer">Designed By Gobind Jha </h1>
  </div>
);

export default Footer;
