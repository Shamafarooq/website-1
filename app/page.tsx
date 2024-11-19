import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // Import the icons

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "url('https://cdn.slidesharecdn.com/ss_thumbnails/introductiontotcf-090930050741-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds')", // Background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-7 text-center">Welcome To My Website</h1>
          <p className="text-2xl mb-4">
            Explore my journey as a dedicated teacher, passionate about empowering students and fostering a love for learning.
          </p>
          <p className="text-xl mb-6">
            Together, we can create an inspiring educational experience. Join me in shaping the minds of tomorrow and making education accessible for all.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mt-6">
            <a
              href="https://www.facebook.com/TCFPak?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="mailto:rahbar@tcf.org.pk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaGoogle size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center mt-auto">
        <p>© 2024 Rabiya Rafiq</p>
      </footer>
    </div>
  );
};

export default About;
