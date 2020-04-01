import React from "react";
// import "../../App.css";

const sectionTitle = "Unique Selling Points";

const data = [
  {
    title: "Test",
    subTitle: "gibt es dafür kein Framework?",
    paragraph:
      "langer Text a;sdlkfj;alsdkfj;lasdkjf;laskdjf;alskdjfasjdfasdfwuiedfhqwiuyerfiuqhrwgiauwehrfiuwehigofuqwhreiuhgqiuehtiuqwe"
  },
  {
    title: "Test",
    subTitle: "gibt es dafür kein Framework?",
    paragraph:
      "langer Text a;sdlkfj;alsdkfj;lasdkjf;laskdjf;alskdjfasjdfasdfwuiedfhqwiuyerfiuqhrwgiauwehrfiuwehigofuqwhreiuhgqiuehtiuqwe"
  },
  {
    title: "Test",
    subTitle: "gibt es dafür kein Framework?",
    paragraph:
      "langer Text a;sdlkfj;alsdkfj;lasdkjf;laskdjf;alskdjfasjdfasdfwuiedfhqwiuyerfiuqhrwgiauwehrfiuwehigofuqwhreiuhgqiuehtiuqwe"
  }
];

/** returns the unique selling point component */
export default function Usps() {
  const defaultCallback = () => {
    alert("pressed");
  };

  /** returns a single USP Card, to split up data and style / tags */
  const createUspCard = (title, subTitle, paragraph, callback) => {
    return (
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              {subTitle}
            </p>
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              {title}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">{paragraph}</p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            <button
              onClick={callback}
              className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            >
              Action
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="Usps">
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            {sectionTitle}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          {data.map(el => {
            return createUspCard(el.title, el.subTitle, el.paragraph, defaultCallback);
          })}
        </div>
      </section>
    </div>
  );
}
