import React, { Component } from "react";

/** Style guide: Primary, blue button */
const ButtonPrimaryOrange = (
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    icon?: JSX.Element;
  }
) => {
  return (
    // container styles, className is completed if props contain more classes
    <div
      className={["w-full flex justify-center", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        // pass all e.g. onClick
        {...props}
        // if there is style passed, include it
        style={{
          ...props?.style,
        }}
        className="py-2 inline-flex justify-center font-inter text-sm orange_button_noheight"
      >
        {props.icon && <div className="flex">{props.icon}</div>}
        <div className="ml-2">{props.children}</div>
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonPrimaryOrange);
