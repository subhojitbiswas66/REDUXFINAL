import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you.
          Fill out the form below and we will get back to you soon.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT FORM */}
          <div className="bg-gray-800 p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded-lg bg-gray-900 border border-gray-700"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded-lg bg-gray-900 border border-gray-700"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full mb-6 p-3 rounded-lg bg-gray-900 border border-gray-700"
                required
              ></textarea>

              <button className="w-full bg-green-500 py-3 rounded-xl hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <p className="text-gray-400 mb-2">
                📍 Barddhaman, West Bengal, India
              </p>

              <p className="text-gray-400 mb-2">
                📞 +91 9876543210
              </p>

              <p className="text-gray-400">
                📧 support@yourstore.com
              </p>
            </div>
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

export default Contact;