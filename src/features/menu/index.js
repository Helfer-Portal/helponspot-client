import React from "react";
import MenuLink from "./components/MenuLink";



/**
 * Top Menu bar
 */
export default function Menu() {
    return(
        <nav id="header" class=" w-full z-30 top-0 text-white">
          {/* if header should move with scroll : change position to fixed */}
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
              <a
                class="toggleColour text-white no-underline hover:no-underline font-bold text-4xl"
                href="/"
              >
                  <img src={require("../../assets/komb_bildwortmarke_1.png")} alt={"Logo"}/>

              </a>
            </div>

            {/* lg:w-auto hidden */}
            <div
              class="lg:flex lg:items-center lg:w-auto  lg:block lg:mt-0 lg:bg-transparent text-black lg:p-0 z-20"
              id="nav-content"
            >
              <ul class="list-reset flex justify-end flex-1 items-center">
                <li class="mr-3">
                  <MenuLink to="/home">Home</MenuLink>
                </li>
                <li class="mr-3">
                  <MenuLink to="/home/ueber-uns">Über uns</MenuLink>
                </li>
                <li class="mr-3">
                  <MenuLink to="/app/organisation/chooseType">Register</MenuLink>
                </li>
              </ul>


            </div>
          </div>

          <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    );
  }
