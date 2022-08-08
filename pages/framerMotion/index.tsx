import { Button } from "antd";
import {motion} from "framer-motion";
import router, { Router } from "next/router";
import React, {useState} from "react";

const index = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </Button>

      <Button
        onClick={() => {
          router.push('/')
        }}
      >
        Home
      </Button>

      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
      >
        <h1 style={{textAlign: "center", fontSize:"30px"}}>Hi I am using Framer Motion</h1>
      </motion.div>

      {show && (
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <div
            style={{
              height: "200px",
              width: "100px",
              background: "red",
              textAlign: "center",
            }}
          >
            Bye
          </div>
        </motion.div>
      )}


      {!show && (
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <div
            style={{
              height: "200px",
              width: "100px",
              background: "red",
              textAlign: "center",
            }}
          >
            Hi
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default index;
