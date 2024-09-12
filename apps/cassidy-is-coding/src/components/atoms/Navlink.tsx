// import { useGSAP } from "@gsap/react";

const Navlink = ({ elId, children }: { elId: string; children: React.ReactNode }) => {
    // useGSAP(() => {
    //     gsap.to(window, {
    //       duration: 1,
    //       scrollTo: `#${elId}`,
    //       ease: "power2.inOut"
    //     });
    //   });
  return <a href={`#${elId}`} className="text-primary-900 font-body font-light text-xl">{children}</a>
}

export default Navlink