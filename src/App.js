import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "App.css";
import LandingPage from './features/landing-page/index.js';

export default function App() {
  return (
    <Router>
      <nav id="header" class="fixed w-full z-30 top-0 text-white">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div class="pl-4 flex items-center">
            <a
              class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                class="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  class="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>{" "}
              LANDING
            </a>
          </div>

          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              class="flex items-center p-1 text-orange-800 hover:text-gray-900"
            >
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
            </ul>
            <button
              id="navAction"
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
            >
              Action
            </button>
          </div>
        </div>

        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      <LandingPage />



      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-100 py-8">
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Free
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £0 <span class="text-base">for one user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div class="w-full p-8 text-3xl font-bold text-center">
                  Basic
                </div>
                <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul class="w-full text-center text-base font-bold">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-4xl font-bold text-center">
                  £x.99 <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Pro
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £x.99 <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        class="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <section class="container mx-auto text-center py-6 mb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 class="my-4 text-3xl leading-tight">
          Main Hero Message to sell yourself!
        </h3>

        <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Action!
        </button>
      </section>

      <footer class="bg-white">
        <div class="container mx-auto  px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6">
              <a
                class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <svg
                  class="h-8 fill-current inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                    fill="rgb(0,0,0)"
                  />
                  <path
                    class="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>{" "}
                LANDING
              </a>
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
          Background vector created by freepik - www.freepik.com
        </a>
      </footer>

      {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
      <Switch>
        {/* <Route exact path="/">
              <Home />
            </Route> */}
        <Route path="/ueber-uns">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Help on
          <br className="xl:hidden" />
          <span className="text-indigo-600"> Spot</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Über
          <br className="xl:hidden" />
          <span className="text-indigo-600"> Uns</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>

      <div className="bg-indigo-800 mt-20">
        <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <h2 className="text-white text-4xl ">Das Problem</h2>
            <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg leading-7 font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  In akuten Krisenzeiten geht viel drunter und drüber.
                  Organisationen oder Einrichtungen die akut Hilfe brauchen
                  bekommen zu wenige oder zu viele Helfer, wo die Kompetenzen
                  manchmal nicht mit den Anforderungen übereinstimmen. Zudem
                  wollen wir alle unseren Beitrag leisten, fühlen uns aber
                  häufig nutzlos, weil wir in Krisensituationen nicht die
                  passende Expertise mitbringen. Dabei würde doch ein einfaches
                  Schleppen manchmal schon helfen…
                </p>
              </div>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <h2 className="text-white text-4xl ">Die Lösung</h2>
            <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg leading-7 font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  Wir stellen eine zentrale Anlaufstelle in Form einer WebApp
                  zur Verfügung, bei der sich ein Helfer und Institutionen
                  registrieren können. Als Helfer kann ich nun im
                  Onboarding-Prozess angeben, wie ich helfen möchte und welche
                  Erfahrung ich habe. Diese Angaben können im Nachhinein noch
                  angepasst / aktualisiert werden. Ich kann nun zusätzlich meine
                  Standortfreigabe aktivieren, damit Institutionen in meiner
                  Nähe meine Verfügbarkeit sehen. Dabei soll nicht nur der
                  Wohnort, sondern auch der aktuelle Standort relevant sein,
                  sodass auch bei kurzweiligen Aufenthalten Helfer hinzugezogen
                  werden können. Eine Institution kann diese Helfer nun auf eine
                  Karte einsehen und alle passenden Helfer mit einem Klick
                  einberufen. Der Helfer kann nun auf diese Einladung reagieren,
                  sodass der Hilfesuchende sofort sieht, ob er/sie teilnimmt.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          Für wen machen wir das überhaupt?
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Hilfesuchende, die in Krisensituation eine funktionierende
                  Infrastruktur gewährleisten.
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Hilfsorganisationen
                  </p>
                  <p className="text-base leading-6 text-gray-500">
                    Öffentliche Hand (Bund, Land, Kreis, Bezirk)
                  </p>
                  <p className="text-base leading-6 text-gray-500">
                    Kritische Infrastruktur (Krankenhäuser, Pflegeheime, aber
                    auch Lebensmittelproduzenten und -händler)
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Helfende, die sich in Krisensituation oft nutzlos fühlen, aber
                  helfen wollen.
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Alle, die sich für eine ganz bestimmte Aufgabe und klar
                    definierte Zeiteinbringen wollen ohne sich für mehr zu
                    verpflichten
                  </p>
                  <p className="text-base leading-6 text-gray-500">
                    Hier kann jeder helfen, ob mit medizinischen Kenntnissen,
                    pflegerischen Kenntnissen, Führerschein oder vielleicht
                    sogar einem Transporter. Manchmal geht es aber nur darum,
                    mit anzupacken und etwas zu tragen
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Wie alles begann...und wie es aktuell aussieht.
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Die Idee ist am Freitag aus zwei Teams entstanden. Diese
                    haben sich daraufhin sofort zusammengeschlossen. Für uns der
                    Startschuss ein die gemeinsame Idee zu realisieren! Wir
                    starteten mit einem kollaborativen Brainstorming und kamen
                    schnell auf einen gemeinsamen Nenner. Nach 2 Stunden stand
                    ein Grobkonzept und unser Team aus Entwicklern, Designern
                    und Stragisten ging nach gemeinsamer Aufgabenplanung an's
                    Werkeln. Was wir geschafft haben und woran wir arbeiten seht
                    ihr oben in unserer Gallery oder in unseren Status-Updates!
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Was zeichnet uns aus?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Dass wir eins sind und zusammenhalten. In Krisensituationen
                    kann jeder etwas beitragen und helfen. Daher kommt es auf
                    jeden Einzelnen von uns an, egal welche Kompetenz er
                    besitzt. So sichern wir eine funktionierende Infrastruktur
                    und eine Grundexistenz in Krisensituation für uns selbst,
                    für andere, für alle.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
