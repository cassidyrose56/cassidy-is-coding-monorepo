import instaLogo from "../../assets/instaLogo.svg";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import mediumLogo from "../../assets/mediumLogo.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="w-fit flex flex-col items-center justify-center gap-12 text-center">
        <div className="flex flex-col items-center justify-center gap-5 text-center lg:w-1/3 md:w-3/5 w-4/5">
          <h2 className="font-title font-medium text-h2Clamp">Say hello!</h2>
          <p className="font-body font-extralight text-lgPClamp">
            I love cheese, especially camembert de normandie babybel. Stilton
            cheesy grin ricotta queso cheesecake cow cheese triangles when the
            cheese comes out everybody's happy.
          </p>
        </div>
        <a
          href="mailto:cassidyrose56@gmail.com"
          className="text-primary-900 font-body font-light cursor-pointer border p-3 rounded-lg border-primary-900 hover:font-semibold"
        >
          Send me a message
        </a>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/cassidy-r-johnson/"
            target="_blank"
          >
            <img
              src={linkedinLogo}
              className="logo"
              alt="Linkedin logo"
              height="32"
              width="32"
            ></img>
          </a>
          <a href="https://github.com/cassidyrose56" target="_blank">
            <img
              src={githubLogo}
              className="logo"
              alt="Github logo"
              height="32"
              width="32"
            ></img>
          </a>
          <a href="https://medium.com/@cassidyrose56" target="_blank">
            <img
              src={mediumLogo}
              className="logo"
              alt="Medium logo"
              height="32"
              width="32"
            ></img>
          </a>
          <a href="https://www.instagram.com/cassidyrose56" target="_blank">
            <img
              src={instaLogo}
              className="logo"
              alt="Instagram logo"
              height="32"
              width="32"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
