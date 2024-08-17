import React, { useInsertionEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const[nameIndex,setNameIndex]= useState(0);
  const { linkdein, github, hackerrank } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const names=["VISHWAS PATIL", "TESTER", "BUG BASHER","AUTOMATION"];

  useInsertionEffect(()=>{
    const intervalId = setInterval(()=>{
      setNameIndex((prevIndex)=>(prevIndex+1)%names.length);
    },2000);
    return ()=>clearInterval(intervalId);
  },[names.length]);

  // const toggleClass=()=>{
  //   setIsOpen(!isOpen);
  // }

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          {/* <img className="w-14" src={logos.logogradient} alt="logo" /> */}
          <h1 className=" text-gradient md:text-lg lg:text-xl font-medium">{names[nameIndex]}</h1>
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
            </li>
            <li>
          <a href="https://drive.google.com/file/d/1uI1sWehEjR7MnsG_QHVDnFjbqIn-aPPg/view?usp=drive_link" target="_blank" rel="noreferrer noopener" download class="mt-5 md:mt-0 btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Download Resume</a></li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={hackerrank} target="_blank" rel="noreferrer noopener" alt="HackerRank">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="32"
                height="32"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener" alt="Linkedin">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener" alt="GitHub">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
