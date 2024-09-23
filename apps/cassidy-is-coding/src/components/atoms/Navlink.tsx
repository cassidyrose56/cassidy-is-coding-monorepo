import { useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

type NavlinkProps = {
  elId: string;
  children: React.ReactNode;
};

const Navlink = ({ elId, children }: NavlinkProps) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${elId}`,
      ease: 'power2.inOut',
    });
  }, [elId]);

  return (
    <a
      href={`#${elId}`}
      className="text-primary-900 font-body font-light text-xl"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Navlink;