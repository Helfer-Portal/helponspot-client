import React from "react";

/** Style guide: Primary, blue button */
const ButtonPrimaryBlue = (
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
      {/* ..props: pass all e.g. onClick */}
      {/* props?.style if there is style passed, include it */}
      <button
        {...props}
        style={{
          ...props?.style,
          background: "linear-gradient(270deg, #5FC0A9 0%, #89CEBE 100%)",
        }}
        className="w-full py-2 inline-flex justify-center text-center hover:underline rounded-full font-semibold font-inter text-white text-sm"
      >
        {props.icon && <div className="flex">{props.icon}</div>}
        <div className="ml-2">{props.children}</div>
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonPrimaryBlue);
