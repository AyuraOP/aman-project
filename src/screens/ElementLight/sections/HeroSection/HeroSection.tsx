import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VariableProximityText } from "../../../../components/animations/VariableProximityText";
import { AnimatedButton } from "../../../../components/animations/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const f14 = "/src/photos/f14.jpg";
const heroBack = "/src/photos/Hero back.png";
const heroMid = "/src/photos/Heromid.png";
const heroFront = "/src/photos/Herofront.png";
const logo = "/src/photos/logo.jpg";

export const HeroSection = (): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLImageElement>(null);
  const layer2Ref = useRef<HTMLImageElement>(null);
  const layer3Ref = useRef<HTMLImageElement>(null);
  const layer4Ref = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Improved parallax effect with proper speeds
      // f14 (layer1) - slowest background
      gsap.to(layer1Ref.current, {
        y: () => -window.innerHeight * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // heroBack (layer2) - slightly faster than f14
      gsap.to(layer2Ref.current, {
        y: () => -window.innerHeight * 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // heroMid (layer3) - faster than heroBack
      gsap.to(layer3Ref.current, {
        y: () => -window.innerHeight * 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // heroFront (layer4) - 100% speed (normal scroll speed)
      gsap.to(layer4Ref.current, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text animations
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-forest-green/10 rounded-full blur-2xl animate-float-fast"></div>
      </div>

      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <div className="relative h-full">
          {/* Layered Background Images */}
          <div className="absolute inset-0 overflow-hidden">
            <img ref={layer1Ref} src={f14} className="absolute inset-0 w-full h-screen object-cover z-[0]" />
            <img ref={layer2Ref} src={heroBack} className="absolute inset-0 w-full h-screen object-cover z-[1]" />
            <img ref={layer3Ref} src={heroMid} className="absolute inset-0 w-full h-screen object-cover z-[2]" />
            <img ref={layer4Ref} src={heroFront} className="absolute inset-0 w-full h-screen object-cover z-[3]" />
          </div>

          <div className="relative z-10 h-full flex items-center flex-col max-w-full">
            <header className="flex w-full max-w-[1203px] items-center justify-between px-4 md:px-10 py-7 overflow-visible">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  alt="Logo"
                  src={logo}
                />
              </div>

              <div className="flex items-center gap-4 md:gap-8">
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-[22.7px] tracking-[0] leading-[28.8px] cursor-pointer relative group hidden md:block">
                  LOGIN
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-green transition-all duration-300 group-hover:w-full"></span>
                </div>

                <Link to="/login-type-selector" className="animated-button h-10 md:h-12 bg-forest-green/50 backdrop-blur-sm rounded-[50px] p-2 flex items-center gap-2 md:gap-3 inline-flex transition-all duration-300 hover:bg-forest-green/70 hover:scale-105 hover:shadow-lg hover:shadow-forest-green/25">
                  <span className="pl-2 [font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-[15px] text-center tracking-[0] leading-[19.2px]">
                    Login as
                  </span>
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              </div>
            </header>

            <main className="flex-1 flex flex-col w-full max-w-[1203px] justify-between px-4 md:px-10 pb-8 md:pb-14">
              <div className="max-w-full md:max-w-[718px]">
                <div ref={titleRef} className="mb-5">
                  <VariableProximityText
                    text="Empowering Climate Action Through Blockchain Innovation"
                    className="[font-family:'Inter',Helvetica] font-bold text-black text-3xl md:text-5xl lg:text-[74px] tracking-[-1px] md:tracking-[-3.20px] leading-tight md:leading-[70px]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center md:justify-end md:pl-32 lg:pl-56 max-w-full md:max-w-[718px] mt-8 md:mt-0">
                <div className="max-w-full md:max-w-[499px]">
                  <div className="mb-4">
                    <p ref={subtitleRef} className="[font-family:'Inter',Helvetica] font-bold text-[#252a18] text-sm md:text-[16px] text-center md:text-right tracking-[-0.40px] md:tracking-[-0.80px] leading-5">
                      Our blockchain-enabled carbon credit platform ensures 
                      transparency and integrity in the voluntary carbon market.{" "}
                      Join us in making a measurable impact through verified
                      afforestation projects.
                    </p>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <AnimatedButton
                      variant="primary"
                      size="lg"
                      onClick={() => window.location.href = '/login-type-selector'}
                      className="bg-forest-green hover:bg-emerald-700 shadow-xl hover:shadow-forest-green/30"
                    >
                      <span className="flex items-center gap-2">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l10-10m0 0v7m0-7h-7" />
                        </svg>
                      </span>
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <style jsx>{`
        .forest-green {
          color: #228B22;
        }
        .bg-forest-green {
          background-color: #228B22;
        }
        .bg-forest-green\\/50 {
          background-color: rgba(34, 139, 34, 0.5);
        }
        .bg-forest-green\\/70 {
          background-color: rgba(34, 139, 34, 0.7);
        }
        .shadow-forest-green\\/25 {
          box-shadow: 0 10px 15px -3px rgba(34, 139, 34, 0.25);
        }
        .shadow-forest-green\\/30 {
          box-shadow: 0 25px 50px -12px rgba(34, 139, 34, 0.3);
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(20px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(15px) translateX(-10px); }
          50% { transform: translateY(25px) translateX(-20px); }
          75% { transform: translateY(10px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
      `}</style>
    </>
  );
};