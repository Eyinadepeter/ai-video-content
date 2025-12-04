import React from "react";
import { Button } from "../components/ui/button";
import { UserButton } from "@clerk/nextjs";

function Home() {
  return (
    <>
      <div>Home</div>
      <Button variant="link">subscribe now </Button>
      <UserButton />



    </>
  );
}

export default Home;
