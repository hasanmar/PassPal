import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">

      <div className="text-center p-3" style={{ backgroundColor: "rgb(86, 186, 236)" }}>
        © {new Date().getFullYear()} PassPal
      </div>
    </footer>
  );
}

export default Footer;
