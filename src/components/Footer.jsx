const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white font-semibold mb-3">MY SHOP</h3>
          <p>Your trusted online shopping partner.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <p>Help Center</p>
          <p>Returns</p>
          <p>Shipping</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2026 MY SHOP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;