import squareHeadshot from "../../assets/squareHeadshot.jpeg";
import dotDivider from "../../assets/dotDivider.svg";
const About = () => {
  return (
    <section id="about" className="flex items-center lg:justify-end justify-center h-screen lg:px-28">
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 justify-end items-center lg:w-11/12 w-4/5">
        <img src={squareHeadshot} alt="Cassidy Headshot" className="size-1/3" />
        <div className="flex flex-col gap-8 lg:items-end items-center lg:text-end text-center lg:w-4/5 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">About Me</h2>
            <p className="paragraph">
              Say cheese cheese strings gouda. Pepper jack stinking bishop swiss
              caerphilly feta cut the cheese danish fontina cottage cheese.
              Cheesy grin cheese slices parmesan cottage cheese ricotta danish
              fontina lancashire pepper jack. <br /> Macaroni cheese when the
              cheese comes out everybody's happy paneer. Cauliflower cheese hard
              cheese blue castello babybel cheese on toast cheese triangles
              cheese strings jarlsberg.
            </p>
          </div>

          <img src={dotDivider} alt="dotDivider" />
          <p className="text-xsPClamp font-body font-extralight w-1/2 italic">
            petsitter, pie baker, rock tower builder, intrepid eater, rock
            climber, eager traveller, language learner
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;