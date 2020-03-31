import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Link
                  to="/"
                  className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>

                <Link
                  to="/ueber-uns"
                  className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Über uns
                </Link>
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <div
            x-show="open"
            className="absolute top-0 inset-x-0 p-2 md:hidden hidden"
          >
            <div
              className="rounded-lg shadow-md transition transform origin-top-right"
              x-show="open"
            >
              <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>

                  <Link
                    to="/ueber-uns"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Über uns
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ueber-uns">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
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
