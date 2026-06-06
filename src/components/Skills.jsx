import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Java Spring Boot', 'Node.js', 'Fastify', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neon DB'],
  },
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS','Flutter'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitLab', 'Postman', 'Render', 'CI/CD'],
  },
  {
    title: 'Messaging',
    skills: ['Apache Kafka','Twillio'],
  },
  {
    title: 'Auth & Security',
    skills: ['Keycloak (IAM)', 'JWT'],
  },
];
function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <p className="skill-group__title">{group.title}</p>
              <div className="skill-group__tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
