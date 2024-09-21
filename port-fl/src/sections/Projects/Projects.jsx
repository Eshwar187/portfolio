import styles from './ProjectsStyles.module.css';
import todolist from '../../assets/Todolist.jpeg';
import docs from '../../assets/Docs mini.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"><b>Projects</b></h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todolist}
          link="https://tinyurl.com/29nszscc"
          h3="Todolist"
          p="Todolist App"
        />
        <ProjectCard
          src={docs}
          link="https://tinyurl.com/355wkfkw"
          h3="Docs Mini"
          p="Docs Mini App"
        />
       
      </div>
    </section>
  );
}

export default Projects;
