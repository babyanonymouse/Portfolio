const Hero = () => {
  return (
    <div className="flex text-white">
      {/* content */}
      <div>
        <h1 className="font-bebas text-9xl">Hi, I am <br /> Samuel Lwanga.</h1>
        <p className="font-manrope ">
          A Kenyan based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        {/* social icons */}
        <div className="flex">
          <button className="btn">contact me</button>
          <FaLinkedinIn />
          <FaGithub />
        </div>
      </div>
      {/* image */}
    </div>
  );
};

export default Hero;
