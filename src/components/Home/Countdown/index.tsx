"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="max-w-[422px] w-full">
            <span className="block font-medium text-custom-1 text-blue mb-2.5">
              Don’t Miss!!
            </span>

            <h2 className="font-bold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-3">
              Enhance Your Music Experience
            </h2>

            <p>The Havit H206d is a wired PC headphone.</p>

            {/* <!-- Countdown timer --> */}
            <div
              className="flex flex-wrap gap-6 mt-6"
              x-data="timer()"
              x-init="countdown()"
            >
              {/* <!-- timer day --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2"
                  x-text="days"
                >
                  {" "}
                  {days < 10 ? "0" + days : days}{" "}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Days
                </span>
              </div>

              {/* <!-- timer hours --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2"
                  x-text="hours"
                >
                  {" "}
                  {hours < 10 ? "0" + hours : hours}{" "}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Hours
                </span>
              </div>

              {/* <!-- timer minutes --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2"
                  x-text="minutes"
                >
                  {minutes < 10 ? "0" + minutes : minutes}{" "}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Minutes
                </span>
              </div>

              {/* <!-- timer seconds --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2"
                  x-text="seconds"
                >
                  {seconds < 10 ? "0" + seconds : seconds}{" "}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Seconds
                </span>
              </div>
            </div>
            {/* <!-- Countdown timer ends --> */}

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Check it Out!
            </a>
          </div>

          {/* <!-- bg shapes --> */}
          <Image
            src="/images/countdown/countdown-bg.png"
            alt="bg shapes"
            className="hidden sm:block absolute right-0 bottom-0 -z-1"
            width={737}
            height={482}
          />
          <Image
            src="/images/countdown/countdown-01.png"
            alt="product"
            className="hidden lg:block absolute right-4 xl:right-33 bottom-4 xl:bottom-10 -z-1"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default CounDown;
