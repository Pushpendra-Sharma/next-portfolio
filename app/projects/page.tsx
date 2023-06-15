import { ProjectSection } from '@/components';
import { projectsArray } from '@/constants/projects';

export default function Projects() {
  return (
    <div className='' data-testid='projects-container'>
      {projectsArray.map(project => (
        <ProjectSection {...project} key={project.heading} />
      ))}
    </div>
  );
}
