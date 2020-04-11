import React, { Component } from "react";

/** Style guide: Primary, blue button */
const ButtonPrimaryBlue = (props: { children: JSX.Element }) => {
  return (
    // container styles
    <div className="w-full flex justify-center">
      <button
        // pass all stuff e.g. click handler
        {...props}
        style={{
          background: "linear-gradient(270deg, #5E94CD 0%, #81B3E3 100%)",
        }}
        className="w-full py-2 text-center hover:underline rounded-full font-semibold font-inter text-white"
      >
        {props.children}
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonPrimaryBlue);
