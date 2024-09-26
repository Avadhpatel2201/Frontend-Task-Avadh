import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="text-white py-0 px-0">
        <div className="border-div">
        <div className="row px-4 py-5">
          <div className="col-md-4">
          <i class="fa-solid fa-cart-shopping mx-3"></i>
          <span>Free Shipping On Orders Over $50</span>
          </div>
          <div className="col-md-4">
          <i class="fa-solid fa-money-check-dollar mx-3"></i>
          <span>60 Day Money Back Guarantee
          </span>
          </div>
          <div className="col-md-4">
          <i class="fas fa-comment-dots mx-3"></i>
          <span>24/7 Live Support Team
          </span>
          </div>
          
        </div>
        </div>
      <div className="">
        <div className="row px-4 py-0">
          <div className="col-md-4 p-4 border-side">
            <h3 className="text-orange">
            <img
            src="src\assets\Shuma_logo.png"
            alt="Shuma Logo"
            className="d-inline-block align-top w-50"
          />
            </h3>
            <p className='w-75'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul className="list-inline my-5">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f fa-x px-2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-twitter fa-x px-2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram fa-x px-2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-youtube fa-x px-2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="far fa-envelope fa-x px-2"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 p-4">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  All Bikes
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Electric
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Urban
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Mountain
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Get Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  My Account
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-4">
            <h5 className='px-3 '>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt mr-2 px-3"></i>
                1200 Main St.<br/> Santa Rosa, CA 93541
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2 px-3"></i>
                +1 (888) 123 - 4567
              </li>
              <li>
                <i className="far fa-envelope mr-2 px-3"></i>
                help@shuma-theme.com
              </li>
              <li>
                <i className="far fa-clock mr-2 px-3"></i>
                Mon - Sun: 8AM - 8PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row px-4 py-5 background-color-last-div">
          <div className="col-md-6 px-4 py-2">
          <span>All Rights Reserved. Developed by YourCompanyHere
          </span>
          </div>

          <div className="col-md-6 px-4 py-2">
          <img width="448" height="22" src="src\assets\footer-icons.webp" alt="" srcset="https://shuma.progressionstudios.com/wp-content/uploads/2023/06/footer-icons.png 448w, https://shuma.progressionstudios.com/wp-content/uploads/2023/06/footer-icons-400x20.png 400w" sizes="(max-width: 448px) 100vw, 448px"></img>
          </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
