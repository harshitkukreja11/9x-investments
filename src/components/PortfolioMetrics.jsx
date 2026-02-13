import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function PortfolioMetrics() {
  return (
    <section className="portfolio-metrics py-5">
      <Container>
        <Row className="g-4 text-center">
          <Col md={6} lg={3}>
            <div className="metric-card">
              <h3 className="metric-number">
                <Counter end={2}  />
              </h3>
              <p className="metric-label">Iconic Brands</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="metric-card">
              <h3 className="metric-number">
                <Counter end={50} suffix="k" />
              </h3>
              <p className="metric-label">Monthly Guests</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="metric-card">
              <h3 className="metric-number">
                <Counter end={15} suffix="+" />
              </h3>
              <p className="metric-label">Operating Hours</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="metric-card">
              <h3 className="metric-number">
                <Counter end={100} suffix="%" />
              </h3>
              <p className="metric-label">Partner Satisfaction</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
