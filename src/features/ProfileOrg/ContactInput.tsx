import React from "react";

const ContactInput = ({ placeholder }: { placeholder?: string }) => {
  return (
    <div className="flex flex-1 flex-row py-2 w-full">
      <div className="flex w-1/5">hi</div>
      <div className="mx-4 flex w-4/5">
        <input className="w-full" type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default ContactInput;
