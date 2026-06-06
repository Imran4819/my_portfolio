import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
  { icon: <FiMail size={15} />, label: 'imranmaniyar419@gmail.com', href: 'mailto:imranmaniyar419@gmail.com' },
  { icon: <FiGithub size={15} />, label: 'gitlab.com/imranmaniyar', href: 'https://github.com/Imran4819' },
  { icon: <FiLinkedin size={15} />, label: 'linkedin.com/in/imranmaniyar', href: 'https://www.linkedin.com/in/imran-maniyar-7b6862321 ' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual email/API logic
    console.log('Form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Contact</p>
        <div className="contact__grid">
          <div>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact__text">
              Open to full-time roles, freelance projects, and collaborations. If
              you have an interesting idea, I'd love to hear from you.
            </p>
            <div className="contact__links">
              {contactLinks.map((link) => (
                <a
                  className="contact__link"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn--primary contact__submit">
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
