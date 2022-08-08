import React, {useState} from "react";
// @ts-ignore
import Animate from "rc-animate";

const index = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </button>

      <Animate
        showProp="visible"
        transitionName="fade"
        component=""
        transitionAppear
      >
        {show ? (
          <div
            key="1"
            style={{
              height: "200px",
              width: "100px",
              background: "red",
              textAlign: "center",
            }}
          >
            Hi
          </div>
        ) : null}
      </Animate>
    </div>
  );
};

export default index;
