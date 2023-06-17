import { ProjectSection } from '@/components';
import { projectsArray } from '@/constants/projects';

export default function Projects() {
  return (
    <div className='' data-testid='projects-container'>
      {projectsArray.map((project, index) => (
        <ProjectSection
          {...project}
          key={project.heading}
          isBgGrey={index % 2 ? true : false}
        />
      ))}
    </div>
  );
}
