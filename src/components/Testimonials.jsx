import React from "react";
import SectionHeaders from "./SectionHeaders";
import TestimonialsCards from "./TestimonialsCards";

function Testimonials() {
  const testimonialList = [
    [
      {
        name: "Tijjani",
        username: "@tijjani45",
        testimony:
          " I've built pretty handy sites powered by Craft or WordPress in the past, but seeing mind-boggling",
      },
      {
        name: "Firdausi",
        username: "@firdause33",
        testimony:
          " I've built pretty handy sites powered by Craft or WordPress in the past, but seeing mind-boggling",
      },
      {
        name: "Khadijah",
        username: "@k345",
        testimony:
          "A quick word about @tailwind css. tailwind css is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're creating your product/story in the medium itself. As friendly & powerful as it is.",
      },
    ],

    [
      {
        name: "Maimunah",
        username: "@meemee12",
        testimony:
          "I learned how to build a website in @tailwind css! My goal was to learn the basic  Nothing fancy. No special design. Just random elements that's responsive. If I can do it, so can you!",
      },
      {
        name: "Ameerah",
        username: "@tijjani45",
        testimony:
          "A quick word about @tailwind css. tailwind css is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're creating your product/story in the medium itself. As friendly & powerful as it is.",
      },
      {
        name: "Yusuf",
        username: "@y789",
        testimony:
          "I was enjoying @tailwind css a lot but I am BLOWN AWAY by their Figma plug-in. From Auto-layout to flex-box in the browser in seconds; this has completely changed how I'll build.",
      },
    ],

    [
      {
        name: "Musbaudeen",
        username: "@mus2344",
        testimony: "Websites built on @tailwind css look so beautiful.",
      },
      {
        name: "Ashraf",
        username: "@raf453",
        testimony:
          "I have been in a @tailwind css rabbit hole for the past 6 hours without even noticing as time goes by — its everything I love in Figma combined with everything I love in Webflow. I am in love.",
      },
      {
        name: "Ibrahim",
        username: "@ib3455",
        testimony:
          "Learned some basics of @tailwind css yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma to @tailwind css. Absolutely love it.",
      },
    ],
  ];

  return (
    <div className="bg-testimonials-gradient">
      <div
        className="container px-8 py-15 m-auto max-w-300 max-h-min flex flex-col justify-center items- text-white 
      "
      >
        <SectionHeaders topHeader={"What our users say"} marginB={`15`} />

        <div className="flex flex-col md:flex-row gap-4 leading-5 ">
          <TestimonialsCards testimonialList={testimonialList} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
