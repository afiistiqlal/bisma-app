import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="shadow-inner p-1">
      <div className="text-right text-xs m-2 text-gray-400 font-light">
        ©️ Universitas Pertamina {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
