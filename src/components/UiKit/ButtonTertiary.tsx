import React from "react";

/** Style guide: Primary, blue button */
export default function ButtonTertiary(
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    icon?: JSX.Element;
  }
) {
  return (
    // container styles, className is completed if props contain more classes
    <div
      className={["w-full inline-flex justify-center", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ..props: pass all e.g. onClick */}
      {/* props?.style if there is style passed, include it */}
      <button
        {...props}
        style={{
          ...props?.style,
          color: props.icon ? "#4A77A8" : "#577095",
        }}
        className="w-full py-2 inline-flex flex-row  underline rounded-full font-semibold font-inter text-white text-sm"
      >
        {props.icon && <div className="flex">{props.icon}</div>}
        <div className="ml-2">{props.children}</div>
      </button>
    </div>
  );
}

/* use memo here as this component will never rerender */
