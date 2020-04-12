import React from "react";

export type InputProps = {
  value?: string;
  onChange?: (e: any) => void;
  title?: string;
  placeholder?: string;
  /** Icon which should be displayed besides the Input */
  icon?: JSX.Element;
};

const InputWithIcon = ({
  value,
  onChange,
  title,
  placeholder,
  icon,
}: InputProps) => (
  <div className="w-full  flex">
    <div
      style={{ background: "#D8E4F8", minWidth: "20%" }}
      className="p-2 mr-2 flex rounded-md justify-center items-center"
    >
      {icon}
    </div>
    <input
      type="text"
      name="name"
      /* the definition of ugly hack haha */
      className="p-2 ml-2 w-full flex rounded-md placeholder-figmaPlaceholder text-figmaHead font-inter"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputWithIcon;
