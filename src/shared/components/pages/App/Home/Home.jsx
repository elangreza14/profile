import React, { Suspense } from "react";
import { useWindowSize } from "../../../../hooks";
import { HeroSection } from "../../../organisms";
import Cards from "../../../organisms/Cards";

const Home = () => {
  const { height } = useWindowSize();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection height={height} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
    </div>
  );
};

export default Home;
