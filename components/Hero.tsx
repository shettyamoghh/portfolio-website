import React from "react";
import { Aurora } from "./ui/Aurora";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Aurora>
        <div>
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Built with Next.js
              </h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Welcome to my Modern Developer Portfolio"
              />
              <p className="text-center md:tracking-wider mb-4 text-blue-100 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Amogh - a Computer Science student at ASU 🔱
              </p>
              <a href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </Aurora>
    </div>
  );
};

export default Hero;