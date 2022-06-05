import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  let i = 10
  console.log(i)
  console.log("in local log")
  console.error("in local error");
  console.warn("in local warn");
  console.info("in local info");
  console.debug("in local debug");

  function addOne(i: any) {
    if (i != NaN) {
      return i++
    } else {
      return
    }
  };

  return (
    <div>
      <div>Working now (^.^)</div>
      <div>Value: {process.env.customKey}</div>
      <div>Check console: I am in {process.env.HOST}</div>
    </div>
  );
};

export default Home;
