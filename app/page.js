"use client";
import Image from "next/image";

import { Navbar } from "./components/navbar";
import { ReactTyped } from "react-typed";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className=" grid grid-cols-2 h-[50vh] bg-white">
          <div className="bg-purple-100 flex flex-col gap-6 items-center justify-center px-16">
            <p className="text-4xl font-extrabold text-center text-purple-800">
              <ReactTyped
                strings={[
                  "The Most Reliable URL Shortener",
                  "Fast. Secure. No Sign-ups.",
                  "Shorten URLs Instantly!"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </p>
            <p className="text-base text-gray-700 text-center leading-relaxed">
              Say goodbye to unnecessary sign-ups and complex processes. Our platform offers a fast, secure, and no-frills way to shorten your URLs — saving your time and protecting your data.
            </p>
            <div className="flex gap-4">
              <Link href="/generate">
                <button className="cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-white font-semibold rounded-xl text-sm px-6 py-2.5 shadow-lg">
                  Try It Now
                </button>
              </Link>
              <a
                href="https://github.com/DakshGautam101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 transition-all duration-300 text-white font-semibold rounded-xl text-sm px-6 py-2.5 shadow-lg">
                  GitHub Repo
                </button>
              </a>

            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
              <div className="w-full h-full max-w-md mx-auto relative aspect-[1/1]">
                <Image
                  src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                  alt="tailwind css components"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
