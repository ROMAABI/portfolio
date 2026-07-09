import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = formRef.current;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const payload = {
      access_key: "53e22050-053e-41f7-be4c-d5480ae9c533",
      name,
      email,
      message,
      subject: `Portfolio contact from ${name}`,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.success) {
        setStatus("Thanks! I'll get back to you soon.");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      const mailtoUrl = `mailto:abimanyuannadhurai18@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoUrl;
      setStatus("Opening your mail client...");
    }

    setLoading(false);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <ScrollReveal variant="left" delay={0}>
          <p className="section-label">reach out</p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <h2 id="contact-heading">Let&apos;s build something.</h2>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={240}>
          <p className="contact-sub">
            Open to Junior Front-End / Full-Stack Developer roles,
            freelance projects, and interesting collaborations.
            Immediate joiner — Chennai or remote.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={360}>
          <div className="contact-card">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-form-left">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    aria-label="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    aria-label="Your email address"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="contact-form-right">
                <div className="form-row">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell me about your project..."
                    required
                    aria-label="Your message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="contact-form-full">
              <button type="submit" className="btn-primary btn-lg" disabled={loading}>
                {loading ? "sending..." : "send message"}
              </button>
            </div>
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </form>

          <div className="contact-links">
            <a href="https://github.com/ROMAABI" target="_blank" rel="noopener">github</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/abimanyu-kvm/" target="_blank" rel="noopener">linkedin</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:abimanyuannadhurai18@gmail.com">email</a>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
