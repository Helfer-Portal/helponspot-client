import React from "react";

/** Layout for the register desktop story */

const imagePath = require('../../../src/assets/handy.png');

export default function MobileFrame(props) {
  return (
        <div className="m-auto my-8 mobile-frame__outer" style={{
          backgroundImage: `url(${imagePath})`,

        }}>
          <div className="mobile-frame__inner">
            {props.children}
          </div>
        </div>
  );
}
