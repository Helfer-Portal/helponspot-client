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

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

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

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

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

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
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

                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/Ueber-uns"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Über uns
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >

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
