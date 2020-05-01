import React from "react";

/** Style guide: Primary, blue button */
export default function ButtonPrimaryOrange(
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    icon?: JSX.Element;
  }
) {
  return (
    // container styles, className is completed if props contain more classes
    <div
      className={["w-full flex justify-center", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ..props: pass all e.g. onClick */}
      {/* props?.style if there is style passed, include it */}
      <button
        {...props}
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
}

/* use memo here as this component will never rerender */
