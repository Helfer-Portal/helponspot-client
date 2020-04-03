import React from "react";
// import "./App.css";

/**
 * Single Illustration and Text Row
 * @param {illustration, title, p, right} props
 */
export default function SingleTextIlluView(props) {
  if (props.right === true) {
    return (
      <div>
        <div class="flex flex-wrap py-6 px-3">
          <div class="w-5/6 sm:w-1/2 pr-6">
            <h3 class="text-3xl text-figmaSectionHead font-dm-sans font-bold leading-none mb-3">
              {props.title}
            </h3>
            <p class="text-figmaParagraph font-inter mb-8">{props.p}</p>
          </div>
          <div class="w-full sm:w-1/2 p-6">{props.illustration}</div>
        </div>
      </div>
    );
  }
  if (props.right === false) {
    return (
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">{props.illustration}</div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-figmaSectionHead font-dm-sans font-bold leading-none mb-3">
              {props.title}
            </h3>
            <p class="text-figmaParagraph font-inter mb-8">{props.p}</p>
          </div>
        </div>
      </div>
    );
  }
}
