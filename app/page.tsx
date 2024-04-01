import Image from "next/image";
import ArrowRight from "./ui/components/icons/arrow-right";
import { secondary } from "./ui/fonts";

export default function Home() {
  return (
    <main className="p-2.5 flex min-h-screen flex-col items-center justify-between md:p-8 lg:p-16">
      <div 
      className="flex w-full flex-col items-center md:flex-row md:gap-4 lg:gap-8 md:justify-between"
      id="about"
      >
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-start">
          <a className="tracking-widest text-xs md:text-sm" href="#about">ABOUT — PERSONAL</a>
          <h1 className="mt-2.5 text-3xl font-medium md:text-4xl lg:text-5xl">
          ¡Hello! <span className="font-bold whitespace-nowrap">I'm Angela Smith</span>
          </h1>
          <p className="hidden md:block mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="block md:hidden mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <Image 
          className="mt-6 block md:hidden"
          src="/AngelaSmith.png"
          alt="Angela Smith's picture"
          width={294}
          height={310}
          />
          <button className={`${secondary.className} mt-6 px-8 py-4 flex w-full max-w-80 gap-2.5 items-center justify-center bg-black text-white font-bold rounded-xl md:mt-8 md:mr-auto md:w-max dark:bg-white dark:text-black`}>
          Get started <ArrowRight className="w-2.5 fill-current" />
          </button>
        </div>
        <Image 
        className="hidden md:block bg-contain"
        src="/AngelaSmith.png"
        alt="Angela Smith's picture"
        width={648}
        height={664}
        />
      </div>
    </main>
  );
}
