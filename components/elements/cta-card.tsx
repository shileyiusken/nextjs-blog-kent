import React from "react";
import Image from "next/image";

const CTACard = () => {
  return (
    <div className="rounded-md bg-slate-100 px-6 py-10 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* image */}
      <Image
        fill
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        alt="CTA Card Image"
      />
      {/* content container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          justo eleifend, sodales neque vel, blandit orci. Proin in efficitur
          ipsum.
        </p>
        <form className="flex items-center gap-2 mt-6 w-full" action="">
          <input
            placeholder="Write your email."
            className="text-base bg-white/80 placeholder:text-sm px-4 py-3 rounded-md outline-none focus:ring-2 ring-neutral-400 w-full md:w-auto"
            type="text"
          />
          <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
