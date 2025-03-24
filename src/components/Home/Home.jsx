import React from "react";
import Translator from "./Translator";
import HomeFeatures from "./HomeFeatures";
import HomeHowItWorks from "./HomeHowItWorks";
import HomeSupportedLanguages from "./HomeSupportedLanguages";
import HomeUseCases from "./HomeUseCases";
import HomeFAQSection from "./HomeFAQSection";

const HomePage = () => {
  return (
    <main className="mx-4">
      <div className="m-6 max-w-7xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#101012]/70 backdrop-blur-lg text-[#fafafa] border-2 border-white/20 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl/[1.5] md:text-5xl/[1.5] lg:text-6xl font-extrabold m-4 drop-shadow-xl animateScale">
            AI Text & Speech{" "}
            <span className="bg-[linear-gradient(120deg,_rgba(255,0,128,1)_56%,_rgba(52,0,255,1)_100%)] text-transparent bg-clip-text border-b-4 border-[#ff0080] animateScale">
              Translator
            </span>
          </h1>
          <h4 className="text-[#c3d0e5] sm:text-xl md:text-2xl font-medium tracking-tight lg:m-4 p-4 md:px-8 animateScale">
            <span className="border-b-2 border-[#ff0080]">AI-Powered</span>{" "}
            Real-Time Translation for Seamless Communication.
          </h4>
        </div>
        <div>
          <Translator />
        </div>
        <div>
          <HomeFeatures />
        </div>
        <div>
          <HomeHowItWorks />
        </div>
        <div>
          <HomeSupportedLanguages />
        </div>
        <div>
          <HomeUseCases />
        </div>
        <div>
          <HomeFAQSection />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
