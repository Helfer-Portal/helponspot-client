import React from "react";

/** Style guide: Primary, blue button */
const ButtonIcon = (
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    icon: JSX.Element;
    color?: string;
    border?: boolean;
  }
) => {
  return (
    // container styles, className is completed if props contain more classes
    <div>
      {/* ..props: pass all e.g. onClick */}
      {/* props?.style if there is style passed, include it */}
      <button
        {...props}
        style={{
          ...props?.style,
        }}
        className={(() => {
          let styles: string[] = [
            "rounded-full p-4 bg-white",
            "border-figmaParagraph border",
          ];
          return props.border ? styles.join(" ") : styles[0];
        })()}
      >
        <div className="flex">{props.icon}</div>
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonIcon);
