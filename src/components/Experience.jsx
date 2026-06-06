import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    date: 'Aug 2024 — Present',
    role: 'Junior Software Intern',
    company: 'The Baap Company',
    desc: 'Building scalable microservices and enterprise applications using Java Spring Boot, Node.js, and Fastify. Implemented secure authentication using Keycloak (IAM), built high-performance REST APIs, and integrated Apache Kafka for real-time data streaming.',
  },
];

const education = [
  {
    date: 'Expected 2027',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'University of Mysore',
    desc: 'Studying core computer science subjects including data structures, algorithms, databases, and software engineering fundamentals.',
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="exp__list">
          {experiences.map((exp, i) => (
            <motion.div
              className="exp-item"
              key={exp.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="exp-item__date">{exp.date}</div>
              <div className="exp-item__content">
                <h3 className="exp-item__role">{exp.role}</h3>
                <p className="exp-item__company">{exp.company}</p>
                <p className="exp-item__desc">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <p className="section-label" style={{ marginTop: '48px' }}>Education</p>
        <h2 className="section-title">Where I've studied</h2>

        <div className="exp__list">
          {education.map((edu, i) => (
            <motion.div
              className="exp-item"
              key={edu.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="exp-item__date">{edu.date}</div>
              <div className="exp-item__content">
                <h3 className="exp-item__role">{edu.role}</h3>
                <p className="exp-item__company">{edu.company}</p>
                <p className="exp-item__desc">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <p className="section-label" style={{ marginTop: '48px' }}>Languages</p>
        <div className="lang__list">
          {[
            { lang: 'English', level: 'Professional' },
            { lang: 'Hindi',   level: 'Fluent'       },
            { lang: 'Marathi', level: 'Native'        },
          ].map((l) => (
            <div className="lang-item" key={l.lang}>
              <span className="lang-item__name">{l.lang}</span>
              <span className="lang-item__level">{l.level}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

export default Experience;