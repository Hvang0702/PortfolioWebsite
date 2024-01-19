"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "This project will be used to allow others to see my previous projects and to know who I am as an aspiring software engginer.",
    image: "/images/projects/PortfolioWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Social Media App (MERN)",
    description: "Using the MERN stack I was able to replicate a working social media application.",
    image: "/images/projects/SocialMedia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hvang0702/Social-Media-App.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pixel Adventure (UNITY)",
    description: "Using Unity I was able to create a game from scratch and publish it online.",
    image: "/images/projects/PixelAdventure.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hvang0702/PixelAdventure.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sorting Algorithm Visualizer",
    description: "Using html, css, and javascript I visualized various sorting algorithms for others to see how each sorting technique works.",
    image: "/images/projects/SortingVisualizer.png",
    tag: ["All", "Web"], //use tag: ["All", "Mobile"] if project is mobile based
    gitUrl: "https://github.com/Hvang0702/Sorting-Visualizer.git",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;