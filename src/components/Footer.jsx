import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 w-full relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          {"Copyright © "}
          <a
            href="https://justraihan.vercel.app/"
            className="text-white hover:text-stone-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            raihantelecom
          </a>{" "}
          {new Date().getFullYear()}
          {"."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
