import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaGitlab } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    name: 'ManageKaro',
    desc: 'A business management application featuring two primary modules: Driver & Trip Management (for dispatching and driver tracking) and Egg Farm Management. Developed using Flutter for the mobile client and Node.js for the backend with Neon DB (PostgreSQL). Deployed on Render with Brevo for email notifications and a free SMS API for communication.',
    stack: ['Flutter', 'Node.js', 'Neon DB', 'Render', 'Brevo', 'SMS API','Github','Gitlab'],
    links: [
      { url: 'https://github.com/Imran4819', type: 'github', label: 'Code Repository' },
      { url: 'https://github.com/Imran4819', type: 'live', label: 'Live Demo' }
    ]
  },
  {
    name: 'BMS App — Banking Management App',
    desc: 'A comprehensive banking management application developed in collaboration with a peer. Built with a Flutter mobile client and a Java Spring Boot backend, powered by Neon DB (PostgreSQL) and deployed on Render. Features account management, secure transaction processing, and user authorization.',
    stack: ['Flutter', 'Java',' Spring Boot', 'Neon DB', 'Render', 'GitLab'],
    links: [
      { url: 'https://gitlab.com/kiranirakarbaapcompany/bms-froent-end', type: 'gitlab', label: 'Frontend Code' },
      { url: 'https://gitlab.com/kiranirakarbaapcompany/bms-backend', type: 'gitlab', label: 'Backend Code' }
    ]
  },
  {
    name: 'SnapToShop — E-Commerce Backend',
    desc: 'Designed scalable backend architecture for a multi-user e-commerce platform. Implemented modular APIs for inventory, users, and search. Used PostgreSQL (Neon DB) for handling dynamic workloads.',
    stack: ['Node.js', 'PostgreSQL', 'Neon DB', 'REST APIs', 'GitLab'],
    links: [
      { url: 'https://gitlab.com/imranmaniyar', type: 'gitlab', label: 'Code Repository' },
      { url: 'https://gitlab.com/imranmaniyar', type: 'live', label: 'Live Demo' }
    ]
  },
  {
    name: 'Enterprise CRM System',
    desc: 'Worked on  backend services for an enterprise CRM. Built high-performance REST APIs using Fastify. For real-time data streaming and optimized SQL queries for analytics.',
    stack: ['Node.js', 'Fastify','Gitlab', 'PostgreSQL'],
    links: [
      { url: 'https://gitlab.com/imranmaniyar', type: 'gitlab', label: 'Code Repository' },
      { url: 'https://gitlab.com/imranmaniyar', type: 'live', label: 'Live Demo' }
    ]
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
                  {project.links.map((link, idx) => {
                    let Icon = FiExternalLink;
                    if (link.type === 'github') Icon = FiGithub;
                    if (link.type === 'gitlab') Icon = FaGitlab;
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        title={link.label}
                        key={idx}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
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
