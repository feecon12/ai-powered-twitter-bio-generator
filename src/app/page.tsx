import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Star } from "lucide-react";
import UserInput from "@/components/home/UserInput";
import Output from "@/components/home/Output";

export default function Home() {
  return (
    <main className="relative grid grid-cols-2 gap-12 p-24">
      <div className="col-span-full w-full flex flex-col items-center justify-center space-y-4 mb-4 text-center">
        <Link href="https://github.com" target="_blank" className=" mb-4">
          <AnimatedGradientText className="px-6 py-2 flex border-2 border-gray-200 rounded-lg">
            <Star className="w-6 h-6 fill-yellow-400 ml-2" />
            <hr className="border-gray-300 mx-2 h-4 w-[1px]" />
            Stars on Github
          </AnimatedGradientText>
        </Link>
        <h1 className="font-extrabold text-7xl text-center w-full lg:w-[90%] uppercase">CRAFT THE PERFECT TWITTER BIO IN SECONDS!</h1>
        <p className="text-lg text-amber-700">Just answer a few questions, and we&apos;ll generate a Twitter bio for you.</p>
      </div>
      <UserInput />
  
      <Output/>
    </main>
  );
}
