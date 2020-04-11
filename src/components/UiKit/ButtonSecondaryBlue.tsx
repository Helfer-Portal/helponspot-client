import React from "react";

/** Style guide: Primary, blue button */
const ButtonSecondaryBlue = (
  props: React.PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    border?: boolean;
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
        // if border is set, border classes will be added to CSS
        className={(() => {
          let styles: string[] = [
            "w-full py-2 bg-white text-center hover:underline rounded-full font-semibold font-inter text-figmaParagraph text-sm",
            "border-figmaParagraph border",
          ];
          return props.border ? styles.join(" ") : styles[0];
        })()}
      >
        {props.children}
      </button>
    </div>
  );
};

/* use memo here as this component will never rerender */
export default React.memo(ButtonSecondaryBlue);
