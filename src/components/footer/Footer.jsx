import React from "react";
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'

function Footer() {
    return (
        <footer className="relative bg-blue-900 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-2xl font-semibold text-yellow-400">
                Daypitch
              </h4>
              <h5 className="text-xs mt-0 mb-2 text-gray-200">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-4">
                <a 
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/DayPitch-102652645342114"
                  className="text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src={facebook} alt="facebook" className="w-full" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/daypitchapp/"
                  className="text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src={instagram} alt="instagram"  className="w-full"/>
                </a>
                <button
                  className="text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src={linkedin} alt="linkein" className="w-full" />
                </button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Daypitch1"
                  className="text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src={twitter} alt="twitter" className="w-full" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto mb-8">
                  <span className="block uppercase text-yellow-400 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/about">About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/howitworks">How It Works?
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/explore">Our Products
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-yellow-400 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/contact">MIT License
                    </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/termsandconditions">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/privacy">Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-yellow-400 font-semibold block pb-2 text-sm"
                        href="/contact">Contact Us
                      </a>
                    </li>
                    {/* <li className="h-14 w-14 rounded-full flex flex-row items-center overflow-hidden">
                      {
                        flag ? (<img src={findFlagUrlByCountryName(flag)} alt="flag" className="" />) : null
                      }
                    </li> */}
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-xs text-gray-400 font-semibold py-1">
                {/* Copyright ©  */}
                {new Date().getFullYear()}{" "}Daypitch. A product of Perkskick Group{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
