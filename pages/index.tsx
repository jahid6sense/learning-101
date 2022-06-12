import type { NextPage } from "next";
import Top from "@Components/Top";
import Bottom from "@Components/Bottom";
import AppLayout from "layout/layout";

const Home: NextPage = () => {

  console.log("in local log");
  console.error("in local error");
  console.warn("in local warn");
  console.info("in local info");
  console.debug("in local debug");

  return (
    <AppLayout>
      <Top></Top>
      <Bottom></Bottom>
    </AppLayout>
  );
};

export default Home;
