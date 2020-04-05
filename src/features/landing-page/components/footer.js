import React from "react";

export default function Footer() {
  return (
    <footer className="bg-bluePrimary">
      <div className="container mx-auto  px-8">
        <div className="w-full flex flex-col sm:flex-row py-6">
          <div className="flex-1 mb-6">
            <img src={require("../../../assets/komb_bildwortmarke_1.png")} alt={"HelpOnSpot Logo"}/>
          </div>

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/Ueber-uns"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Über uns
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a
        href="https://www.freepik.com/free-photos-vectors/background"
        className="text-gray-500"
      >
      </a>
    </footer>
  );
}
