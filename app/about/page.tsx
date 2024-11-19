import React from "react";

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "url('https://scontent.fkhi12-1.fna.fbcdn.net/v/t39.30808-6/301539973_568944014930629_7215737602519688029_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=wAlc-vq-9pYQ7kNvgGmYJJk&_nc_zt=23&_nc_ht=scontent.fkhi12-1.fna&_nc_gid=AzmpB1ckx9qm40b82IhzZId&oh=00_AYBXQwCmfkpAdb1dwiKyGrkPStxKW6X8UB6YmLeQ73Wt4Q&oe=67410BF5')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">About TCF</h1>
          <p className="text-lg mb-4">
            The Citizens Foundation (TCF) is a leading education-focused
            non-profit organization in Pakistan, providing quality education to
            over <b>280,000 children</b> across <b>1,652 schools</b>.
          </p>
          <p className="text-lg">
            TCF&apos;s mission is to foster intellectual, social, and moral development
            in children, empowering them to become agents of positive change.
          </p>
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
