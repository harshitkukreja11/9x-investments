import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function MissionVision() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="mv-hero py-5 text-center text-light">
        <Container>
          <p className="section-eyebrow text-uppercase text-warning">
            Mission & Vision
          </p>
          <h1 className="section-title">
            Investing in places where people connect
          </h1>
          <p className="section-subtitle">
            Our mission and vision guide how we select, invest in, and scale
            brands — with a commitment to excellence and long-term value.
          </p>
        </Container>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mv-section py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <Card className="mv-card h-100">
                <Card.Body>
                  <h3 className="mv-title">Our Mission</h3>
                  <p>
                    We invest in and empower hospitality and nightlife concepts
                    that deliver memorable, guest-centric experiences and
                    sustainable long-term value.
                  </p>
                  <p>
                    Hospitality brands create connections, memories, and
                    communities. We bridge capital, creativity, and operational
                    expertise by providing strategic guidance, operational
                    support, and access to trusted networks.
                  </p>
                  <p>
                    Our portfolio spans fine dining, casual concepts, premium
                    bars, and high-energy nightclubs — with each investment
                    setting new standards in experience and execution.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="mv-card h-100">
                <Card.Body>
                  <h3 className="mv-title">Our Vision</h3>
                  <p>
                    To be a leading investment partner for experience-led
                    brands across the GCC and beyond.
                  </p>
                  <p>
                    We aim to be recognized for building a portfolio that
                    reshapes how people dine, celebrate, and connect.
                  </p>
                  <p>
                    From DIFC to international markets, we envision a network
                    of iconic venues carrying the 9x stamp of quality,
                    innovation, and operational excellence.
                  </p>
                  <p>
                    We are building a platform that supports brands from
                    concept to operations, brand building, and market expansion.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CORE PRINCIPLES ================= */}
      <section className="mv-principles py-5 text-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Our Core Principles</h2>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              {
                title: "Guest-Centric Focus",
                text: "Every decision is guided by the value delivered to guests. Sustainable success flows from exceptional guest experiences.",
              },
              {
                title: "Operational Excellence",
                text: "Systems, processes, training, and continuous improvement ensure quality, consistency, and performance.",
              },
              {
                title: "Innovation & Creativity",
                text: "We support bold ideas and creative concepts while maintaining operational discipline and quality standards.",
              },
              {
                title: "Sustainable Growth",
                text: "We build long-term, sustainable businesses — balancing expansion with brand integrity and experience quality.",
              },
              {
                title: "Partnership & Collaboration",
                text: "True partnerships built on trust, transparency, and shared ambition.",
              },
              {
                title: "Community Impact",
                text: "Our brands become integral parts of their communities, generating positive impact and employment.",
              },
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="principle-card h-100">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= LOOKING FORWARD ================= */}
      <section className="mv-forward py-5 text-center text-light">
        <Container>
          <p className="section-eyebrow text-uppercase text-warning">
            Looking Forward
          </p>
          <h2 className="section-title">
            Our commitment to the future
          </h2>
          <p className="section-subtitle">
            We remain committed to maintaining the highest standards across
            investment evaluation, operational support, and long-term
            partnerships.
          </p>
          <p className="section-subtitle">
            We invite founders, operators, and strategic partners to join us
            as we continue expanding our portfolio and impact.
          </p>
          <Button href="/contact" className="portfolio-btn mt-3">
            Connect With Us
          </Button>
        </Container>
      </section>
    </>
  );
}
