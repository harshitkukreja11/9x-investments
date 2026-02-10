import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "9x Investments established in Dubai with a focus on premium hospitality and nightlife ventures.",
  },
  {
    year: "2020",
    title: "First Strategic Investment",
    description:
      "Initial capital deployment into experience-led hospitality concepts.",
  },
  {
    year: "2022",
    title: "Portfolio Expansion",
    description:
      "Investment in Slay DIFC, a premier bar and grill in Burj Daman.",
  },
  {
    year: "2023",
    title: "Nightlife Growth",
    description:
      "Mantis Dubai added to the portfolio at Emirates Financial Towers.",
  },
  {
    year: "2024",
    title: "Scaling Partnerships",
    description:
      "Strengthened long-term partnerships and operational depth.",
  },
];

function MilestonesTimeline() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline ${visible ? "timeline-visible" : ""}`}
    >
      {milestones.map((item, i) => (
        <div
          key={i}
          className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MilestonesTimeline;
