import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="faq-page">

      {/* ================= HEADER ================= */}
      <section className="faq-header text-center">
        <p className="faq-eyebrow">FAQ</p>
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          FAQ about 9x Investments, our investment approach,
          portfolio, and partnerships.
        </p>
      </section>

      {/* ================= FAQ LIST ================= */}
      <div className="container py-5">
        <div className="faq-wrapper">

          {faqData.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                {item.question}
              </summary>
              <div className="faq-answer">
                {item.answer}
              </div>
            </details>
          ))}

        </div>
      </div>

      {/* ================= CTA ================= */}
      <section className="faq-cta text-center">
        <h2>Still have questions? We’re here to help.</h2>
        <Link to="/contact" className="btn faq-btn">
          Contact Us
        </Link>
      </section>

    </div>
  );
}

const faqData = [
  {
    question: "What sectors does 9x Investments focus on?",
    answer: (
      <>
        We focus primarily on premium hospitality and nightlife investments.
        Our portfolio includes brands such as <strong>Slay DIFC</strong> and
        <strong> Mantis Dubai</strong>, reflecting our commitment to
        experience-driven venues with strong brand identity and operational excellence.
      </>
    ),
  },
  {
    question: "Where is 9x Investments headquartered?",
    answer:
      "We are headquartered in Dubai, United Arab Emirates, with a strong focus on Dubai and DIFC opportunities.",
  },
  {
    question: "Are you open to new investment opportunities?",
    answer:
      "Yes. We continuously evaluate new opportunities aligned with our investment philosophy and focus sectors.",
  },
  {
    question: "What is your typical investment size?",
    answer:
      "Investment sizes vary depending on the opportunity. We structure tailored investment solutions aligned with capital requirements and growth strategy.",
  },
  {
    question: "Do you provide operational support beyond capital?",
    answer:
      "Absolutely. We provide strategic guidance, operational expertise, brand positioning support, network access, and growth planning beyond financial investment.",
  },
  {
    question: "What makes a good investment opportunity?",
    answer:
      "We look for strong brand identity, compelling guest experience, experienced management teams, scalability, and a clear market opportunity.",
  },
  {
    question: "What is your typical investment process timeline?",
    answer:
      "Our investment process typically ranges from 10–20 weeks depending on complexity and due diligence requirements.",
  },
  {
    question: "Do you invest in early-stage or established businesses?",
    answer:
      "We evaluate both early-stage concepts and established businesses, provided there is strong alignment with our focus and growth potential.",
  },
  {
    question: "How can I learn more about Slay DIFC and Mantis Dubai?",
    answer: (
      <>
        You can visit their official websites:
        <br /><br />
        Slay DIFC – <a href="https://www.slayreservation.com/" target="_blank" rel="noreferrer">www.slayreservation.com</a>
        <br />
        Mantis Dubai – <a href="https://www.mantisdubai.com/" target="_blank" rel="noreferrer">www.mantisdubai.com</a>
      </>
    ),
  },
  {
    question: "What is your geographic focus?",
    answer:
      "Our primary focus is Dubai and the UAE. However, we are open to compelling opportunities across the GCC and selected international markets.",
  },
  {
    question: "What does post-investment collaboration look like?",
    answer:
      "We work closely with management teams through regular communication, performance reviews, operational optimization, and strategic growth initiatives.",
  },
  {
    question: "Can I visit your office or schedule a meeting?",
    answer:
      "Yes. Please reach out via our Contact page to schedule a meeting with our team.",
  },
];
