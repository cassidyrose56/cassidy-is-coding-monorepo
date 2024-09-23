import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type NavlinkProps = {
  elId: string;
  children: React.ReactNode;
};

const Navlink = ({ elId, children }: NavlinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (linkRef.current) {
      linkRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: `#${elId}`,
          ease: 'power2.inOut',
        });
      });
    }

    // Cleanup function
    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener('click', () => {});
      }
    };
  }, [elId]); // Add elId as a dependency

  return (
    <a
      ref={linkRef}
      href={`#${elId}`}
      className="text-primary-900 font-body font-light text-xl"
    >
      {children}
    </a>
  );
};

export default Navlink;