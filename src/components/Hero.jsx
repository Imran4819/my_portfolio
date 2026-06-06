import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <motion.p
            className="hero__tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting digital <br />
            <span className="hero__title--highlight">experiences end to end.</span>
          </motion.h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Backend Developer and Software Engineering Intern specializing in building high-performance microservices, robust REST APIs, and reliable distributed systems. Experiencing in Java Spring Boot, Node.js, Fastify, and PostgreSQL.
          </motion.p>

          <motion.div
            className="hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="projects" smooth={true} duration={400} offset={-80}>
              <button className="btn btn--primary">View Projects</button>
            </Link>
            <Link to="contact" smooth={true} duration={400} offset={-80}>
              <button className="btn btn--outline">Get in Touch</button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__avatar-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero__avatar-glow" />
          <div className="hero__avatar-frame">
            <img src={avatarImg} alt="Imran Maniyar" className="hero__avatar-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
