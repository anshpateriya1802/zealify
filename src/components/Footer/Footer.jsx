import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: pateriyaansh@gmail.com</p>
            <p>Phone: +91 7985663261</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              
              <li>
                <a href="https://www.linkedin.com/in/ansh-pateriya/">LinkedIn</a>
              </li>
              
              <li>
                <a href="https://github.com/anshpateriya1802">Github</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Zeal</h5>
            <p>Bringing passion to every endeavor.</p>
            <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
            <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
