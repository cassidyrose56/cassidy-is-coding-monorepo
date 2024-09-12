const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center text-center h-screen"
    >
      <div className="flex flex-col sm:gap-6 gap-4 items-center text-center w-4/5">
        <h1 className="font-title font-medium w-fit text-h1Clamp sm:text-nowrap">
          Hi there, I'm Cassidy
        </h1>
        <p className="font-body font-extralight text-lgPClamp">
          I’m a software engineer who loves creating fun, <wbr /> human-centric digital
          experiences. <br />
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
    </div>
  );
};

export default Home;
