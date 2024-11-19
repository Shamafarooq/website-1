import React from "react";

const Zakat = () => {
  return (
    <div
      className="h-screen flex flex-col justify-between bg-gradient-to-r from-teal-50 to-green-100 text-gray-800"
      style={{
        backgroundImage:
          "url('https://www.tcf.org.pk/wp-content/themes/tcf-v2/images/default.jpg')", // Replace with your desired image URL
        backgroundSize: "cover", // Ensure the background image covers the entire screen
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent background from repeating
      }}
    >
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            Support Education Through Zakat &amp; Donations
          </h1>
          <p className="text-lg text-center mb-8">
            Your contributions can change lives by providing quality education to underprivileged children. Below are the bank details for direct deposit and transfers:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="border border-gray-300 p-2">Zakat</th>
                  <th className="border border-gray-300 p-2">Donation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Account Title: The Citizens Foundation</td>
                  <td className="border border-gray-300 p-2">Account Title: The Citizens Foundation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Bank Name: Bank Alfalah</td>
                  <td className="border border-gray-300 p-2">Bank Name: Bank Alfalah</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Account Number: 1234567890</td>
                  <td className="border border-gray-300 p-2">Account Number: 0987654321</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">IBAN: PK36BAFL1234567890</td>
                  <td className="border border-gray-300 p-2">IBAN: PK36BAFL0987654321</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Rabiya Rafiq</p>
      </footer>
    </div>
  );
};

export default Zakat;
