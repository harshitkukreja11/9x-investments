import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import MilestonesTimeline from "../components/MilestonesTimeline";

function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-5 about-hero text-white">
        <Container>
          <SectionHeader
            eyebrow="About Us"
            title="A focused investment partner for experience-led brands"
            subtitle="Dubai-based investment company focused on premium hospitality and nightlife, combining strategic capital, operational expertise, and deep sector knowledge."
            center
            light
          />
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="py-5 bg-dark text-light">
        <Container>
          <Row className="g-5 align-items-center">
            <Col md={6}>
              <h3 className="fw-bold mb-3">Who We Are</h3>
              <p className="text-muted-light">
                9x Investments was founded with a clear vision: to identify,
                invest in, and nurture exceptional hospitality and nightlife
                concepts in Dubai. We operate at the intersection of capital,
                creativity, and operations.
              </p>
              <p className="text-muted-light">
                Based in Al Quoz, Dubai, our team brings together backgrounds in
                finance, hospitality operations, brand development, and real
                estate. We believe enduring value is built through discipline
                and guest obsession.
              </p>
            </Col>

            <Col md={6}>
              <Card className="dark-card h-100">
                <Card.Body>
                  <h4 className="fw-bold mb-3">Our Foundation</h4>
                  <p className="text-muted-light">
                    Established in Dubai, 9x Investments has built its reputation
                    through strategic investments in premium hospitality and
                    nightlife destinations.
                  </p>
                  <p className="text-muted-light">
                    Our portfolio includes Slay DIFC and Mantis Dubai — brands
                    defined by strong identity, operational excellence, and
                    unforgettable guest experiences.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="py-5 about-section">
        <Container>
          <SectionHeader
            eyebrow="Investment Criteria"
            title="What We Look For"
            subtitle="Key characteristics we seek in hospitality and nightlife investments."
            center
            light
          />

          <Row className="g-4 mt-2">
            {[
              {
                title: "Brand & Positioning",
                text: "Distinct brand identities with compelling storytelling and clear market positioning.",
              },
              {
                title: "Guest Experience",
                text: "Uncompromising focus on atmosphere, service quality, and memorable experiences.",
              },
              {
                title: "Operational Excellence",
                text: "Strong leadership, disciplined operations, and financial control.",
              },
              {
                title: "Growth Potential",
                text: "Scalable concepts with potential for expansion and market leadership.",
              },
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="dark-card h-100 text-center">
                  <Card.Body>
                    <Card.Title className="fw-semibold mb-2">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted-light">
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-5 bg-dark text-light">
        <Container>
          <SectionHeader
            eyebrow="Our Values"
            title="Principles that guide our partnerships"
            center
            light
          />

          <Card className="dark-card mt-4">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Excellence</strong> — High standards across food,
                    service, and design.
                  </p>
                  <p>
                    <strong>Partnership</strong> — True collaboration with
                    founders and operators.
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <strong>Innovation</strong> — Continuous evolution of
                    concepts and experiences.
                  </p>
                  <p>
                    <strong>Sustainability</strong> — Long-term value over
                    short-term gains.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

     <section className="py-5 about-section">
  <Container>
    <SectionHeader
      eyebrow="Milestones"
      title="Our journey so far"
      subtitle="Key moments in the growth of 9x Investments."
      center
      light
    />

    <MilestonesTimeline />
  </Container>
</section>
    </>
  );
}

export default About;
