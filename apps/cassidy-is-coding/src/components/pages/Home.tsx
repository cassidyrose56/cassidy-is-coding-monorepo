import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Divider from "../atoms/Divider";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const scrollButtonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (scrollButtonRef.current) {
      scrollButtonRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: "#about",
          ease: "power2.inOut",
        });
      });
    }

    // Cleanup function
    return () => {
      if (scrollButtonRef.current) {
        scrollButtonRef.current.removeEventListener('click', () => {});
      }
    };
  }, []); // Empty dependency array as the target (#about) doesn't change

  return (
    <div
      id="home"
      className="flex flex-col md:gap-20 gap-10 items-center justify-center text-center min-h-screen"
    >
      <div className="flex flex-col sm:gap-6 gap-4 items-center text-center w-4/5">
        <h1 className="font-title font-semibold w-fit text-h1Clamp sm:text-nowrap">
          Hi there, I'm Cassidy
        </h1>
        <p className="font-body font-extralight text-lgPClamp">
          I’m a software engineer who loves creating fun, <wbr /> human-centric
          digital experiences. <br />
          Currently, I’m building an engaging and accessible product at{" "}
          <a
            href="https://lifecloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-700 font-medium cursor-pointer hover:underline hover:font-semibold transition-all duration-300"
          >
            LifeCloud
          </a>
          , a highly secure SaaS platform for estate planning.
        </p>
      </div>
      <div className="flex flex-col lg:gap-12 gap-8 items-center w-full">
        <Divider color="bg-primary-500" className="w-4/5" />
        <a
          ref={scrollButtonRef}
          aria-label="Scroll down"
          href="#about"
          className="md:w-32 md:h-32 w-16 h-16 rounded-full border-2 border-primary-700 text-primary-700 hover:text-primary-900 hover:border-primary-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 1200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="currentColor" strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round" d="m399.19 825.98 189.14 150.19c6.8438 5.4375 16.5 5.4375 23.344 0l189.19-150.19c8.1094-6.4688 9.4688-18.234 3-26.344-3.7031-4.6406-9.1875-7.0781-14.719-7.0781-4.0781 0-8.2031 1.3594-11.625 4.0781l-158.76 126.05v-414.14c0-10.359-8.3906-18.75-18.75-18.75s-18.75 8.3906-18.75 18.75v414.14l-158.76-126.05c-8.1094-6.375-19.922-5.1094-26.344 3s-5.0625 19.922 3.0469 26.344z" />
            <path stroke="currentColor" strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round" d="m600 365.26c10.359 0 18.75-8.3906 18.75-18.75v-108c0-10.359-8.3906-18.75-18.75-18.75s-18.75 8.3906-18.75 18.75v108c0 10.359 8.3438 18.75 18.75 18.75z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
