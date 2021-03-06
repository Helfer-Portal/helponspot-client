import React from "react";

export type InputProps = {
  value?: string;
  onChange?: (e: any) => void;
  title?: string;
  name?: string;
  placeholder?: string;
  /** Use style for white background */
  bgWhite?: boolean;
};

const InputWithLabel = React.forwardRef(
  (
    { value, onChange, name, title, placeholder, bgWhite }: InputProps,
    ref: any
  ) => (
    <div className="w-full">
      <div className="mb-2 text-figmaDescription font-inter uppercase">
        <h5 className="text-sm">{title}</h5>
      </div>
      <input
        type="text"
        name={name}
        ref={ref}
        /* the definition of ugly hack haha */
        style={(() => {
          if (bgWhite) return { borderRadius: 0 };
        })()}
        className={(() => {
          let styles: string[] = [
            "p-2 w-full rounded-md placeholder-figmaPlaceholder text-figmaHead font-inter",
            "border-figmaParagraph border-b",
          ];
          return bgWhite ? styles.join(" ") : styles[0];
        })()}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
);

export default InputWithLabel;
