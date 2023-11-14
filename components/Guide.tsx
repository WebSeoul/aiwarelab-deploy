import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section
      className="py-10 bg-gray-200 max-container px-2"
      // className="flexCenter w-full flex-col px-5 py-8 bg-gray-200"
    >
      {/* <div className="container mx-auto flex flex-row items-center ">
        
        <div className="w-full text-center mb-8 md:mb-0"> */}
      <div
        className="z-20 flex flex-1 padding-container flex-col w-full pb-7 mColumnConvert pColumnConvert"
        // className="z-20 flex flex-1 flex-row items-start justify-center mColumnConvert pColumnConverts "
      >
        <div
          // className="relative z-20 flex flex-1 flex-col xl:w-1/2 "
          className="relative flex flex-1 flex-col items-start justify-center"
        >
          {/* <h1
            // className="bold-52 lg:bold-38"
            className="bold-18 lg:bold-64 xl:max-w-[770px] sm:bold-64 "
          >
            Optimize productivity with our AI chatbot for seamless business
            automation.
          </h1> */}
          <h2 className="mGuideHeader text-3xl font-bold mb-4 lg:bold-64 xl:max-w-[900px] text-left xl:w-11/12">
            {/* Optimize productivity<br></br> with our AI chatbot for <br></br>
            seamless business <br></br>automation. */}
            Optimize productivity with our AI chatbot for seamless business
            automation.
          </h2>
          <p className="text-gray-600 text-left ">
            At AI-Ware-Lab, we craft advanced automations simplifying your
            business workflow, enhancing sales, reducing costs, and maximizing
            productivity.
          </p>
        </div>

        {/* Column 2 */}
        <div className="px-10">
          <img
            src="/bot2.png" // Replace with the path to your JPG image
            alt="Column 2 Image"
            className="w-full h-auto md:max-w-xs mx-auto mImageGuide"
            width={600}
            height={500}
          />
          {/* <div className="flex flex-2 items-center justify-end ">
            <Image
              src="/bot2.png"
              alt="phones"
              width={400}
              height={50}
              className="mImageGuide2 h-auto md:max-w-s mx-auto"
            /> 
          </div>*/}
        </div>
      </div>
      <div className="w-full py-10">
        <img
          src="/bot2.png" // Replace with the path to your JPG image
          alt="Column 2 Image"
          className="w-6/12 h-auto md:max-w-xs mx-auto mImageGuide2 imageGuide2"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Guide;
