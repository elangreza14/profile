import React, { Suspense } from "react";
import { useWindowSize } from "../../../../hooks";
import { Footer, HeroSection } from "../../../organisms";
import Cards from "../../../organisms/Cards";

const Home = () => {
  const { height } = useWindowSize();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection height={height} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards height={height} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
