import React from "react";

export default function Body(props) {
  const projects = [
    {
      id: "project1",
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placehold.co/500",
    },
    {
      id: "project2",
      name: "Project 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://placehold.co/500",
    },
    {
      id: "project3",
      name: "Project 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://placehold.co/500",
    },
    {
      id: "project1",
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placehold.co/500",
    },
    {
      id: "project2",
      name: "Project 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://placehold.co/500",
    },
    {
      id: "project3",
      name: "Project 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://placehold.co/500",
    },
  ];

  return (
    <>
      <h2 id="label">Projects</h2>
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
