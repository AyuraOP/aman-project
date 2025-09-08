import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircularGallery } from "../../../../components/animations/CircularGallery";
import f1 from "/src/photos/f1.jpeg";
import f2 from "/src/photos/f2.jpg";
import f3 from "/src/photos/f3.jpg";
import f10 from "/src/photos/f10.jpg";
import f13 from "/src/photos/f13.jpg";
import f15 from "/src/photos/f15.jpg";
import f16 from "/src/photos/f16.jpg";
import f20 from "/src/photos/f20.jpeg";

gsap.registerPlugin(ScrollTrigger);

export const ImageCarouselSection = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    { src: f1, alt: "Photo f1", width: "w-[400px]", height: "h-[265px]" },
    { src: f2, alt: "Photo f2", width: "w-[400px]", height: "h-[269px]" },
    { src: f3, alt: "Photo f3", width: "w-[400px]", height: "h-[300px]" },
    { src: f10, alt: "Photo f10", width: "w-[200px]", height: "h-[300px]" },
    { src: f13, alt: "Photo f13", width: "w-[400px]", height: "h-[265px]" },
    { src: f15, alt: "Photo f15", width: "w-[400px]", height: "h-[265px]" },
    { src: f16, alt: "Photo f16", width: "w-[400px]", height: "h-[265px]" },
    { src: f20, alt: "Photo f20", width: "w-[400px]", height: "h-[265px]" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      });

      // Gallery animation
      gsap.from(galleryRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full min-h-[800px] bg-gradient-to-b from-white to-green-50/30 overflow-hidden relative py-10 md:py-20">
      <header className="pt-[47px] px-4 md:px-5 text-center">
        <h1 
          ref={titleRef}
          className="max-w-full [font-family:'Inter',Helvetica] font-normal text-[#575757] text-3xl md:text-5xl lg:text-[73.9px] tracking-[0] leading-tight lg:leading-[96px]"
        >
          Building a <span className="text-forest-green font-semibold">Cleaner</span> Future.
        </h1>
      </header>

      <div ref={galleryRef} className="mt-8 md:mt-[72px] relative">
        <CircularGallery 
          images={galleryImages}
          className="w-full"
        />
      </div>

      <style jsx>{`
        .text-forest-green {
          color: #228B22;
        }
      `}</style>
    </section>
  );
};