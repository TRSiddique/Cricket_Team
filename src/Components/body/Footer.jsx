import logo from'../../assets/logo-footer.png'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10 px-20 flex flex-col items-center">
        <img className='h-30 w-30' src={logo} alt="" />
        <div className="flex-col lg:flex lg:flex-row lg:justify-between lg:items-center w-10/12 lg:py-20">
          
          {/* About Us Section */}
          <div className='lg:w-[200px]'>
            <h3 className="text-white text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
  
         
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Subscribe Section */}
          <div className="col-span-3 flex flex-col items-start md:items-start">
            <h3 className="text-white text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex bg-white rounded-lg overflow-hidden w-80">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full lg:px-4 py-2 text-gray-700 outline-none"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
  
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
          ©2025 Your Company. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  