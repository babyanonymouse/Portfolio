import React from "react";

const Projects = () => {
  return (
    <section className="flex flex-col max-w-[100rem] mx-auto">
      {/* featured projects text */}
      <div>
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl font-bebas">
          Featured Projects
        </h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl">
          Here are some of the projects that show my passion for fronted
          development
        </p>
      </div>
    </section>
  );
};

export default Projects;
