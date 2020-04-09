import React from "react";

export default function SpeechBubble(props) {
  return (
    <div style={{ borderRadius: 50 }} className="w-full bg-white p-8 ">
      <div className="mb-4">
        <h1 className="text-figmaSectionHead text-xl font-bold">
          {props.title}
        </h1>
      </div>
      <div>
        <p className="leading-normal text-figmaParagraph font-inter">
          {props.p}
        </p>
      </div>
    </div>
  );
}
