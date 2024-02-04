import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


const Landing = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");

  const handleGenerateLinks = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!phoneNumber || !message) {
      setError("Please fill in all fields");
    }

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    setGeneratedLink(link);
    setError("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <main className="bg-white h-screen">
      <div className="text-black text-center mt-5 mb-16">
        <h1 className="text-xl lg:text-4xl font-semibold from-blue-200 to-fuchsia-700">
          WHATSAPP LINK GENERATOR
        </h1>
        <p>Get your own WhatsApp Link</p>
      </div>

      <form className="text-black flex flex-col items-center justify-center">
        <div className="mb-4">
          <label htmlFor="phonenumber" className="block mb-1 font-semibold">
            Enter Phone Number
          </label>
          <PhoneInput
            placeholder="Enter your phone number"
            className="w-full border rounded px-5 py-6 text-black bg-white"
            defaultCountry="ng"
            value={phoneNumber}
            onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Custom Message
          </label>
          <textarea
            placeholder="Enter your custom message"
            required
            className="w-full border rounded px-5 py-6 text-black bg-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center flex flex-col">
          <button
            type="submit"
            onClick={handleGenerateLinks}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
          >
            Generate Link
          </button>
          {error && <p className="text-red-800">{error}</p>}
          {generatedLink && (
            <div className="mt-8">
              <span className="text-start mb-5 flex flex-col">
                <label className="block mb-1 font-semibold">
                  Generated Link:
                </label>
                <textarea
                  className="w-full border text-black bg-white rounded px-5 py-6"
                  value={generatedLink}
                  readOnly
                />
              </span>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
                onClick={copyToClipboard}
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default Landing;
