import React from "react";

function Footer() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;