import React from "react";
import Button from "./Button";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const GetApp = () => {
  const handleScrollToContactUSForm = () => {
    const nextSection = document.getElementById("get-in-touch");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flexCenter w-full flex-col pb-[100px] py-10 px-8">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[220px]">
            Get it <span className="text-green-100">now!</span>
          </h2>
          <p className="regular-16 text-gray-10">
            We integrate Chatbots to Web Pages, whatsapp & more...
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <CustomButton
              title="Order"
              handleClick={handleScrollToContactUSForm}
              containerStyles="bg-white text-green-500 font-bold border border-green-300 max-container w-full py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"
            ></CustomButton>
            {/* <Button type="button" title="Order" variant="btn_white" full /> */}
            {/* <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />*/}
          </div>
        </div>

        <div className="mGetApp flex flex-1 items-center justify-end ">
          <Image src="/bot3.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
