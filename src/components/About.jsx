import { motion } from "framer-motion";
import "./About.css";

const stats = [
  { num: "1+", label: "Year of experience" },
  { num: "2+", label: "Key projects built" },
  { num: "8+", label: "Technologies mastered" },
];

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">About Me</p>
        <div className="about__grid">
          <div>
            <h2 className="section-title">
              Developer. Problem solver. Builder.
            </h2>
            <p className="about__text">
              I'm a Backend Developer and Junior Software Intern at The Baap
              Company, with hands-on experience building scalable microservices
              and enterprise applications using Java Spring Boot, Node.js, and
              Fastify.
            </p>
            <p className="about__text" style={{ marginTop: "16px" }}>
              Skilled in designing secure REST APIs, implementing authentication
              systems, and optimizing database performance. Currently pursuing
              BCA from University of Mysore (Expected 2027).
            </p>
          </div>
          <div className="about__stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card__num">{s.num}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
