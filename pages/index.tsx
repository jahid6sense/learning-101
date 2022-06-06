import type { NextPage } from "next";
import Top from "@Components/Top";

const Home: NextPage = () => {

  const i = 10;
  console.log(i);
  console.log("in local log");
  console.error("in local error");
  console.warn("in local warn");
  console.info("in local info");
  console.debug("in local debug");

  return (
    <div>
      <Top></Top>
    </div>
  );
};

export default Home;
