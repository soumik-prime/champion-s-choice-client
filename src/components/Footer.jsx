import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <img
            src={logo}
            alt="Champion's Choice Logo"
            width="100"

            className="object-contain"
          />
          <p>
            <span className='font-logo-res'>Champion's Choice</span>
            <br />
            <span className='text-gray-400 text-xs md:text-base'>Providing high-quality equipment for athletes since 1992.</span>
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Location</h6>
          <div className="grid grid-flow-col gap-4">
            <p>
              House #12,<br />
              Road #5, Block C,<br />
              Dhanmondi, Dhaka 1209,<br />
              Bangladesh.
            </p>
          </div>

        </nav>

      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by <i>Champion's Choice</i></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;