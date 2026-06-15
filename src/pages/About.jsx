import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">
          About Our eCommerce Store
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
          We provide high quality products at affordable prices.
          Our goal is to create a modern shopping experience
          with smooth UI and fast delivery.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-green-500 px-8 py-3 rounded-2xl hover:bg-green-600 transition"
        >
          Explore Products
        </button>
      </section>

      {/* TEAM SECTION */}
      <section className="px-10 py-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Subhojit Biswas</h3>
            <p className="text-gray-400">Founder & Developer</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Prasenjit Basu Roy</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Abhirup haith</h3>
            <p className="text-gray-400">Marketing Head</p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-800 text-center py-6 mt-auto">
        <p className="text-gray-400">
          © 2026 YourStore. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Terms & Conditions | Privacy Policy
        </p>
      </footer>

    </div>
  );
};

export default About;