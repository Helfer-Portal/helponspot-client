import React from "react";

export default function Footer() {
  return (
    <footer class="bg-white">
      <div class="container mx-auto  px-8">
        <div class="w-full flex flex-col sm:flex-row py-6">
          <div class="flex-1 mb-6">
            <img src={require("../../../assets/komb_bildwortmarke_1.png")}/>
          </div>

          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Help
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Terms
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Linkedin
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Official Blog
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a
        href="https://www.freepik.com/free-photos-vectors/background"
        class="text-gray-500"
      >
      </a>
    </footer>
  );
}
