import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="middle mt-5">
      <div className="center">
        <ul>
          <li><h6>Get to Know Us</h6></li>
          <li><Link to="/">Careers</Link></li>
          <li><Link to="/">About Amazon</Link></li>
          <li><Link to="/">Investor Relations</Link></li>
          <li><Link to="/">Amazon Devices</Link></li>
        </ul>
        <ul>
          <li><h6>Make Money with Us</h6></li>
          <li><Link to="/">Sell on Amazon</Link></li>
          <li><Link to="/">Sell Your Services on Amazon</Link></li>
          <li><Link to="/">Sell on Amazon Business</Link></li>
          <li><Link to="/">Sell Your Apps on Amazon</Link></li>
          <li><Link to="/">Become an Affiliate</Link></li>
          <li><Link to="/">Advertise Your Products</Link></li>
          <li><Link to="/">Self-Publish with Us</Link></li>
          <li><Link to="/">Become an Amazon Vendor</Link></li>
          <li><Link to="/">Sell Your Subscription on Amazon</Link></li>
          <li><Link to="/">› See all</Link></li>
        </ul>
        <ul>
          <li><h6>Amazon Payment Products</h6></li>
          <li><Link to="/">Amazon Rewards Visa Signature Cards</Link></li>
          <li><Link to="/">Amazon.com Store Card</Link></li>
          <li><Link to="/">Amazon.com Corporate Credit Line</Link></li>
          <li><Link to="/">Shop with Points</Link></li>
          <li><Link to="/">Credit Card Marketplace</Link></li>
          <li><Link to="/">Reload Your Balance</Link></li>
          <li><Link to="/">Amazon Currency Converter</Link></li>
        </ul>
        <ul>
          <li><h6>Let Us Help You</h6></li>
          <li><Link to="/">Your Account</Link></li>
          <li><Link to="/">Your Orders</Link></li>
          <li><Link to="/">Shipping Rates &amp; Policies</Link></li>
          <li><Link to="/">Amazon Prime</Link></li>
          <li><Link to="/">Returns &amp; Replacements</Link></li>
          <li><Link to="/">Manage Your Content and Devices</Link></li>
          <li><Link to="/">Amazon Assistant</Link></li>
          <li><Link to="/">Help</Link></li>
        </ul>
      </div>

      <ul className="copy text-center">
        <li><Link to="/" className="logo"></Link></li>
        <li><Link to="/" className="select"><i className="fa fa-globe" aria-hidden="true"></i> English</Link></li>
        <li><Link to="/" className="select"><i className="flag-icon-us"></i>United States</Link></li>
      </ul>
    
      <h6 className='text-white text-center d-flex justify-content-center p-2'>Amazon Clone | Made with ❤️ by<a className='text-decoration-none p-1' href='https://github.com/Mohammad-Sahil'>Mohammad Sahil</a></h6>
    </div>
    </footer>
  )
}

export default Footer;