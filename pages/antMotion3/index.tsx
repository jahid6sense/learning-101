import React, {useState} from "react";
import TweenOne from 'rc-tween-one';


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

      <TweenOne animation={{ x:100 }} />
    </div>
  );
};

export default index;
