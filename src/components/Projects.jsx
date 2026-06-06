import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    name: 'SnapToShop — E-Commerce Backend',
    desc: 'Designed scalable backend architecture for a multi-user e-commerce platform. Implemented modular APIs for inventory, users, and search. Used PostgreSQL (Neon DB) for handling dynamic workloads.',
    stack: ['Node.js', 'PostgreSQL', 'Neon DB', 'REST APIs', 'GitLab'],
    github: 'https://gitlab.com/imranmaniyar',
    live: 'https://gitlab.com/imranmaniyar',
  },
  {
    name: 'Enterprise CRM System',
    desc: 'Developed and maintained backend services for an enterprise CRM. Built high-performance REST APIs using Fastify and Spring Boot. Integrated Apache Kafka for real-time data streaming and optimized SQL queries for analytics.',
    stack: ['Java Spring Boot', 'Fastify', 'Apache Kafka', 'Keycloak', 'PostgreSQL'],
    github: 'https://gitlab.com/imranmaniyar',
    live: 'https://gitlab.com/imranmaniyar',
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="project-card__header">
                <h3 className="project-card__name">{project.name}</h3>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub size={16} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
