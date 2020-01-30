import React from "react";
import "./ProjectsSection.scss";
import Header from "../../Shared/Header/Header";
import ProjectCard from "../../ProjectCard/ProjectCard";
import Cardman from "../../../assets/images/projects/cardman.png";

import Cardman2 from "../../../assets/images/projects/unknown.png";
import ph1 from "../../../assets/images/projects/kiki-siepel-vRqcK5jydPg-unsplash.jpg";
import ph2 from "../../../assets/images/projects/michael-milverton-enLhPJDohz8-unsplash.jpg";
import ph3 from "../../../assets/images/projects/oliver-schwendener-lF7PE1QMbjY-unsplash.jpg";

const ProjectsSection = () => {
  return (
    <section className="projects">
      <Header size={2} shadow={true}>
        Our projects
      </Header>
      <div className="carousel">
        <ProjectCard
          title={"Cardman Multiplayer"}
          description={
            "A combination of a traditional hangman game and a card game"
          }
          screenshot={Cardman2}
        />
        <ProjectCard
          isReady={false}
          title={"Poznajmy się"}
          description={"A simple party game, designed for Polish users"}
          screenshot={ph2}
        />
        <ProjectCard
          isReady={false}
          title={"Bookmark Checker"}
          description={"A browser extension to remove redundant bookmarks"}
          screenshot={ph3}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
