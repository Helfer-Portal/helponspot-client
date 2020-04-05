import React from "react";

export default function ShortP(props){
    return(
        <div className="py-4 w-full ">
            <div className="">
                <h1 className="mb-4 text-figmaDescription text-base font-bold">{props.title}</h1>
            </div>
            <div>
                <p className="leading-normal text-figmaParagraph font-inter" >{props.p}</p>
            </div>
        </div>
    );
}
