import React from "react";

const Journey = () => {
  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://scontent.fkhi12-1.fna.fbcdn.net/v/t39.30808-6/301779472_583983806754655_3318277534999294597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=TdjiXQgeu7gQ7kNvgFa7lwy&_nc_zt=23&_nc_ht=scontent.fkhi12-1.fna&_nc_gid=As9mAWhqEYAwkYQvKwWa58a&oh=00_AYBWXJF7uJ9-qR32WoUbOty72S4p1emquDGBYVuQP-8UHg&oe=67410FAD')", // Add your image URL here
        backgroundSize: "contain", // Ensures the background image covers the whole page
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg text-white text-center">
          <h1 className=" text-4xl font-bold mb-4">My Journey with TCF</h1>
          <p className="text-lg">
            As a proud volunteer of The Citizens Foundation, I have witnessed the transformative power of education. I invite you to join me in making a difference in the lives of underprivileged children by supporting TCF&apos;s mission.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Rabiya Rafiq</p>
      </footer>
    </div>
  );
};

export default Journey;
