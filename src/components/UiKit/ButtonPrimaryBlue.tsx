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
      <button
        // pass all e.g. onClick
        {...props}
        // if there is style passed, include it
        style={{
          ...props?.style,
          background: "linear-gradient(270deg, #5E94CD 0%, #81B3E3 100%)",
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
