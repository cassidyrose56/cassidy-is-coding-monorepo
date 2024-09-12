import squareHeadshot from "../../assets/squareHeadshot.jpeg";
const About = () => {
  return (
    <section id="about" className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center w-4/5">
        <img src={squareHeadshot} alt="Cassidy" className="size-1/3" />
        <div className="flex flex-col gap-4 text-end w-1/2">
          <h2 className="text-h2Clamp font-title font-medium">About Me</h2>
          <p className="text-smPClamp font-body font-extralight">
            Say cheese cheese strings gouda. Pepper jack stinking bishop swiss
            caerphilly feta cut the cheese danish fontina cottage cheese. Cheesy
            grin cheese slices parmesan cottage cheese ricotta danish fontina
            lancashire pepper jack. Macaroni cheese when the cheese comes out
            everybody's happy paneer. Cauliflower cheese hard cheese blue
            castello babybel cheese on toast cheese triangles cheese strings
            jarlsberg.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
