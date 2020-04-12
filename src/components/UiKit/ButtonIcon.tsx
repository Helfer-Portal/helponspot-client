import React from "react";

/** Style guide: Primary, blue button */
const ButtonIcon = (
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    icon: JSX.Element;
    color?: string;
  }
) => {
  return (
    // container styles, className is completed if props contain more classes
    <div>
      <button
        // pass all e.g. onClick
        {...props}
        // if there is style passed, include it
        style={{
          ...props?.style,
        }}
        className="rounded-full p-4"
      >
        <div className="flex">{props.icon}</div>
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonIcon);
