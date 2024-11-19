import React from "react";

const WaysToContribute = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://scontent.fkhi12-1.fna.fbcdn.net/v/t39.30808-6/438921160_738000268389170_8668494175195834668_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=E_iPnJPy1VIQ7kNvgGb7Yia&_nc_zt=23&_nc_ht=scontent.fkhi12-1.fna&_nc_gid=A2-svbibVuaW2K0GHFBSsR7&oh=00_AYB4vRholbCFzkGZ3m5ijMDxPEF97UjIlrYyGYlvySnBZA&oe=6740F065')", // Background image
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-4">Ways to Contribute</h1>
          <p className="text-lg mb-4">You can make a difference by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Making a donation to support TCF&apos;s mission</li>
            <li>Volunteering with TCF</li>
            <li>Spreading awareness about TCF in your community</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Rabiya Rafiq</p>
      </footer>
    </div>
  );
};

export default WaysToContribute;
