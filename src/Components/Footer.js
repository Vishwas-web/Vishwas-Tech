import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Thank You For Visting{" "}
        <a
          className="font-medium"
          href="www.google.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vishwas Patil
        </a>{" "}
        with
        <span className="text-gradient font-medium"> Testing</span> &
        <span className="text-gradient font-medium"> Bugs</span>
      </p>
    </footer>
  );
}
export default Footer;
